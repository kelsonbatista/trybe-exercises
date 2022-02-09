import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    classButton: PropTypes.string,
    name: PropTypes.string,
  }

  render() {
    const { type, name, id, classButton, value, onClick } = this.props;
    return (
      <div>
        <input type={type} name={name} id={id} className={classButton} value={value} onClick={onClick} />
      </div>
    )
  }
}
