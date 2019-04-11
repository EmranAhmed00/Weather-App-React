import React from "react";

class LocalWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let newState = this.state.showDetails === true ? false : true;
        this.setState({
            showDetails: newState
        })
    }

    render() {
        let forecasts = [];
        if (typeof this.props.data.forecast != "undefined") {

            forecasts = this.props.data.forecast.forecastday.map((item) => {
                return <tr key={item.date}>  
                    <td>{item.date}</td>
                    <td></td>
                    <p></p>
                    <td>{item.day.maxtemp_c}</td>
                    <td></td>
                    <td>{item.day.mintemp_c}</td>
                  
                    <td><img src={item.day.condition.icon} alt=""></img></td>
                    <td>{item.day.condition.text}</td>
                </tr>
                 
            });
            console.log(forecasts);
        }

        return (
            <div className="daily">
                <form onLoad={this.props.getWeather}>
                </form>
              
                <button onClick={this.handleClick}>Details Forecast</button>
              
                {this.state.showDetails === true ? <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <td>MaxTemp</td>
                            <td></td>
                            <td></td>
                            <td>MinTemp</td>
                            <td></td>
                           
                            <td></td>
                            <td>Condition</td>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts}
                    </tbody>
                </table> : <React.Fragment></React.Fragment>}

            </div>
        );
    }
};

export default LocalWeather;