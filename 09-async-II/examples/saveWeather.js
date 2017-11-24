const request = require('request');
const getWeather = geoid => new Promise((resolve, reject) => {
    const url = `https://api.weather.yandex.ru/v1/forecast?geoid=${geoid}`;

    request(url, (err, res, body) => err ?
        reject(err) :
        resolve(body));
});

const fs = require('fs');
const saveToFile = data => new Promise((reject, resolve) => {
    fs.writeFile('./result.json', data, err => err ?
        reject(err) :
        resolve('success'));
});


const identity = data => data;
const thrower = error => { throw error; };

// getWeather(57)
//     .then(() => JSON.parse('asdsds'))
//     .then(identity, () => ({ fact: { temp: 0 } }))
//     .then(data => saveToFile(data.fact.temp))
//     .then(console.log)
//     .catch(console.error);

const getTempData = async geoid => {
    try {
        const body = await getWeather(geoid);

        return JSON.parse(body);
    } catch (error) {
        return { fact: { temp: 0 } };
    }
}

const run = async () => {
    const data = await getTempData(54);

    return await saveToFile(data.fact.temp);
}

run()
    .then(console.log)
    .catch(console.error);
