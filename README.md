# node-exercise-1

This program only accepts a two to three arguments being the first two arguments are a file path (Absolute or Relative path is acceptable) then writes the contents of the input file per line with the syntax `<line number>: <contents of the line>` to the output file.


Using a node package [fs.readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options), [fs.existsSync](https://nodejs.org/api/fs.html#fsexistssyncpath), and [fs.writeFileSync](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)

> fs.readFileSync reads the contents of the file
> <br/>fs.existsSync checks if the file exists
> <br/>fs.writeFileSync writes the contents into the file


To run the program, kindly use `node index.js <file path> <file path>` or `node index.js <file path> <file path> <condition>`

* The program checks first if the arguments given are two or three arguements.
7-8 if else README.md the only thing to be staged

* If the arguments are less than two, the program will display a message `You do not have enough arguments to run this program`.
<br/>e.g.
> `node index index.js`
> <br/>`You do not have enough arguments to run this program`

* If the arguments are more than three, the program will display a message `The program would only accept 2 or 3 arguments`.
<br/>e.g.
> `node index index.js index.js -y -n`
> <br/>`The program would only accept 2 or 3 arguments`

* The program will first check if the first file exists. If the file does not exist, it will display a message `This file does not EXIST`.
<br/>e.g.
> `node index test.js index.js`
> <br/>`This file does not EXIST`

* The program will first check if the second file exists. If the file exists and there was no condition or the condition was equal to `-n`, it will display a message `This file already EXISTS`.
<br/>e.g.
> `node index index.js index.js` or `node index index.js index.js -n`
> <br/>`This file already EXISTS`

* If the condition or the condition was equal not to `-n` or `-y`, it will display a message `Please enter either -y or -n`.
<br/>e.g.
> `node index index.js index.js -j`
> <br/>`Please enter either -y or -n`

* If the second file deos not exist, the program will write the contents of the first file and create a second file and put it there.
<br/>e.g.
> `node index index.js`
> <br/>`1: const { argv } = require('node:process')`
> <br/>`2: const fs = require('node:fs')`
> <br/> `<will continue until the end of the file>`

* If the file exists, and the condition is `-y` the program will overwrite the contents of the second file using the first file and put it there.
<br/>e.g.
> `node index index.js`
> <br/>`1: const { argv } = require('node:process')`
> <br/>`2: const fs = require('node:fs')`
> <br/> `<will continue until the end of the file>`