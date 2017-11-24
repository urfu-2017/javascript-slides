const getWeather = require('./getWeather');

console.time('Consistently');
getWeather(57, (err, t1) => {
    getWeather(2, (err, t2) => {
        getWeather(5, (err, t3) => {
            console.log((t1 + t2 + t3) / 3);
            console.timeEnd('Consistently'); // 691.148ms
        });
    });
});

console.time('parallel');
const t = [];
const cb = (err, temp) => {
    t.push(temp);

    if(t.length === 3) {
        console.log((t[0] + t[1] + t[2]) / 3);
        console.timeEnd('parallel');
    }
}

getWeather(57, cb);
getWeather(2, cb);
getWeather(5, cb);
