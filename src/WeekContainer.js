import React from 'react';

class WeekContainer extends React.Component {
    render() {
        componentDidMount = () => {
            const weatherURL =
            `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => console.log("Data List Loaded", data.list))
          }
          
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default WeekContainer;