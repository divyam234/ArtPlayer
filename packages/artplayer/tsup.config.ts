import { defineConfig } from "tsup";
import { readFile } from "fs/promises";
import { Config, optimize } from "svgo";
import { lessLoader } from 'esbuild-plugin-less';
import fs from 'fs/promises';
import path from 'path';


function svgo(config?: Config) {
  return {
    name: "svgo",
    setup({ onLoad }) {
      onLoad({ filter: /\.svg$/ }, async args => {
        const raw = await readFile(args.path, "utf-8");
        const contents = optimize(raw, config).data;
        return { contents, loader: 'default' };
      })
    },
  };
}

export default defineConfig({
  clean: true,
  target: "es2019",
  format: ["esm","cjs"],
  bundle: true,
  entry: ["src/index.js","src/style/index.less"],
  esbuildPlugins: [svgo(),lessLoader()],
  loader: { '.svg': 'dataurl' },
  onSuccess: async () => {
    const distDir = path.resolve(__dirname, 'dist');
    const styleFolderPath = path.join(distDir, 'style');
    const oldPath = path.join(distDir, 'style/index.css');
    const newPath = path.join(distDir, 'artplayer.css');
    try {
      await fs.rename(oldPath, newPath);
      await fs.rmdir(styleFolderPath);
    } catch (error) {
      console.error('Error during onSuccess operations:', error);
    }
  }
});