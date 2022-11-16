import React from "react";
import Badge from 'react-bootstrap/Badge';

class Weather extends React.Component {

  render(){

    let forecast = [];

    this.props.weatherData.forEach((e,idx) => {
      forecast.push(
      <h3 key={idx} >{e.date} will be <Badge bg="secondary">{`${e.description}`}</Badge></h3>);
    });

    return(
      <>
      <h2 className='text-center'>{`The 3 Day Forecast for ${this.props.cityName}:`}</h2>
      <ul>
        {forecast}
      </ul>
      </>
    );
  }

}

export default Weather;
