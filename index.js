const { argv } = require('node:process')
const fs = require('node:fs')

if (argv.length !== 3) {
  console.log('This program only accepts a SINGLE arguement')
} else if (!fs.existsSync(argv[2])) {
  console.log('This file does not EXIST')
} else {
  let i = 0

  const fileLines = fs.readFileSync(argv[2], 'utf-8')

  fileLines.split('\n').forEach((line) => {
    i += 1
    console.log(`${i}: ${line}`)
  })
}
