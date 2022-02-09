import React from 'react';

class Sum extends React.Component {

  constructor() {
    super()

    console.log('Execução constructor')

    this.state = {
      clickNumber: 0,
    }
  }

  handleChange = () => {
    // console.log(this);
    // console.log('Clicou!');
    this.setState((prevState, _props) => ({
      clickNumber: prevState.clickNumber + 1
    }))
  }

  render() {
    // console.log(this.props);
    // console.log(this);
    return (
      <>
        <h1>Hello</h1>
        <button onClick={this.handleChange}>Clique me</button>
        <span>{this.state.clickNumber}</span>
      </>
    );
  }
}

export default Sum