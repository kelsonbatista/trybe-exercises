import React from 'react';
import MovieCard from './MovieCard';
import series from '../data';

class Movies extends React.Component {
  render() {
    return (
      <article>
      {series.map((item) => {
        return <MovieCard card={item} key={item.id} />
      })};
      {/* <MovieCard card={series[0]} />
      <MovieCard card={series[1]} />
      <MovieCard card={series[2]} /> */}
    </article>
    );
  }
}

export default Movies;