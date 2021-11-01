import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { today } from "./util";


const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const getLocation = () => {
        if (!navigator.geolocation) {
          alert("Geolocation is not supported by your browser");
        } else {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { data } = await axios.get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            setData({
              daily: data.daily,
              current: data.current,
            });
          });
        }
      };
      getLocation();
    };
    getData();
  }, []);

  const { daily, current } = data;

  console.log("data", data);
  console.log("daily", daily);
  console.log("current", current);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>
    </div>
  );
};

export default App;
