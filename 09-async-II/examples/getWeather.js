const request = require('request');
const getWeather = (geoid, cb) => {
    const url = `https://api.weather.yandex.ru/v1/forecast?geoid=${geoid}`;

    request(url, (err, res, body) => {
        if (err) {
            cb(err);
        } else {
            const data = JSON.parse(body);

            cb(null, data.fact.temp);
        }
    });
}

module.exports = getWeather;
