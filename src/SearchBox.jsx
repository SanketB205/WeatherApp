import React, { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function SearchBox({newinfo}) {
   let [city, setCity] = useState("");
   let [error,setError]= useState(false);  
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="d5007556039a341d415ac41242a1b48a";
   
  let getWeatherInfo= async()=>{
    try{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
     let jsonresponse=await response.json();
     let result={
        city: city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        pressure: jsonresponse.main.pressure,
        weather: jsonresponse.weather[0].description
     };
     console.log(result);
     return result;
     }
  catch(err){
        throw err;
  }
};
 
 
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  
  let handleSubmit=async (e)=>{
   try{ e.preventDefault();
    console.log(city);
    setCity("");
    let updateinfo= await getWeatherInfo();
    newinfo(updateinfo);
  }catch(err){
    setError(true);
  }
   
  }
  
  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          style={{fontFamily:"cursive"}}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" style={{backgroundColor:"black",fontFamily: "cursive"}}>
          Search
        </Button>
         {error? <p className="msg">No Such Data Found!</p>:" " }
      </form>
    </div>
  );
}
