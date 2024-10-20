import flip from './flip';
import aspectRatio from './aspectRatio';
import playbackRate from './playbackRate';
import subtitleOffset from './subtitleOffset';
import Component from '../utils/Component';
import {
    def,
    has,
    remove,
    append,
    getRect,
    addClass,
    setStyle,
    isMobile,
    errorHandle,
    inverseClass,
    createElement,
    replaceElement,
    includeFromEvent,
    isStringOrNumber,
} from '../utils';

export default class Setting extends Component {
    constructor(art) {
        super(art);

        const {
            option,
            controls,
            template: { $setting },
        } = art;

        this.name = 'setting';
        this.$parent = $setting;

        this.id = 0;
        this.active = null;
        this.cache = new Map();
        this.symbol = Symbol('setting');
        this.option = [...this.builtin, ...option.settings];

        if (option.setting) {
            this.format();
            this.render();

            art.on('blur', () => {
                if (this.show) {
                    this.show = false;
                    this.render();
                }
            });

            art.on('focus', (event) => {
                const isControl = includeFromEvent(event, controls.setting);
                const isSetting = includeFromEvent(event, this.$parent);
                if (this.show && !isControl && !isSetting) {
                    this.show = false;
                    this.render();
                }
            });

            art.on('resize', () => this.resize());
        }
    }

    get builtin() {
        const result = [];
        const { option } = this.art;

        if (option.playbackRate) {
            result.push(playbackRate(this.art));
        }

        if (option.aspectRatio) {
            result.push(aspectRatio(this.art));
        }

        if (option.flip) {
            result.push(flip(this.art));
        }

        if (option.subtitleOffset) {
            result.push(subtitleOffset(this.art));
        }

        return result;
    }

    format(option = this.option, parent, parents, names = []) {
        for (let index = 0; index < option.length; index++) {
            const item = option[index];
            if (!item.$formatted) {
                if (item?.name) {
                    errorHandle(!names.includes(item.name), `The [${item.name}] is already exist in [setting]`);
                    names.push(item.name);
                } else {
                    item.name = `setting-${this.id++}`;
                }

                def(item, '$parent', {
                    get: () => parent,
                });

                def(item, '$parents', {
                    get: () => parents,
                });

                def(item, '$option', {
                    get: () => option,
                });

                const $events = [];
                def(item, '$events', {
                    get: () => $events,
                });

                def(item, '$formatted', {
                    get: () => true,
                });
            }
            this.format(item.selector || [], item, option, names);
        }
        this.option = option;
    }

    find(name = '', option = this.option) {
        for (let index = 0; index < option.length; index++) {
            const item = option[index];
            if (item.name === name) {
                return item;
            } else {
                const result = this.find(name, item.selector || []);
                if (result) return result;
            }
        }
    }

    resize() {
        const {
            controls,
            constructor: { SETTING_WIDTH, SETTING_ITEM_HEIGHT },
            template: { $player, $setting },
        } = this.art;

        if (controls.setting && this.show && !isMobile) {
            const settingWidth = this.active[0]?.$parent?.width || SETTING_WIDTH;
            const { left: controlLeft, width: controlWidth } = getRect(controls.setting);
            const { left: playerLeft, width: playerWidth } = getRect($player);
            const settingLeft = controlLeft - playerLeft + controlWidth / 2 - settingWidth / 2;

            const settingHeight =
                this.active === this.option
                    ? this.active.length * SETTING_ITEM_HEIGHT
                    : (this.active.length + 1) * SETTING_ITEM_HEIGHT;

            setStyle($setting, 'height', `${settingHeight}px`);
            setStyle($setting, 'width', `${settingWidth}px`);
            if (settingLeft + settingWidth > playerWidth) {
                setStyle($setting, 'left', null);
                setStyle($setting, 'right', null);
            } else {
                setStyle($setting, 'left', `${settingLeft}px`);
                setStyle($setting, 'right', 'auto');
            }
        }
    }

    remove(name) {
        const item = this.find(name);
        errorHandle(item, `Can't find [${name}] in the [setting]`);
        const index = item.$option.indexOf(item);
        item.$option.splice(index, 1);
        for (let index = 0; index < item.$events.length; index++) {
            item.$events[index]();
        }
        if (item.$item) {
            remove(item.$item);
        }
        this.render();
    }

