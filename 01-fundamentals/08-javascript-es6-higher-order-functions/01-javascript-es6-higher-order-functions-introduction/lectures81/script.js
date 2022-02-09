const btnBoasVindas = document.getElementById('boasVindas');
const inputNome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

const montaMensagem = () => {
  let textoDaMensagem = `Seja muito bem vindo a nossa página ${inputNome.value}`;
  mensagem.innerHTML = textoDaMensagem;
};

btnBoasVindas.addEventListener('click', montaMensagem);

