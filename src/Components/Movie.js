import React from "react";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Movie extends React.Component{

  render(){

    let shortData = this.props.movieData;
    
    let movieURL = `https://image.tmdb.org/t/p/w500/${shortData.image_url}`

    

    return(
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt="Movie Poster" src={movieURL} />
      <Card.Body>
        <Card.Title>{shortData.title}</Card.Title>
        <Card.Text>
          {shortData.description}
        </Card.Text>
        <p>❤️ {shortData.vote_average}</p>
      </Card.Body>
      </Card>
    </Col>
      

    );
  }
}

export default Movie;
