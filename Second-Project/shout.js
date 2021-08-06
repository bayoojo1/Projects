const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h1>The message to shout is: ${shout}!!!</h1>`;

document.querySelector('main').innerHTML = shoutMessage;