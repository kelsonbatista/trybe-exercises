// verifica se é numero primo ou nao


let primo = 770;
let count = 0;

for(let i=1; i <= primo; i++) {
  if (primo%i === 0) count += 1;
}

if (count === 2) {
  console.log(`O número ${primo} é primo.`);
} else {
  console.log(`O número ${primo} não é primo.`);
}