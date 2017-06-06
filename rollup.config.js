import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/ReactRest/index.js',
  dest: 'lib/index.js',
  moduleName: 'trampss-redux-saga-tester',
  format: 'umd',
  plugins: [
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}
