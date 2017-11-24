const getWeather = require('./getWeather');
const async = require('async');

async.parallel([
    cb => getWeather(54, cb),
    cb => getWeather(2, cb),
    cb => getWeather(5, cb)
], (err, t) => {
    console.log((t[0] + t[1] + t[2]) / 3);
});
