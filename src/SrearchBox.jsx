import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';


export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a7ec4be33721b44516121243ad9715e0";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let getWhetherInfo=async ()=>{
        try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);
       let result=
       {
        city:city,
        temp:jsonResponse.main.temp,
        tempMax:jsonResponse.main.temp_max,
        tempMin:jsonResponse.main.temp_min,
        feelLike:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    //    console.log(`lon:${jsonResponse.coord.lon}`);
    //    console.log(`lat: ${jsonResponse.coord.lat}`);
    }

    let handleChange=(e)=>{
       setCity(e.target.value);
    }
    
    let handkeSubmit=async(e)=>{
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWhetherInfo();
        updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
    }
    return(
        <div className='SearchBox' >
            
            <form onSubmit={handkeSubmit}>
            <TextField 
            id="outlined-basic" 
            label="City Name" 
            variant="outlined" 
            value={city} 
            onChange={handleChange}
            required/>
            &nbsp;
            <br/>
            <br/>
            <Button variant="contained" type="submit">Search</Button>

            </form>
            { error && <p style={{color:"red"}}><b>No such place exist!</b></p>}
        </div>
    )
}