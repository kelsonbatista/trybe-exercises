// recebe uma peça de xadrez e retorne com movimento

function chessMoviment(piece) {

let lower = piece.toLowerCase();

  switch(lower) {
    case ('bispo'):
      console.log('diagonal');
      break;
    case ('rainha'):
      console.log('esquerda');
      break;
    case ('rei'):
      console.log('direita');
      break;
    default:
      console.log('peça nao existe');
      break;
  }

}

chessMoviment('RAINha')