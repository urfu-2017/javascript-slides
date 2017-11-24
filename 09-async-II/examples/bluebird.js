const getWeather = require('./getWeatherPromise');
const Promise = require('bluebird');

Promise
    .props({
        ekb: getWeather(54),
        spb: getWeather(2),
        msk: getWeather(5)
    })
    .then(({ ekb, spb, msk }) => {
        console.log((ekb + spb + msk) / 3);
    });
