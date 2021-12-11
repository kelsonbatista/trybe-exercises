import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {

    // console.log(this.props);
    const { titulo } = this.props;

    return (
      <h1 className='blabla'>{ titulo }</h1>
    );
  }
}

Title.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Title;