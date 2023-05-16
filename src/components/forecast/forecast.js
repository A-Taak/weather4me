import React from "react";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    // Gets day of week
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div className="flex-container">
            {data.list.splice(0, 5).map((item, idx) => (
                <div className="card">
                    <h5>{forecastDays[idx]}</h5>
                    <img
                        alt="weather"
                        className="weather-icon"
                        src={`icons/${item.weather[0].icon}.png`}
                    />
                    <p className="temperature">{Math.round(item.main.temp)}°C</p>
                    <p className="weather-description">{item.weather[0].description}</p>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{item.wind.speed} m/s</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Forecast;