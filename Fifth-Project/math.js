const secsPerMinute = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weekPerYear = 52;

const secsPerDay = secsPerMinute * minsPerHour * hoursPerDay;
console.log(`There are ${secsPerDay} seconds in a day.`);

const yearsAlive = secsPerDay * daysPerWeek * weekPerYear * 49;

alert(`I've been alive for more than ${yearsAlive} seconds!`);