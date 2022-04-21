let array = ['1,2,50','1,7,70','1,3,20','2,2,17'];
const threshold = 2;
let newArr = [];
let numbers = [];

function checkUsers(array, threshold) {
  for(let i = 0; i < array.length; i += 1) {
    newArr.push(...(array[i].split(',')));
  }
  
  for(let a = 0; a < newArr.length; a += 1) {
    let count = 0;
    newArr.forEach((item) => {
      if(Number(item) == Number(newArr[a])) {
        count++;
        const findNumber = numbers.find((number) => number == item);
        if(!findNumber && count >= threshold) numbers.push(Number(item));
      }
    });
  }
  
  console.log(numbers);
}

checkUsers(array, threshold);
