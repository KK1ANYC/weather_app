import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";



const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=40.7516&lon=-73.9755&exclude=minutely&appid=323b57d6a96e11f1f8c51778e23170c7`
      );
      setData(data);
    };
    getData();
  }, []);

  console.log("data", data);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div></div>
    </div>
  );
};

export default App;
