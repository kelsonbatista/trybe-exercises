import React from 'react';
import './App.css';
import Button from './components/Button'

function handleClick1() {
  console.log('click btn 1');
}

function handleClick2() {
  console.log('click btn 2');
}

function handleClick3() {
  console.log('click btn 3');
}
class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={handleClick1}>Botao 1</button>
        <button onClick={handleClick2}>Botao 2</button>
        <button onClick={handleClick3}>Botao 3</button>
      </>
    );
  }
};

export default App;
