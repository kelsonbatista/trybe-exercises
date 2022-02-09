var x = 3;

function func(bool) {
  // Hoisting
  // var x = undefined;
  
  if (bool) {
    var x = 48; // (A) escopo: funcao func
  }

  return x; // acessa o x da linha (A)
}

console.log(func(true)); // returns 48
console.log(func(false)); // returns undefined
