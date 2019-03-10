import linaria from 'linaria/rollup'
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/app.js',
    format: 'iife'
  },
  plugins: [
    linaria(),
    css({
      output: 'build/app.css'
    })
  ]
}
