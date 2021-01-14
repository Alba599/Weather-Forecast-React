import React from 'react';
import DayCard from './DayCard';
// import './DayCard.css';
// const WeekContainer = () => {
    // let [setResObj] = useState({});

//     function getWeekContainer(e) {
//         e.preventDefault();
//         const weatherURL =
//             'http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=655cbab7ac24dd1c334f705fd1da079a'
//         fetch(weatherURL)
//             .then(res => res.json())
//             // .then(res => setResObj(res))
//             .then(data => console.log("Data List Loaded", data.list))
//           }
//     return(
//         <div>
//             <h2>Hi</h2>
//             {/* <p>{getWeekContainer}</p> */}
//         </div>
//     )
// }




class WeekContainer extends React.Component {

    state = {
        fullData: [],
        dailyData: []
    }
    
        componentDidMount = () => {
            const weatherURL =
            'http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=655cbab7ac24dd1c334f705fd1da079a'
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
                // console.log("Data List Loaded", res.list)
            })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
      }

    render() {
        return (
            <div>
                <h1>5-Day Weather Forecast</h1>
                <div>{this.formatDayCards()}</div>
            </div>
        )
    }
}

export default WeekContainer;