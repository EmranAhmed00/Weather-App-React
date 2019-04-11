import React from "react";
import Form from './Form.js';
class Weather extends React.Component {

    render() {

        return(
      <div className= "weatherDetails">
 {this.props.name && this.props.country && <h1>Location:{this.props.name},{this.props.country}</h1>}
 
 {this.props.temp_c && <h2>Current Temperature : {this.props.temp_c}°c</h2>} 

{this.props.localtime && <h3>Date and Time: {this.props.localtime}</h3>}
<div className="forecast">

{this.props.text && <h3>Condition: {this.props.text} </h3>}
{this.props.mintemp_c && <h4>Minimum Temperature : {this.props.mintemp_c}°c </h4>}
{this.props.maxtemp_c && <h4>Maximum Temperature : {this.props.maxtemp_c}°c </h4>}
 
 {this.props.sunrise && <h4>Sunrise: {this.props.sunrise}</h4>}
  {this.props.sunset && <h4>Sunset: {this.props.sunset}</h4>} 
</div>

{this.props.error && <h2> {this.props.error}</h2>}


      </div>

        );
    }
};

export default Weather;