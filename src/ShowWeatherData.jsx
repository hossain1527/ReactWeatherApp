import React from "react";

export default function ShowWeatherData(props) {
  // console.log(props.dataWeather)

  const {
    country,
    description,
    pressure,
    feelslike,
    humidity,
    image,
    location,
    precip,
    region,
    temperature,
    wind_speed,
  } = props.dataWeather;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <h2>
            {temperature}
            <sup>0</sup>C, {description}
          </h2>
          <p>
            {" "}
            Feelis Like {feelslike}
            <sup>0</sup>C
          </p>
          <h4>{location}</h4>
          <p>
            {region}, {country}
          </p>
        </div>

        <div className="col-md-9">
          <img className="mainImage" src={image} alt="weather" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <p>
            <b>Wind Speed</b> (km/hr)
          </p>
          <h2>{wind_speed}</h2>
        </div>

        <div className="col-md-3">
          <p>
            <b>Pressure</b> (mm)
          </p>
          <h2>{pressure}</h2>
        </div>

        <div className="col-md-3">
          <p>
            <b>Humidity</b>(%)
          </p>
          <h2>{humidity}</h2>
        </div>

        <div className="col-md-3">
          <p>
            <b>Precipitation</b> (mm)
          </p>
          <h2>{precip}</h2>
        </div>
      </div>
    </div>
  );
}
