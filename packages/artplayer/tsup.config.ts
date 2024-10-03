import { defineConfig } from "tsup";
import { readFile } from "fs/promises";
import { Config, optimize } from "svgo";
import { lessLoader } from "esbuild-plugin-less";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";


export function formatDate(date) {
    var date = new Date(Number(date));
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return YY + MM + DD + ' ' + hh + mm + ss;
}

function svgo(config?: Config) {
	return {
		name: "svgo",
		setup({ onLoad }) {
			onLoad({ filter: /\.svg$/ }, async (args) => {
				const raw = await readFile(args.path, "utf-8");
				const contents = optimize(raw, config).data;
				return { contents, loader: "default" };
			});
		},
	};
}

const { version } = JSON.parse(
	fsSync.readFileSync("package.json", "utf-8"),
);

export default defineConfig({
	clean: true,
	target: "es2019",
	format: ["esm", "cjs"],
	bundle: true,
	env: {
		NODE_ENV: "production",
		APP_VER: version,
		BUILD_DATE: formatDate(Date.now()),
	},
	entry: ["src/index.js", "src/style/index.less"],
	dts: {
		entry: "types/index.ts",
	},
	esbuildPlugins: [
		svgo({
			plugins: [
				{
					name: "preset-default",
					params: {
						overrides: {
							removeViewBox: false,
						},
					},
				},
			],
		}),
		lessLoader(),
	],
	loader: { ".svg": "text" },
	onSuccess: async () => {
		const distDir = path.resolve(__dirname, "dist");
		const styleFolderPath = path.join(distDir, "style");
		const oldPath = path.join(distDir, "style/index.css");
		const newPath = path.join(distDir, "artplayer.css");
		try {
			await fs.rename(oldPath, newPath);
			await fs.rmdir(styleFolderPath);
		} catch (error) {
			console.error("Error during onSuccess operations:", error);
		}
	},
});
