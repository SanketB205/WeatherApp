import React, { useState } from 'react'
import SearchBox from './SearchBox'
import { InfoBox } from '@react-google-maps/api'
import Infobox from './Infobox'
import './WeatherApp.css'
export default function WeatherApp() {
    let [weatherinfo,setWeatherinfo]=useState({
        city:"Mumbai",
        temp: 29,
        tempMin:25 ,
        tempMax: 30,
        humidity:40 ,
        feelslike: 34,
        pressure:12,
        weather:"Rainy" 
    });
    let newinfo=(updateinfo)=>{
        setWeatherinfo(updateinfo);
    }
  return (
    <div className='main'>
     <div style={{textAlign:"center"}}>
        <h1>WeatherApp</h1>
      <SearchBox newinfo={newinfo} />
      <Infobox info={weatherinfo}/>
    </div>
    </div>
   
  )
}
