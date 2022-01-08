import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    
  }

  render() {

    const { names } = this.props;

    return (
      <div className='form'>
        <h1>Lista</h1>
        <ul>
          {names.map((name) => (<li key={name}>Nome: {name}</li>))}
        </ul>
      </div>
    )
  }
}