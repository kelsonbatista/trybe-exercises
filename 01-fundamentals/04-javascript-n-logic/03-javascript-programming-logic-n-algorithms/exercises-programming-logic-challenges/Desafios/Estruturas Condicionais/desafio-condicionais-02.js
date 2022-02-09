/*

02 - Switch Case

Refatore a função abaixo para utilizar if/else.

NOTAS
abaixo de 10: PÉSSIMO
entre 11 e 30: RUIM
entre 31 e 50: REGULAR
entre 51 e 70: MEDIANO
entre 71 e 90: ÓTIMO
acima de 91: EXCELENTE

function studentSituation(studentNote) {
  let status = '';

  switch (true) {
    case (studentNote <= 10):
      status = 'PÉSSIMO';
      break;
    case (studentNote >= 11 && studentNote <= 30):
      status = 'RUIM';
      break;
    case (studentNote >= 31 && studentNote <= 50):
      status = 'REGULAR';
      break;
    case (studentNote >= 51 && studentNote <= 70):
      status = 'MEDIANO';
      break;
    case (studentNote >= 71 && studentNote <= 90):
      status = 'ÓTIMO';
      break;
    default:
      status = 'EXCELENTE';
  }
  return status;
}

*/

function studentSituation(studentNote){
  // Desenvolva seu código nessa função

  let sn = studentNote;
  if (sn <= 10) return 'PÉSSIMO';
  else if ((sn >= 11) && (sn <= 30)) return 'RUIM';
  else if ((sn >= 31) && (sn <= 50)) return 'REGULAR';
  else if ((sn >= 51) && (sn <= 70)) return 'MEDIANO';
  else if ((sn >= 71) && (sn <= 90)) return 'ÓTIMO';
  else return 'EXCELENTE';

}
console.log(studentSituation(67))
module.exports = studentSituation;