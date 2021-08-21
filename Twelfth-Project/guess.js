const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);

let attempt = 0;
let message;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

do {
    guess = prompt('I\'m thinking of a number between 1 and 10. What is it?');
    attempt++;
    // Terminate the loop once user guess correctly
    if (parseInt(guess) === randomNumber) {
        message = `<h1>It took you ${attempt} attempts to guess the number ${randomNumber}.</h1>`;
        break;
    } else {
        message = `You did not get the number. It was ${randomNumber};`;
    }
} while (attempt < 10);

main.innerHTML = `<h1>${message}</h1>`;