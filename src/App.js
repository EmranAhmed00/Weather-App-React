
import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import LocalWeather from "./Components/LocalWeather";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);

    this.state = {
      data: []
    }
  }
 
  async getWeather(e, name2, country2) {
    let api_call;
    let name;
    let country;

    if (e !== null) {
      e.preventDefault();
      name = e.target.elements.name.value;
      country = e.target.elements.country.value;
      api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=27881466a01a4312916171858190404&q=${name},${country}&days=5`);
    } else {
      api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=27881466a01a4312916171858190404&q=${name2},${country2}&days=5`);
    }
    const data = await api_call.json();
   

    if (name && country || name2 && country2) {

      console.log(data);
      this.setState({
        data: data,
        country: data.location.country,
        name: data.location.name,
        temp_c: data.current.temp_c,
        localtime: data.location.localtime,

        text: data.current.condition.text,
        mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
        maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,

        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
         condition: data.forecast.forecastday[0].day.condition.icon,

        error: ""
      })
    } else {

      this.setState({

        country: undefined,
        name: undefined,
        temp_c: undefined,
        localtime: undefined,

        text: undefined,

        mintemp_c: undefined,
        maxtemp_c: undefined,

        sunrise: undefined,
        sunset: undefined,
      

        error: "For more Location Please enter the City and Country "
      })
    }

  }

  componentDidMount() {
    this.getWeather(null, "stockholm", "sweden");
  }

  render() {
    return (
      <div>
      {typeof this.state.data != "undefined" ? 

    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Titles />
            </div>
            <div className="col-xs-7 from-container">
              <Form getWeather={this.getWeather} data={this.state.data} />
              <img src={this.state.condition} />


              <Weather
                country={this.state.country}
                name={this.state.name}
                temp_c={this.state.temp_c}
                localtime={this.state.localtime}

                text={this.state.text}
                mintemp_c={this.state.mintemp_c}
                maxtemp_c={this.state.maxtemp_c}

                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
              />

            </div>
          </div>

        </div>

      </div>

    </div>
  : <div>error</div>}
  </div>
      
    );

  }

};

export default App;




