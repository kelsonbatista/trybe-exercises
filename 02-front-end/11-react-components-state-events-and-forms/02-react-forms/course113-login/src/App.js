// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Forms from './Forms';
import List from './List';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      nomes: [],
    }
  }

  addItem = (name) => {
    console.log(name);
    // this.setState({
    //   nomes: name,
    // })
    this.setState((prevState, _props) => {
      return {
        nomes: [...prevState.nomes, name],
      }
    })
  }

  render() {

    const { nomes } = this.state;

    return (
      <main>
        <section className='sectionDiv'>
          <Forms addItem={this.addItem} />
        </section>
        <section className='sectionDiv'>
          <List names={nomes} />
        </section>
      </main>
    );
  }
}

export default App;
