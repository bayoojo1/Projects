/**
 * Returns a random number between two numbers.
 * 
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The upper number value.
 * @return {number} The random number value. 
 */



const randomNumber = (upper, lower) => {
    const result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    alert(`The random number between ${lower} and ${upper} is ${result}`);
};
randomNumber(20, 5);

