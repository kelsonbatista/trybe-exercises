//DESAFIO XADREZ
// ver se o inimigo vai passar no caminho da rainha
// posicao rainha coluna 4 x linha 4


// Rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

// Inimigo
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 3;

//ver se a rainha pegou
let rainhaVenceu = false;

//melhor jeito de verificar eh se o inimigo esta no caminho da rainha
if (posicaoRainhaColuna === posicaoPecaColuna) {
  // console.log('rainha pegou o inimigo');
  rainhaVenceu = true;
}
// se apareceu na linha tb pega
if (posicaoRainhaLinha === posicaoPecaLinha) {
  // console.log('rainha pegou o inimigo');
  rainhaVenceu = true;
}

//desenvolver o algoritmo na diagonal
//vou ter que fazer teste em quadrantes para ver se da certo, se der certo replicar para os outros
// quadrante inferior esquerdo
 for (let i = 1 ; i < 8 ; i++) { // coloco ate 8 so para garantir pois eh o tamanho do tabuleiro
  let diagonalPecaLinha = posicaoRainhaLinha - i;
  let diagonalPecaColuna = posicaoRainhaColuna - i;

  if (diagonalPecaLinha < 1 || diagonalPecaColuna < 1) {
    break;
  }

  // console.log('diagonalPecaLinha: ', diagonalPecaLinha);
  // console.log('diagonalPecaColuna: ', diagonalPecaColuna);
  // console.log('------------------------------------');
  // preciso tirar os negativos, e a posicao dela 4x4, etc
  // mudar o for para i=1 - tira o 4x4
  // usar o break para nao ter negativos

  if ((posicaoPecaLinha === diagonalPecaLinha) && (posicaoPecaColuna === diagonalPecaColuna)) {
    rainhaVenceu = true;
  }

 }

 // quadrante superior esquerdo
 for (let i = 1 ; i < 8 ; i++) { // coloco ate 8 so para garantir pois eh o tamanho do tabuleiro
  let diagonalPecaLinha = posicaoRainhaLinha + i; // +1 quadr superior
  let diagonalPecaColuna = posicaoRainhaColuna + i; // +1 quadr superior

  if (diagonalPecaLinha < 1 || diagonalPecaColuna < 1) {
    break;
  }

  // console.log('diagonalPecaLinha: ', diagonalPecaLinha);
  // console.log('diagonalPecaColuna: ', diagonalPecaColuna);
  // console.log('------------------------------------');
  // preciso tirar os negativos, e a posicao dela 4x4, etc
  // mudar o for para i=1 - tira o 4x4
  // usar o break para nao ter negativos

  if ((posicaoPecaLinha === diagonalPecaLinha) && (posicaoPecaColuna === diagonalPecaColuna)) {
    rainhaVenceu = true;
  }

 }


 if (rainhaVenceu === false) {
   console.log('rainha venceu');
 } else {
   console.log('inimigo venceu');
 }
