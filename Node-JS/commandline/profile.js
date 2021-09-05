//Problem: We need a simple way to look at user's badge count and JavaScript points
//Solution: Use Node.Js to connect to Treehouse's API to get profile information to print out
// Require https module
const https = require('https');
// Require http module
const http = require('http');
//const username = "adebayoojo";

// Print error message
function printError(error) {
    console.error(error.message);
}


// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount.toLocaleString()} total badge(s) and ${points.toLocaleString()} points in JavaScript`;
    console.log(message);
}


//printMessage("Bayo", 2000, 1200);
function getProfile(username) {
    try {
        // Connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            if(response.statusCode === 200) {
                //console.log(response.statusCode);
                let body = "";
                // Read the data
                response.on('data', data => {
                    body += data.toString();
                });

                response.on('end', () => {
                    try {
                        // Parse the data
                        const profile = JSON.parse(body);
                        //console.dir(profile);
                        //console.log(profile);
                        // Print the data
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', printError);
    } catch (error) {
        printError(error);
    }
}

module.exports.getP = getProfile;