import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      banner: '/* eslint-disable */',
      exports: 'auto',
    },
    { file: pkg.common, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'esm', exports: 'auto' },
  ],
  plugins: [typescript()],
};
