// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import fetchDog from './store/actions';

// 1 - quando o componente é com função (não classe), as props chegam dentro da chamada da função
// ex. minhaFuncao(minhasprops) - aqui embaixo mostra as props destruturadas.
// quando é componente classe, a função é chamada com constante
// ex. const { a, b, c } = this.props;

function App({ isFetching, src, fetchDog }) {
  // console.log(src, 'src');
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

// os dados estao sendo capturados do estado global e inseridos aqui nesse componente via props
const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

// o dispatch vai pegar uma ACTION (importada) e enviar para props
// a ACTION é para fazer requisicao na API ao clicar no botao
// o clique do botao chama direto a prop. Ele nao chama outra funcao pois nao tem mais nada para fazer
// ex. se no clique do botao precisa tb redirecionar p uma pagina, ai sim precisa chamar outra funcao, e depois dispatch
const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
