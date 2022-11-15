import React from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city:'',
      cityData: {lat:0,lon:0},
      isCity:false,
      isError: false,
      errorMessage: ''
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
      isCity:true,
      isError: false
     });


    //search for data about city
} catch (error){
  console.log('error: ', error)
  console.log('error.message: ', error.message);
  this.setState({
    errorMessage: error.message,
    isError: true,
    isCity:false
  });
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

  let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}}&zoom=8`;

  let mapImage = this.state.isCity ? <img src={mapURL} className="rounded" alt={this.state.city}/> : <></>

 
  return(
    <>
        {/* Add a separate Header, Main and Footer components */}
          {/* This is a useful example for future */}

        <h1>City Explorer</h1>
        <form onSubmit={this.handleSubmit}> 
          <label>Search for a City
          <input type="text" name="city" onChange={this.handleInputChange}/>
          </label>
          <Button variant="primary" type="submit">Explore!</Button>
        </form>
        <p>  </p>
        {
          this.state.isError
            ?  <Alert key='danger' variant='danger'>
            This is a Error alert— check it out! - {this.state.errorMessage}
          </Alert>
            : <></>
        }
        {
        cityBadge
        }
        <div className="text-center" id="Image">
        {mapImage}
        </div>
      </>
  );
}
}

export default App;
