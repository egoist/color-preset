const fs = require('mz/fs')
const co = require('co')
const fetch = require('node-fetch')
const postcss = require('postcss')

co(function * () {
  const main = yield fetch('https://github.com/palantir/blueprint/raw/master/packages/core/src/common/_colors.scss')
    .then(res => res.text())
  const alias = yield fetch('https://github.com/palantir/blueprint/raw/master/packages/core/src/common/_color-aliases.scss')
    .then(res => res.text())
  const {css} = yield postcss([
    require('postcss-discard-comments'),
    require('postcss-strip-inline-comments')
  ]).process(main.replace('@import "color-aliases";', alias), {
    syntax: require('postcss-scss')
  })
  yield fs.writeFile('./blueprint.css', css, 'utf8')
}).catch(err => {
  console.log(err.stack)
})
