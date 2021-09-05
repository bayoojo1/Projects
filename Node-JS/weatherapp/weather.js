// API Key
const apiKey = '3b64c18b60444a43a4ad2edb03099a79';

// Require https module
const https = require('https');

// Require http module
const http = require('http');

// Print error message
function printError(error) {
    console.error(error.message);
}

// Function to print message to console
function printMessage(cityName, currentWeather, temperature, humidity, visibility, pressure, windSpeed) {
    const message = `Below are the current weather condition in ${cityName}:
     Weather: ${currentWeather}
     Temperature: ${temperature} degree Celsius
     Humidity: ${humidity} g/kg
     Visibility: ${visibility} mtrs
     Air Pressure: ${pressure} hpa
     Wind Speed: ${windSpeed} m/s`;
    console.log(message);
}

function getWeather(cityName) {
    try {
        // Connect to the API URL (api.openweathermap.org)
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`, response => {
            if(response.statusCode === 200) {
                let body = "";
                // Read the data
                response.on('data', data => {
                    body += data.toString();
                });
                // Parse the data
                response.on('end', () => {
                    const result = JSON.parse(body);
                    // Print the data
                    printMessage(cityName, result.weather[0].description, result.main.temp, result.main.humidity, result.visibility, result.main.pressure, result.wind.speed);
                });
            } else {
                const message = `There was an error getting the data for ${cityName}. (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', printError);
    } catch (error) {
        printError(error);
    }
}

module.exports.get = getWeather;