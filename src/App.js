import React from "react";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./app_component/weather.component";
import  Form from './app_component/form.component'



const API_key = "93557203f8d444bf4ff4f5133ccc2661";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      icon: "",
      main: "",
      celsius: "",
      temp_max: "",
      temp_min: "",
      description: "",
      err: false,
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  calCelsius(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  get_WeatherIcon(icon, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city&&country){
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
    );

    const response = await api_call.json();
    console.log(response);
    this.setState({
      city:`${response.name},${response.sys.country}`,
      celsius: this.calCelsius(response.main.temp),
      temp_min: this.calCelsius(response.main.temp_min),
      temp_max: this.calCelsius(response.main.temp_max),
      description: response.weather[0].description
    })
    this.get_WeatherIcon(this.weatherIcon,response.weather[0].id)
  }else{
    this.setState({err:true})
  }
  }
  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.err}/>
        <br />
        <Weather items={this.state} />
      </div>
    );
  }
}

export default App;
