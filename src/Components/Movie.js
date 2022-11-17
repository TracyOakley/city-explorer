import React from "react";
import Badge from 'react-bootstrap/Badge';

class Movie extends React.Component {

  render(){

    let movies = [];

    this.props.movieData.forEach((e,idx) => {
      movies.push(
      <h3 key={idx} >{e.title} rated <Badge bg="secondary">{`${e.vote_average}`}</Badge></h3>);
    });

    return(
      <>
      <h2 className='text-center'>{`Movies for ${this.props.cityName}:`}</h2>
      <ul>
        {movies}
      </ul>
      </>
    );
  }

}

export default Movie;
