const x = 3; // escopo global

function func(bool) {
  if (bool) {
    const x = 48; // (A) escopo: bloco if
  }

  return x; // acessa o x do escopo global
}

console.log(func(true)); // returns 3
console.log(func(false)); // returns 3