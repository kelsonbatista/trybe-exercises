// const randomNumber = (max) => {
  
// }

const resultLottery = (bet, callback) => {
  const random = Math.round((Math.random() * 5) + 1);
  return callback(bet, random) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const checkNumber = (bet, draw) => bet === draw;

// const max = 5;

// const repeat = (times, callback) => {
//   for(let i = 1; i <= times; i += 1) {
//     console.log(callback(max));
//   }
// }
console.log(resultLottery(2, checkNumber));
