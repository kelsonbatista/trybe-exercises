import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    // console.log(this.props.card);
    const { card } = this.props;
    return (
      <section>
      <h2>{card.name}</h2>
      <p>{card.genre}</p>
      <img
        src={card.image} alt="" />
      <h3>Personagens</h3>
        <ul>
          {card.characters.map((character) => {
            return <li key={character}>{character}</li>
          })}
        </ul>
    </section>
    );
  }
}

MovieCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired
  })
}

export default MovieCard;