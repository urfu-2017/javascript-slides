// const storage = require('./storage');
const { save, load } = require('./storage');

// const command = process.argv[2];
// const params = process.argv.slice(3);
const [,, command, ...params] = process.argv;

let memos = load() || [];

switch (command) {
    case 'add':
        const text = params.join(' ');
        const memo = {
            text,
            date: new Date().toISOString(),
        };
        memos.push(memo);
        save(memos);
        break;
    case 'remove':
        const index = Number(params[0]);
        memos.splice(index, 1);
        save(memos);
        break;
    case 'list':
        for (const { text, date } of memos) {
            console.log(
                `${text} (${date})`
            );
        }
        break;
}
