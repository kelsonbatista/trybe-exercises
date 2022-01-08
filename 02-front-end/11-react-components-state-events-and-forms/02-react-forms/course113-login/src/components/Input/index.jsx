import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    classInput: PropTypes.string,
    classLabel: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
  }

  render() {
    const { type, name, id, classInput, classLabel, value, onChange } = this.props
    // console.log(`Estou no filho com valor --> ${value}`);
    return (
      <div>
        <label htmlFor={id} className={classLabel}>{name}</label>
        <input type={type} name={name} id={id} className={classInput} value={value} onChange={onChange} />
      </div>
    );
  }
}

export default Input