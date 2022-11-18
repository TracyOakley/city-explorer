import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {

  render(){

    let forecast = [];

    forecast = this.props.weatherData.map((day, idx) => {
      return(
        <WeatherDay
          key = {idx}
          weatherData={day}
        />
      )
    });

    // this.props.weatherData.forEach((e,idx) => {
    //   forecast.push(
    //   <h3 key={idx} >{e.date} will be <Badge bg="secondary">{`${e.description}`}</Badge></h3>);
    // });

    return(
      <>
      <p> </p>
      <h2 className='text-center'>{`The 3 Day Forecast for ${this.props.cityName}:`}</h2>
        {forecast}
      </>
    );
  }

}

export default Weather;
