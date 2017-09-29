let assert = require('assert');
let executeCommand = require('./execute-command');

assert.equal(
    executeCommand('say', 'hello'),
    'hello'
);

assert.equal(
    executeCommand('double', '5'),
    '10'
);

assert.equal(
    executeCommand('askdlfhasdlkjf', 'sdfkjhasldjf'),
    'unknown command'
);

assert.equal(
    executeCommand('time'),
    new Date().toString()
);

console.log('All test passed!');
