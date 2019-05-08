const fastGlob = require('fast-glob')
const glob = require('glob')
const micromatch = require('micromatch')
const isGlob = require('is-glob')

async function run() {
  const pattern = 'assets/?ss.css'

  // fast glob
  console.log('fast-glob', await fastGlob(pattern)) // []

  // glob
  console.log('glob', glob.sync(pattern)) // [ 'assets/css.css' ]

  // micromatch
  console.log('micromatch', micromatch('assets/css.css', pattern)) // [ 'assets/css.css' ]

  // is glob
  console.log('is-glob', isGlob(pattern)) // false
}

run()
