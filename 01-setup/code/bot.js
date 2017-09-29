'use strict';

let commandArguments = process.argv;
let command = commandArguments[2];
let value = commandArguments[3];

let executeCommand = require('./execute-command');

let result = executeCommand(command, value);

console.log(result);
