const fs = require('fs-extra')

test('Copy', async () => {
  const src = 'tests/fixtures/src/asset.js'
  const dest = 'tests/fixtures/dist/asset.js'

  await fs.copy(src, dest)

  // check if file exists
})
