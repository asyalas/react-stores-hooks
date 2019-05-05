
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-cpy';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import {uglify} from 'rollup-plugin-uglify'

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    // {
    //   file: pkg.module,
    //   format: 'es',
    //   exports: 'named',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    external(),
    url(),
    resolve(),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      exclude: ['*.d.ts', '**/*.d.ts'],
    }),
    commonjs(),
    uglify(),
    copy([
      {
        files: ['src/index.ts', 'src/create.ts', 'src/interface.ts','src/StoreProvider.tsx','src/utils.ts'],
        dest: 'example/src/dist/',
      },
    ]),
  ],
};
