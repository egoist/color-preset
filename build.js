'use strict'
const fs = require('fs')
const color = require('color-lib')
const toKebab = require('camel2kebab')

let res = ''

for (const colorName of Object.keys(color)) {
  const value = color[colorName]
  for (const subject of Object.keys(value)) {
    const subName = subject === 'hex' ? '' : `-${subject}`
    res += `$${toKebab(colorName)}${subName}: ${color[colorName].hex};\n`
  }
}

fs.writeFileSync('./color.css', res, 'utf8')
