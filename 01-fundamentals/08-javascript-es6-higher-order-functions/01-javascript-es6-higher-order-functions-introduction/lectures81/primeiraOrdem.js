// Funções de primeira ordem trabalham com parametros diferentes de função,
// por exemplo parametros do tipo string, number, object e ou array.

function mostraVeiculoMarca(veiculo, marca){
  console.log(`O veiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca', 'Volks');
mostraVeiculoMarca('Corsa', 'GM');

const mostraVeiculo = mostraVeiculoMarca;

mostraVeiculo('Chevette', 'GM');