import React from "react";
import Badge from 'react-bootstrap/Badge';

class WeatherDay extends React.Component{

  render(){

    let shortData = this.props.weatherData;

    return(
      
      <h3>{shortData.date} will be <Badge bg="secondary">{shortData.description}</Badge>
      </h3>

    );
  }
}

export default WeatherDay;
