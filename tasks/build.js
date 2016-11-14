const {spawnSync} = require('child_process')
const pkg = require('../package')

Object.keys(pkg.scripts)
  .filter(name => name.startsWith('build:'))
  .forEach(name => {
    spawnSync('npm', ['run', name], {stdio: 'inherit'})
  })
