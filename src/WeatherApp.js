import React from "react";
import axios from "axios";

import WeatherToday from "./components/WeatherToday";
import WeatherOther from "./components/WeatherOthers";

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247";

class WeatherApp extends React.Component {
  state = {
    weather: null,
  };

  componentDidMount() {
    axios.get(`${url}`).then((response) => {
      console.log(response);
      const weather = response.data;
      console.log(weather);
      this.setState({ weather });
    });
  }

  render() {
    const { weather } = this.state;

    // if (!weather) {
    //   return <div>Loading...</div>;
    // }
    console.log(weather);
    return (
      <>
        <WeatherToday weather={weather} />
        <WeatherOther weather={weather} />
      </>
    );
  }
}
export default WeatherApp;
