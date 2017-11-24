const request = require('request');
const url = 'https://api.weather.yandex.ru/v1/forecast?geoid=54';

request(url, (err, res, body) => {
    const data = JSON.parse(body);

    console.log(data.fact);
});
