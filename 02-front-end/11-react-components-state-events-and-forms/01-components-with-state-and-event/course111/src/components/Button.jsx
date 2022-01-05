import React from 'react';

function handleClick() {
  console.log('Clique no botao sim');
}

class Button extends React.Component {
  render() {
    const { text, bname } = this.props;
    return (
      <button onClick={handleClick}>{bname}</button>
    );
  }
}

export default Button;