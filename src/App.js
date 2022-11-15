import React from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city:'',
      cityData: {lat:0,lon:0},
      isCity:false
    }
  }


handleSubmit= async (e) =>{
  try{
  e.preventDefault();
  console.log(this.state.city);
  // button type="submit" is required
  // get the data from the API and then save the data
  // we are going to need axios
  let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);


  //proof of life
  console.log(locationInfo.data[0]);
  console.log(locationInfo.data[0].lat)
  
  // console.log(e.target.city.value);
    // // we can't put things in state and expect to use them right away, so this won't work:

    this.setState({
      cityData: locationInfo.data[0],
      isCity:true
     });


    //search for data about city
} catch (error){
  console.log('error: ', error)
  console.log('error.message: ', error.message);
}
}

handleInputChange = e => {
  this.setState({
    city: e.target.value
  });
  // search for a city???? — Can't do it here because if I want to search for "Seattle" it may searchh for "S" "Se" and then "Sea" ...
}

render(){
 // console.log(this.state.cityData.lat);
  let cityBadge = this.state.isCity ? <h2>
  {this.state.city} <Badge bg="secondary">{`Latitude: ${this.state.cityData.lat}, Longitude: ${this.state.cityData.lon}`}</Badge>
  </h2> : <></>

  return(
    <>
        {/* Add a separate Header, Main and Footer components */}
          {/* This is a useful example for future */}

        <h1>City Explorer</h1>
        <form onSubmit={this.handleSubmit}> 
          <label>Search for a City
          <input type="text" name="city" onChange={this.handleInputChange}/>
          </label>
          <button type="submit">Explore!</button>
        </form>
        <p>  </p>
        {
        cityBadge
        }
      </>
  );
}
}

export default App;
