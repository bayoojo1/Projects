let noun = prompt("Provide a noun");
let verb = prompt("Provide a verb");
let adjective = prompt("Provide an adjective");

let storyLine = `<p>Who ${verb} a/an ${adjective} ${noun}?</p>`;

document.querySelector('main').innerHTML = storyLine;