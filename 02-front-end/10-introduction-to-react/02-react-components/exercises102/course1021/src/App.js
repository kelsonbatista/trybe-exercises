import "./App.css";
import React from 'react';
import Title from './components/Title';
import Movies from "./components/Movies";

class App extends React.Component {
  render() {
    // console.log(series);
    return (
      <>
        <Title titulo="Veja todas as séries" />
        <Movies />
      </>
    );
  }
}

export default App;
