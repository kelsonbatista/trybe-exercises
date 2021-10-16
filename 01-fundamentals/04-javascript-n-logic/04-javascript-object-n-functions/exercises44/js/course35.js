// angulos internos - true se for triangulo e false se nao for, erro se invalido

function checkTriangle(n1, n2, n3) {
  if ((n1 || n2 || n3) <= 0) {
    console.log('Angulo inválido') 
  } else if ((n1 + n2 + n3) === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkTriangle(30,90,60)