const request = require('request');
const getWeather = geoid => new Promise((resolve, reject) => {
    const url = `https://api.weather.yandex.ru/v1/forecast?geoid=${geoid}`;

    request(url, (err, res, body) => {
        if (err) {
            reject(err);
        } else {
            const data = JSON.parse(body);

            resolve(data.fact.temp);
        }
    });
});

module.exports = getWeather;