    update(target) {
        const item = this.find(target.name);
        if (item) {
            Object.assign(item, target);
            this.format();
            this.creatItem(item, true);
            this.render();
        } else {
            this.add(item);
        }
    }

    add(item, option = this.option) {
        option.push(item);
        this.format();
        this.creatItem(item);
        this.render();
    }

    creatHeader(item) {
        if (!this.cache.has(item.$option)) return;
        const $panel = this.cache.get(item.$option);

        const {
            proxy,
            icons: { arrowLeft },
            constructor: { SETTING_ITEM_HEIGHT },
        } = this.art;

        const $item = createElement('div');
        setStyle($item, 'height', `${SETTING_ITEM_HEIGHT}px`);
        addClass($item, 'art-setting-item');
        addClass($item, 'art-setting-item-back');
        const $left = append($item, '<div class="art-setting-item-left"></div>');
        const $icon = createElement('div');
        addClass($icon, 'art-setting-item-left-icon');
        append($icon, arrowLeft);
        append($left, $icon);
        append($left, item.$parent.html);
        const event = proxy($item, 'click', () => this.render(item.$parents));
        item.$parent.$events.push(event);
        append($panel, $item);
    }

    creatItem(item, isUpdate = false) {
        if (!this.cache.has(item.$option)) return;
        const $panel = this.cache.get(item.$option);
        const oldItem = item.$item;

        let type = 'selector';

        if (has(item, 'switch')) {
            type = 'switch';
        }

        if (has(item, 'range')) {
            type = 'range';
        }

        const { icons, proxy, constructor } = this.art;

        const $item = createElement('div');
        addClass($item, 'art-setting-item');
        setStyle($item, 'height', `${constructor.SETTING_ITEM_HEIGHT}px`);

        if (isStringOrNumber(item.name)) {
            $item.dataset.name = item.name;
        }

        if (isStringOrNumber(item.value)) {
            $item.dataset.value = item.value;
        }

        const $left = append($item, '<div class="art-setting-item-left"></div>');
        const $right = append($item, '<div class="art-setting-item-right"></div>');

        const $icon = createElement('div');
        addClass($icon, 'art-setting-item-left-icon');

        switch (type) {
            case 'switch':
            case 'range':
                append($icon, isStringOrNumber(item.icon) || item.icon instanceof Element ? item.icon : icons.config);
                break;
            case 'selector':
                if (item.selector && item.selector.length) {
                    append(
                        $icon,
                        isStringOrNumber(item.icon) || item.icon instanceof Element ? item.icon : icons.config,
                    );
                } else {
                    append($icon, icons.check);
                }
                break;
            default:
                break;
        }

        append($left, $icon);

        def(item, '$icon', {
            get: () => $icon,
        });

        def(item, 'icon', {
            configurable: true,
            get() {
                return $icon.innerHTML;
            },
            set(value) {
                if (isStringOrNumber(value)) {
                    $icon.innerHTML = value;
                }
            },
        });

        const $html = createElement('div');
        addClass($html, 'art-setting-item-left-text');
        append($html, item.html || '');
        append($left, $html);

        def(item, '$html', {
            get: () => $html,
        });

        def(item, 'html', {
            configurable: true,
            get() {
                return $html.innerHTML;
            },
            set(value) {
                if (isStringOrNumber(value)) {
                    $html.innerHTML = value;
                }
            },
        });

        const $tooltip = createElement('div');
        addClass($tooltip, 'art-setting-item-right-tooltip');
        append($tooltip, item.tooltip || '');
        append($right, $tooltip);

        def(item, '$tooltip', {
            get: () => $tooltip,
        });

        def(item, 'tooltip', {
            configurable: true,
            get() {
                return $tooltip.innerHTML;
            },
            set(value) {
                if (isStringOrNumber(value)) {
                    $tooltip.innerHTML = value;
                }
            },
        });

        switch (type) {
            case 'switch': {
                const $state = createElement('div');
                addClass($state, 'art-setting-item-right-icon');
                const $switchOn = append($state, icons.switchOn);
                const $switchOff = append($state, icons.switchOff);
                setStyle(item.switch ? $switchOff : $switchOn, 'display', 'none');
                append($right, $state);
                item.$switch = item.switch;

                def(item, 'switch', {
                    configurable: true,
                    get() {
                        return item.$switch;
                    },
                    set(value) {
                        item.$switch = value;
                        if (value) {
                            setStyle($switchOff, 'display', 'none');
                            setStyle($switchOn, 'display', null);
                        } else {
                            setStyle($switchOff, 'display', null);
                            setStyle($switchOn, 'display', 'none');
                        }
                    },
                });
                break;
            }
            case 'range':
                {
                    const $state = createElement('div');
                    addClass($state, 'art-setting-item-right-icon');
                    const $range = append($state, '<input type="range">');
                    $range.value = item.range[0] || 0;
                    $range.min = item.range[1] || 0;
                    $range.max = item.range[2] || 10;
                    $range.step = item.range[3] || 1;
                    addClass($range, 'art-setting-range');
                    append($right, $state);

                    def(item, '$range', {
                        get: () => $range,
                    });

                    def(item, 'range', {
                        configurable: true,
                        get() {
                            return $range.valueAsNumber;
                        },
                        set(value) {
                            $range.value = Number(value);
                        },
                    });
                }
                break;
            case 'selector':
                if (item.selector && item.selector.length) {
                    const $state = createElement('div');
                    addClass($state, 'art-setting-item-right-icon');
                    append($state, icons.arrowRight);
                    append($right, $state);
                }
                break;
            default:
                break;
        }

        switch (type) {
            case 'switch': {
                if (item.onSwitch) {
                    const event = proxy($item, 'click', async (event) => {
                        item.switch = await item.onSwitch.call(this.art, item, $item, event);
                    });
                    item.$events.push(event);
                }
                break;
            }
            case 'range': {
                if (item.$range) {
                    if (item.onRange) {
                        const event = proxy(item.$range, 'change', async (event) => {
                            item.tooltip = await item.onRange.call(this.art, item, $item, event);
                        });
                        item.$events.push(event);
                    }

                    if (item.onChange) {
                        const event = proxy(item.$range, 'input', async (event) => {
                            item.tooltip = await item.onChange.call(this.art, item, $item, event);
                        });
                        item.$events.push(event);
                    }
                }
                break;
            }
            case 'selector':
                {
                    const event = proxy($item, 'click', async (event) => {
                        if (item.selector && item.selector.length) {
                            this.render(item.selector);
                        } else {
                            inverseClass($item, 'art-current');

                            for (let index = 0; index < item.$parent.selector.length; index++) {
                                const element = item.$parent.selector[index];
                                element.default = element === item;
                            }

                            if (item.$parents) {
                                this.render(item.$parents);
                            }

                            if (item.$parent && item.$parent.onSelect) {
                                const result = await item.$parent.onSelect.call(this.art, item, $item, event);
                                if (item.$parent.$tooltip && isStringOrNumber(result)) {
                                    item.$parent.$tooltip.innerHTML = result;
                                }
                            }
                        }
                    });

                    item.$events.push(event);

                    if (item.default) {
                        addClass($item, 'art-current');
                    }
                }
                break;
            default:
                break;
        }

        def($item, this.symbol, {
            get: () => item,
        });

        def(item, '$item', {
            get: () => $item,
        });

        if (isUpdate) {
            replaceElement($item, oldItem);
        } else {
            append($panel, $item);
        }
    }

    render(option = this.option) {
        this.active = option;
        if (this.cache.has(option)) {
            const $panel = this.cache.get(option);
            inverseClass($panel, 'art-current');
        } else {
            const $panel = createElement('div');
            addClass($panel, 'art-setting-panel');
            this.cache.set(option, $panel);

            if (option[0]?.$parent) {
                this.creatHeader(option[0]);
            }

            for (let index = 0; index < option.length; index++) {
                this.creatItem(option[index]);
            }

            append(this.$parent, $panel);
            inverseClass($panel, 'art-current');

            for (let index = 0; index < option.length; index++) {
                const item = option[index];
                if (item.mounted) {
                    item.mounted.call(this.art, $panel, item);
                }
            }
        }
        this.resize();
    }
}
