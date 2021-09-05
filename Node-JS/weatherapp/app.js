const weather = require('./weather.js');

const city = process.argv.slice(2);
// city.forEach(cityName => {
//     getWeather(cityName);
// });
//city.forEach(weather.get);
weather.get(city);