import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <>
      <div className="row text-center mt-3">
        <h1 className="text-align-center pr-5 pb-4 heading">
          Weather Update
          {/* <FontAwesomeIcon
            className="pl-2"
            icon={faCloudSun}
            size="1x"
            color="#ffffff"
          /> */}
        </h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2 style={{ color: "#ff6600" }}>{props.dataWeather.country}</h2>
          <p>{props.dataWeather.timezone_id}</p>
        </div>

        <div className="col-md-4">
          <form onSubmit={(event) => props.updateWeather(event)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#000" />
            <input
              id="text-field"
              className="inputBox pl-2"
              placeholder="Choose Your location"
              onChange={(event) => props.changeLocation(event.target.value)}
            />

            {/* <input className="inputBox" placeholder="Please choose your location" onChange={(event)=>{
                   console.log(event.target.value)
               }}/> */}
          </form>
        </div>
        <div className="col-md-4">
          <h2 style={{ color: "#ff6600" }}>{props.dataWeather.localtime}</h2>
        </div>
      </div>
    </>
  );
}
