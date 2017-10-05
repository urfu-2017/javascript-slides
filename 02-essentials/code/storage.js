const {
    readFileSync: read,
    writeFileSync: write,
} = require('fs');
const filename = `${__dirname}/storage.json`;

exports.save = data => {
    write(filename, JSON.stringify(data, null, 2));
};

exports.load = () => {
    try {
        return JSON.parse(read(filename, 'utf-8'));
    } catch (err) {}
};
