import React, { useState } from "react";
import '../stylesheet/weatherForm.css'

function WeatherForm({newLocation}){

    const [city, setCity] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log({city});
        if(city === '' || !city ){
            return; 
        }

        newLocation(city);
    };

    return(
        <div className="container-form">

            <form className="form" onSubmit={onSubmit}>
                <input className="input" type="text" placeholder="Enter City..." onChange={(e)=>setCity(e.target.value)} />
                <button className="btn" type="submit">Search</button>
            </form>

        </div>
    )
}

export default WeatherForm;