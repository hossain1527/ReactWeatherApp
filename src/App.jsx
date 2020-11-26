import React, { Component } from "react";
import Axios from "axios";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import ShowWeatherData from "./ShowWeatherData";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    coords: {
      latitude: 40,
      longitude: -25,
    },

    data: {},
    inputLocation: "",
  };
  componentDidMount() {
    //console.log("mounted");
    //Device location
    if (navigator.geolocation) {
      //console.log("This works");
      navigator.geolocation.getCurrentPosition((pos) => {
        // console.log(pos.coords.latitude);
        // console.log(pos.coords.longitude);
        let newCoords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        this.setState({ coords: newCoords });

        Axios.get(
          `http://api.weatherstack.com/current?access_key=7b52522389250e460488f56720ef92dc&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          console.log(res);

          let dataWeather = {
            country: res.data.location.country,
            region: res.data.location.region,
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            feelslike: res.data.current.feelslike,
            humidity: res.data.current.humidity,
            precip: res.data.current.precip,
            pressure: res.data.current.pressure,
            wind_speed: res.data.current.wind_speed,
            description: res.data.current.weather_descriptions[0],
            image: res.data.current.weather_icons,
            timezone_id: res.data.location.timezone_id,
            localtime: res.data.location.localtime,
          };

          this.setState({ data: dataWeather });
        });
      });
    }
  }

  newChange = (value) => {
    //   console.log(value)
    this.setState({ inputLocation: value });
  };

  updateWeather = (event) => {
    event.preventDefault();

    Axios.get(
      `http://api.weatherstack.com/current?access_key=7b52522389250e460488f56720ef92dc&query=${this.state.inputLocation}`
    ).then((res) => {
      //console.log(res)
      let dataWeather = {
        country: res.data.location.country,
        region: res.data.location.region,
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        feelslike: res.data.current.feelslike,
        humidity: res.data.current.humidity,
        precip: res.data.current.precip,
        pressure: res.data.current.pressure,
        wind_speed: res.data.current.wind_speed,
        description: res.data.current.weather_descriptions[0],
        image: res.data.current.weather_icons,
        timezone_id: res.data.location.timezone_id,
        localtime: res.data.location.localtime,
      };

      this.setState({ data: dataWeather });
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar
            updateWeather={this.updateWeather}
            changeLocation={this.newChange}
            dataWeather={this.state.data}
          />
          <ShowWeatherData dataWeather={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
