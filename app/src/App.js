import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=40.7516&lon=-73.9755&appid=323b57d6a96e11f1f8c51778e23170c7`
      );
      setWeather(data.list);
    };
    getWeather();
  }, []);

  console.log("weather", weather);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>
    </div>
  );
};

export default App;
