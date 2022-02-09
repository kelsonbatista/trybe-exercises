const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]
let ptsPlayer1 = [];
let ptsPlayer2 = [];
let count = 0;
let turn = 0;
let btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', reset);

function theGrid(){
  for(let i  = 0; i < 9; i += 1) {
    let gridDiv = document.querySelector('.grid');
    let cellDiv = document.createElement('div');
    cellDiv.className = 'celula';
    cellDiv.id = i;
    gridDiv.appendChild(cellDiv);

    let theGrid = document.querySelectorAll('.celula');
    theGrid[i].addEventListener('click', jogar);
  }
}

theGrid();

function jogar(event) {
  turn += 1;
  let divPlayer = document.querySelector('#player');
  let getPlayer = document.querySelector('#player').textContent;
  let gridPlayId = event.target.id;

  if (getPlayer === 'Vez do jogador X') {
    document.getElementById(gridPlayId).innerHTML = 'X';
    divPlayer.innerHTML = 'Vez do jogador O';
    checkTies(turn);
    ptsPlayer1.push(gridPlayId);
    checkWinner('X', ptsPlayer1);
    // console.log(ptsPlayer1);
  } else {
    document.getElementById(gridPlayId).innerHTML = 'O';
    divPlayer.innerHTML = 'Vez do jogador X';
    checkTies(turn);
    ptsPlayer2.push(gridPlayId);
    checkWinner('O', ptsPlayer2);
    // console.log(ptsPlayer2);
  }

}

function checkWinner(player, points){
  // console.log(`Enter to check ${player} ${points}`);
  for(let i = 0; i < combinacoes.length; i += 1) {
    // console.log(`combinacoes[i] = ${combinacoes[i]}`)

    for(let j = 0; j < combinacoes[i].length; j += 1) {
      // console.log(`combinacoes[i][j] = ${combinacoes[i][j]}`)

      for(let w = 0; w < points.length; w += 1) {
        // console.log(`points[w] = ${points[w]}`)
          // console.log(`c[i][j] === p[j] ${combinacoes[i][j]} === ${points[w]}`)
        if(combinacoes[i][j] == points[w]) {
          count += 1;
          // console.log(count);
          break;
        }
      }
      if (count === 3) {
        return alert(`Jogador ${player} é o vencedor!`);
      }
    } count = 0;
  } return turn;
}

function checkTies(rounds){
  if(rounds === 9) {
    alert('EMPATE!');
  }
}

function reset(){
  for(let i  = 0; i < 9; i += 1) {
    let theGrid = document.querySelectorAll('.celula');
    theGrid[i].innerHTML = '';
    ptsPlayer1 = [];
    ptsPlayer2 = [];
    count = 0;
    turn = 0;
  }
}