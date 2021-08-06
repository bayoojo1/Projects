let noun = prompt("Provide a noun");
let verb = prompt("Provide a verb");
let adjective = prompt("Provide an adjective");

let storyLine = `Who ${verb} a/an ${adjective} ${noun}?`;

document.querySelector('main').innerHTML = storyLine;