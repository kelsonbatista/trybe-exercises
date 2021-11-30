// Função sincrona que 'força' uma para no processamento
const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration);
};

const informacaoTotem = (mensagem) => {
  console.log(mensagem);
};

const prepararBigMac = (callback) => {
  setTimeout(() => {
    informacaoTotem('Praparando Big mac.....');
    informacaoTotem('Big mac pronto!');
    callback();
  }, Math.random() * 2000);
};

const prepararBigTasty = () => {
  setTimeout(() => {
    informacaoTotem('Praparando Big tasty.....');
    informacaoTotem('Big tasty pronto!');
    informacaoTotem('Pedido de nr. 51 finalizado!');
  }, Math.random() * 2000);
};

informacaoTotem('Pedido de lanches nr. 51 realizado com sucesso!');
informacaoTotem('Lanches sendo preparados....');

prepararBigMac(prepararBigTasty);
// prepararBigTasty();


