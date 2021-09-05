const profile = require('./profile.js');

//const users = ["adebayoojo", "chalkers", "alenaholligan", "davemcfarland"];
const users = process.argv.slice(2);
users.forEach(profile.getP);
//getProfile("adebayoojo");
//getProfile("chalkers");
// users.forEach(username => {
//     getProfile(username);
// });
