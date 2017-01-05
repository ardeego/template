import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import liveReload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import uglify from 'rollup-plugin-uglify';
import string from 'rollup-plugin-string';

const PORT = 8080;
console.log(`open http://localhost:${PORT}/`);

export default {
  entry: 'index.js',
  sourceMap: true,
  targets: [
    {
      format: 'iife',
      moduleName: 'dl',
      dest: `dist/template.min.js`,
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      browser: true,
    }),
    string({
      include: ["**/*.svg", "**/*.html", "**/*.css"]
    }),
    buble({
      exclude: 'node_modules',
      target: { chrome: 52, safari: 8, edge: 13, firefox: 48, }
    }),
    commonjs(),
    uglify(),
    liveReload(),
    serve({port: PORT}),
  ]
};