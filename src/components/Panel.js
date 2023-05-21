import React from "react";
import Loading from './Loanding'
import '../stylesheet/panel.css'

function Panel({loadingData,showData,weather,forecast}){

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = month + '/' + day + '/' + year;

    var url = '';
    var iconUrl = '';

    var url_3h = '';
    var url_6h = '';
    var url_9h = '';

    var forecastDate_3h= '';
    var forecastDate_6h= '';
    var forecastDate_9h= '';

    if(loadingData){
        return <Loading />
    }


    if(showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png'

        url_3h = url + forecast.list[0].weather[0].icon + '.png';
        url_6h = url + forecast.list[2].weather[0].icon + '.png';
        url_9h = url + forecast.list[4].weather[0].icon + '.png';

        forecastDate_3h = forecast.list[0].dt_txt.substring(11,13);
        forecastDate_6h = forecast.list[2].dt_txt.substring(11,13);
        forecastDate_9h = forecast.list[4].dt_txt.substring(11,13);
    }

    const listImgCity = [
        "https://images.pexels.com/photos/1587267/pexels-photo-1587267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3444649/pexels-photo-3444649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/129830/pexels-photo-129830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2762553/pexels-photo-2762553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1550873/pexels-photo-1550873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    
    const max = listImgCity.length - 1;
    const min = 0;
    const numRandom = (Math.random() * (max - min) + min).toFixed(0);
    const selectImgCity = listImgCity[numRandom];

    return(
        <div className="container-main">

        {showData === true ? 
        (<div className="container-panel">
            <div className="container-img">
                <h3 className="dt city">{weather.name}</h3>
                <p className="dt date">{date}</p>
                <h1 className="dt temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                <img className="dt weather-img" src={iconUrl} alt="icon" /> 
                <div className="dt description-img"> {weather.weather[0].main} </div>
                <img className="img" src={selectImgCity} alt="city" />
            </div>
           
            <div className="container-info">
                <div className="info">
                    <div className="rt">High: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</div>
                    <div className="rt">Low: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</div>
                    <div className="rt">Feels Like: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</div>
                    <div className="rt">Humidity: {weather.main.humidity}%</div>
                    <div className="rt">Wind: {weather.wind.speed}m/s</div>
                </div>
                
                 <hr></hr>
                <div className="container-hs">
                    <div className="hs-date">
                        <div>{forecastDate_3h}h</div>
                        <div className="hs-img"><img className="icon" src={url_3h} alt='icon' />{forecast.list[0].weather[0].main}</div>
                        <div>{(forecast.list[0].main.temp- 273.15).toFixed(1)}ºC</div>
                    </div>
                    <div className="hs-date">
                        <div>{forecastDate_6h}h</div>
                        <div className="hs-img"><img className="icon" src={url_6h} alt='icon' />{forecast.list[2].weather[0].main}</div>
                        <div>{(forecast.list[2].main.temp- 273.15).toFixed(1)}ºC</div>
                    </div>
                    <div className="hs-date">
                        <div>{forecastDate_9h}h</div>
                        <div className="hs-img"><img className="icon" src={url_9h} alt='icon' />{forecast.list[4].weather[0].main}</div>
                        <div>{(forecast.list[4].main.temp- 273.15).toFixed(1)}ºC</div>
                    </div>
                </div>
            </div>
        </div>
        ):(<h2 className="error">No Data</h2>)}
           
        </div>
    )
};

export default Panel;