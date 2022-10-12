# node-exercise-1

This program only accepts a SINGLE argument that is a file path (Absolute or Relative path is acceptable) then displays the contents of the file per line with the syntax `<line number>: <contents of the line>`.


Using a node package [fs.readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) and [fs.existsSync](https://nodejs.org/api/fs.html#fsexistssyncpath)

> fs.readFileSync reads the contents of the file
> <br/>fs.existsSync checks if the file exists


To run the program, kindly use `node index.js "<file path>"`

* The program checks frist if the argument given is a single argument.

* If the argument is non-singular, the program will display a message `This program only accepts a SINGLE arguement`.
<br/>e.g.
> `node index index.js README.md`
> <br/>`This program only accepts a SINGLE arguement`

* If the argument is singular, the program will first check if the file exists. If the file does not exist, it will display a message `This file does not EXIST`.
<br/>e.g.
> `node index test.js`
> <br/>`This file does not EXIST`

* If the argument is singular and the file exists, the program will display the contents of the file.
<br/>e.g.
> `node index index.js`
> <br/>`1: const { argv } = require('node:process')`
> <br/>`2: const fs = require('node:fs')`
> <br/> `<will continue until the end of the file>`