const readline = require('readline-sync');

const distance = readline.questionInt('Enter the distance (m): ');
const time = readline.questionInt('Enter the time (s): ');

const avgSpeed = distance / time;

console.log(`The average speed is ${avgSpeed.toFixed(1)} m/s (${(avgSpeed * 3.60).toFixed(1)} km/h)`);
