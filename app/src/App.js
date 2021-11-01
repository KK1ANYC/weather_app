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

  const daily = data.daily || [];
  const current = data.current || {};

  console.log("data", data);
  console.log("daily", daily);
  console.log("current", current);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        {daily.length && (
          <div>
            {daily.map((day, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <p></p>
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt="weather_picture"
                      width="100"
                      height="100"
                    />
                    <div>
                      <p>{day.temp.max}</p>
                      <p>{day.temp.min}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
