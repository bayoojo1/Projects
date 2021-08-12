let correctAnswer = 0;
let rank;

questionOne = prompt("What is the capital of Nigeria?");
if(questionOne.toUpperCase() === 'ABUJA') {
    correctAnswer += 1;
}
questionTwo = prompt("What is the capital of Lagos?");
if(questionTwo.toUpperCase() === 'IKEJA') {
    correctAnswer += 1;
}
questionThree = prompt("What is the closest planet to the sun?");
if(questionThree.toUpperCase() === 'MERCURY') {
    correctAnswer += 1;
}
questionFour = prompt("What is the highest mountain in the world?");
if(questionFour.toUpperCase() === 'EVEREST') {
    correctAnswer += 1;
}
questionFive = prompt("What stongest metal?");
if(questionFive.toUpperCase() === 'DIAMOND') {
    correctAnswer += 1;
}


if(correctAnswer === 5) {
    rank = `Good, you scored ${correctAnswer}. Golden Crown!`;
} else if (correctAnswer >= 3) {
    rank = `Weldone, you scored ${correctAnswer}. Silver Crown!`;
} else if (correctAnswer >= 2) {
    rank = `Fair, you scored ${correctAnswer}. Bronze Crown!`;
} else {
    rank = 'Poor, you got no answer correct. No crown!';
}

document.querySelector('main').innerHTML = rank;