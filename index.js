const { argv } = require('node:process')
const fs = require('node:fs')

if (argv.length < 4) {
  console.log('You do not have enough arguments to run this program')
} else if (!argv.length === 4 || !argv.length === 5) {
  console.log('The program would only accept 2 or 3 arguments')
} else if (!fs.existsSync(argv[2])) {
  console.log('This file does not EXIST')
} else if (fs.existsSync(argv[3]) && (argv[4] === undefined || argv[4] === '-n')) {
  console.log('This file already EXISTS')
} else if (argv[4] !== '-y' && argv[4] !== '-n' && argv[4] !== undefined) {
  console.log('Please enter either -y or -n')
} else {
  let i = 0
  let outputLines = ''

  const fileLines = fs.readFileSync(argv[2], 'utf-8')

  fileLines.split('\n').forEach((line) => {
    i += 1
    outputLines += `${i}: ${line}\n`
  })

  if (fs.existsSync(argv[3]) && argv[4] === '-y') {
    fs.writeFileSync(argv[3], outputLines, 'utf8', 'w')
  } else {
    fs.writeFileSync(argv[3], outputLines, 'utf8')
  }
}
