/*

09 - Aprovação nos projetos

Aqui na Trybe você precisa entregar os projetos dentro de algumas regras para obter aprovação.

Escreva um algoritmo que recebe um objeto com a seguinte estrutura:
{
rec: bool,
reqs: number int,
allReqs: number int,
completed: number int,
}

Onde:
* rec: informando se a pessoa estudante está ou não em recuperação;
* reqs: são os requisitos obrigatórios;
* allReqs: são os requisitos obrigatórios mais os bônus:
* completed: quantidade de requisitos feitos, completados:

Considere as seguintes premissas:
* Se a pessoa não estiver em período de recuperação, é preciso entregar 80% ou mais dos requisitos obrigatórios para obter aprovação;
* Se a pessoa estiver em período de recuperação, é preciso entregar 90% dos requisitos totais (obrigatórios + bônus) para obter aprovação;

Caso a pessoa tenha conseguido entregar o projeto retorne:
----------------------------------
"Parabéns, você está aprovado(a)!"
----------------------------------

Caso a pessoa não tenha conseguido entregar o projeto retorne:
-----------------------------------------------
"Você ainda precisa entregar mais requisitos;)"
-----------------------------------------------

*/

function evaluateProject(obj){
  // Desenvolva seu código nessa função
  let message = '';
  let completedReqs = ((obj.completed/obj.reqs) * 100);
  let completedAllReqs = ((obj.completed/obj.allReqs) * 100);
  if(obj.rec) {
    if(completedAllReqs >= 90) {
      message = 'Parabéns, você está aprovado(a)!';
    } else {
      message = 'Você ainda precisa entregar mais requisitos ;)';
    }
  } else if (completedReqs >= 80) {
      message = 'Parabéns, você está aprovado(a)!';
  } else {
      message = 'Você ainda precisa entregar mais requisitos ;)';
  }
  return message;
}
console.log(evaluateProject({rec: true, reqs: 80, allReqs: 100, completed: 90}))
module.exports = evaluateProject;
