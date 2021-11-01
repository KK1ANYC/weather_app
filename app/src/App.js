import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { today, getLocation } from "./util";


const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=40.7516&lon=-73.9755&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setData({
        daily: data.daily,
        current: data.current,
        lat: null,
        lng: null,
      });
    };
    getData();
  }, []);

  const { daily, current } = data;

  console.log("data", data);
  console.log("daily", daily);
  console.log("current", current);
  // console.log("lat", lat, "lng", lng);



  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>
    </div>
  );
};

export default App;
