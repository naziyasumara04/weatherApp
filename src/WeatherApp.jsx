import { useState } from 'react';

import SearchBox from './SrearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp(){
    let [weatherInfo,setweatherInfo]=useState({
        city:"Wonderland",
        feelLike:40.05,
        humidity:70,
        temp:33.05,
        tempMax:33.05, 
        tempMin:33.05,
        weather:"haze"

    })

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox Info={weatherInfo}/>

        </div>
    )

}