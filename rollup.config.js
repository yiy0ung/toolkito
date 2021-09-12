import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const banner = `/* Toolkito: v${pkg.version} */`;

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      banner,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'auto',
      banner,
    },
  ],
  plugins: [typescript()],
};
