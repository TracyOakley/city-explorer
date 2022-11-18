import React from "react";
import Movie from "./Movie";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Movies extends React.Component {

  render(){

    let movies = [];

    //console.log(this.props.movieData[0]);

    movies = this.props.movieData.map((movie, idx) => {
      return(
        <Movie
          key = {idx}
          movieData={movie}
        />
      )
    });

    // this.props.movieData.forEach((e,idx) => {
    //   movies.push(
    //   <h3 key={idx} >{e.title} rated <Badge bg="secondary">{`${e.vote_average}`}</Badge></h3>);
    // });

    return(
      <>
      <h2 className='text-center'>{`Movies for ${this.props.cityName}:`}</h2>
      <Container fluid>
      <Row>
        {movies}
      </Row>
     </Container>
      
      </>
    );
  }

}

export default Movies;
