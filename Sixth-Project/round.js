let lowNumber = parseInt(prompt('Please provide a low number'));
let highNumber = parseInt(prompt('Please provide a high number'));

if(lowNumber && highNumber) {
    let randomNum = Math.floor(Math.random() * (highNumber - lowNumber +1)) + lowNumber;

    alert(`${randomNum} is a random number between ${lowNumber} and ${highNumber}.`);
} else {
    alert('You need to provide two numbers. Please try again');
}