export type AspectRatio = 'default' | '4:3' | '16:9' | (string & Record<never, never>);
export type PlaybackRate = 0.5 | 0.75 | 1.0 | 1.25 | 1.5 | 1.75 | 2.0 | (number & Record<never, never>);
export type Flip = 'normal' | 'horizontal' | 'vertical' | (string & Record<never, never>);

export declare class Player {
    get aspectRatio(): AspectRatio;
    set aspectRatio(ratio: AspectRatio);
    get enable(): string;
    set enable(state: string);
    get playbackRate(): PlaybackRate;
    set playbackRate(rate: PlaybackRate);
    get autoSize(): boolean;
    set autoSize(state: boolean);
    get autoHeight(): boolean;
    set autoHeight(state: boolean);
    get currentTime(): number;
    set currentTime(time: number);
    get duration(): number;
    get played(): number;
    get playing(): boolean;
    get flip(): Flip;
    set flip(state: Flip);
    get fullscreen(): boolean;
    set fullscreen(state: boolean);
    set fullscreenToggle(state: boolean);
    get fullscreenWeb(): boolean;
    set fullscreenWeb(state: boolean);
    set fullscreenWebToggle(state: boolean);
    get loaded(): number;
    get loadedTime(): number;
    get loop(): number[];
    set loop(value: number[]);
    get mini(): boolean;
    set mini(state: boolean);
    get pip(): boolean;
    set pip(state: boolean);
    get poster(): string;
    set poster(url: string);
    get rect(): DOMRect;
    get bottom(): number;
    get height(): number;
    get left(): number;
    get right(): number;
    get top(): number;
    get width(): number;
    get x(): number;
    get y(): number;
    set seek(time: number);
    set forward(time: number);
    set backward(time: number);
    get url(): string;
    set url(url: string);
    get volume(): number;
    set volume(percentage: number);
    get muted(): boolean;
    set muted(state: boolean);
    get title(): string;
    set title(title: string);
    get theme(): string;
    set theme(theme: string);
    get subtitleOffset(): number;
    set subtitleOffset(time: number);
    pause(): void;
    play(): Promise<void>;
    toggle(): void;
    attr(key: string, value?: any): unknown;
    cssVar(key: `--art-${string}`, value?: string): unknown;
    switchUrl(url: string): Promise<string>;
    switchQuality(url: string): Promise<string>;
    getDataURL(): Promise<string>;
    getBlobUrl(): Promise<string>;
    screenshot(): Promise<string>;
    airplay(): void;
    aspectRatioReset(state: boolean): void;
}
