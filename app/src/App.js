import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { tempConverter, today } from "./util"

const App = () => {
  const [data, setData] = useState({});
  const [daily, setDaily] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=40.7516&lon=-73.9755&exclude=minutely&appid=323b57d6a96e11f1f8c51778e23170c7`
      );
      setData(data);
      setDaily(data.daily);
      setCurrent(data.current)
    };
    getData();
  }, []);

  // console.log("data", data);
  // console.log("daily", daily);
  // console.log("current", current);
  console.log("today", today);
  // console.log("helperfunc", tempConverter(300))

  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>
    </div>
  );
};

export default App;
