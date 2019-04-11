import React from "react";
import LocalWeather from './LocalWeather';
class Form extends React.Component {

    render() {  
        return(
  
            <form onSubmit={this.props.getWeather}>
            <input type="text" name = "name" placeholder="city..." />
            <input type="text" name = "country" placeholder="country..."/>
            <button>Get Weather</button>

                <LocalWeather data={this.props.data}/>
            
            </form> 
    
        );  
    }
};

export default Form;