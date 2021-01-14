import React from 'react';
// import './DayCard.css';
// import { mockComponent } from 'react-dom/test-utils';

// function DayCard() {
//     return<h1>Hi</h1>
// }

var moment = require('moment');

const DayCard = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    return(
        
        <div className='card'>
            <h3>{moment(newDate).format('dddd')}</h3>
            <p>{moment(newDate).format('MMMM Do, h:mm a')}</p>
            <h2>{Math.round(reading.main.temp)} °F</h2>
            <p>{reading.weather[0].description}</p>
        </div>
    )
}



export default DayCard;