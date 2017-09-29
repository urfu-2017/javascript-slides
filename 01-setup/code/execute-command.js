function executeCommand(command, value) {
    switch (command) {
        case 'double':
            return Number(value) + Number(value);
        case 'say':
            return value;
        case 'time':
            return new Date().toString();
        default:
            return 'unknown command';
    }
}

module.exports = executeCommand;
