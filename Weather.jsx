import React, { useState } from "react";
import { useEffect } from "react";
import './Styles.css'


function Weather() {
    const [weather, setWeather] = useState("");
    const [apiStatus, setApiStatus] = useState("INITIAL")



    useEffect(() => {
        setApiStatus("PENDING")
        fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=a768846af9ee02b7087461d66d17245d')

            .then(response => response.json())
            .then(data => {
                setWeather(data)
                setApiStatus("SUCCESS")
            }
            )
            // .then(json => setWeather(json)) 


            .catch(error => {
                setApiStatus("FAILURE")
                console.error('Error fetching data: ', error)

            });
    }, []);

    const dats = weather !== "" && weather !== undefined ? weather : ""
    console.log("this is dats", dats)
    // (weather.map((e)=>(
    //         <p>{e.clouds}</p>
    //     ))):""
    let show
    switch (apiStatus) {
        case "SUCCESS":
            show = (<>
                <h2>{dats.name}</h2>
                <div className="WeatherReport">
                    <div className="Weather">

                        <h5>temperature: {dats.main.temp}</h5>
                        <h5>feels_like: {dats.main.feels_like}</h5>
                        <h5>humidity: {dats.main.humidity}</h5>
                        <h5>pressure: {dats.main.pressure}</h5>
                        <h5>temp_max: {dats.main.temp_max}</h5>
                        <h5>temp_min: {dats.main.temp_min}</h5>
                    </div>

                    <div className="Time">
                        <h5>TimeZone: {dats.timezone}</h5>
                        <h5>Longitude: {dats.coord.lon}</h5>
                        <h5>Latitude: {dats.coord.lat}</h5>
                    </div>
                </div>
                <div className="Wind">
                    <h6>Windspeed:{dats.wind.speed}</h6>
                    <h6>Winddeg:{dats.wind.deg}</h6>
                    <h6>Windgust:{dats.wind.gust}</h6>

                </div>
            </>)
            break;
        case "FAILURE":
            show = <h1>Some thing went wrong</h1>
            break
        default:
            ""
            break;
    }





    return (
        <>
            <div>

                <h1 className="Heading">Weather Report</h1>
                {show}
            </div>

            <div>




            </div>
        </>
    )
}
export default Weather;


