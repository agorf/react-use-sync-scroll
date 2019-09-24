import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'useSyncScroll',
      globals: {
        react: 'React'
      }
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    babel(),
    copy({
      targets: [
        { src: './index.d.ts', dest: './dist' }
      ]
    })
  ]
};
