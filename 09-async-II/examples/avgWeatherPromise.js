const getWeather = require('./getWeatherPromise');

getWeather(57)
    .then(temp => console.log(temp))
    .catch(temp => console.error(temp));

Promise.all([
    getWeather(57),
    getWeather(2),
    getWeather(5)
])
    .then(t => console.log((t[0] + t[1] + t[2]) / 3))
    .catch(console.error)
