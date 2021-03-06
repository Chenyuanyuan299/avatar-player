import { defineConfig } from 'rollup';
import path from 'path';

import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import typescript from '@rollup/plugin-typescript';

const isEnvDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  input: 'demo/src/main.ts',
  output: {
    file: 'demo/dist/index.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    scss({
      output: 'demo/dist/index.css',
      sourceMap: true,
      watch: ['demo/src/**'],
      sass: require('sass'),
    }),
    replace({
      preventAssignment: true,
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    alias({
      entries: {
        'avatar-player': path.resolve(__dirname, 'src'),
      },
    }),
    resolve(),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: [
        [
          '@vue/babel-plugin-jsx',
          {
            optimize: true,
          },
        ],
      ],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    terser(),
    isEnvDevelopment &&
      serve({
        contentBase: ['demo'],
        port: 5000,
      }),
    isEnvDevelopment && livereload({ watch: 'demo' }),
  ],
  watch: {
    include: ['demo/src/**', 'src/**'],
    exclude: 'node_modules/**',
  },
});
