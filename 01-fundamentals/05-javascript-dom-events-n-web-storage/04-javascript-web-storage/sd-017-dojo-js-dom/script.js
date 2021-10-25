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

for(let i  = 0; i < 9; i += 1) {
  let gridDiv = document.querySelector('.grid');
  let cellDiv = document.createElement('div');
  cellDiv.className = 'celula';
  cellDiv.id = i;
  gridDiv.appendChild(cellDiv);
}

let theGrid = document.querySelectorAll('.grid');
theGrid.addEventListener('click', jogar);

function jogar() {
  // let pos = "'#" + position + "'";
  // let target = document.querySelectorAll(pos);
  // alert(pos);
  let getPlayer = document.querySelector('#player');
  let player1 = getPlayer.innerHTML = 'Vez do Jogador X';
  let player2 = getPlayer.innerHTML = 'Vez do Jogador O';
  let gridPlay = document.querySelector('.celula');
  let gridPlayId = gridPlay.id;
  let gridPlayx = gridPlay.innerHTML = 'x';
  let gridPlayo = gridPlay.innerHTML = 'o';
  for (let i = 0; i < 9; i += 1) {
  alert('click');
  }
}