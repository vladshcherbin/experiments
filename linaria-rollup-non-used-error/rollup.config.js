import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import linaria from 'linaria/rollup'
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/app.js',
    format: 'iife'
  },
  plugins: [
    resolve({
      jsnext: true,
      browser: true
    }),
    commonjs(),
    linaria(),
    css({
      output: 'build/app.css'
    })
  ]
}
