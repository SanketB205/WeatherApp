import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Infobox.css";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function Infobox({ info }) {
  const RAIN_IMG =
    "https://images.unsplash.com/photo-1689222485261-4120a5974ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxyYWlueXxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_IMG =
    "https://plus.unsplash.com/premium_photo-1742457620211-e4b1a436a688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvbGQlMjBjaXR5fGVufDB8fDB8fHww";
  const HOT_IMG =
    "https://images.unsplash.com/photo-1717612031475-6d742751677c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxIb3QlMjB3ZWF0aGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div>
      <div className="cardbox">
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 160 }}
            image={
              info.humidity > 80
                ? RAIN_IMG
                : info.temp > 15
                ? HOT_IMG
                : COLD_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"cursive"}}>
              {info.city.toUpperCase() }&nbsp;
               {
                 info.humidity > 80
                 ?<WaterDropIcon/>
                 : info.temp > 15
                 ?  <SunnyIcon/>
                 :  <AcUnitIcon/>
               }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "darkslategray",fontFamily:"cursive" }}
              component={"span"}
            >
              <p>TEMPERATURE: {info.temp} &deg;C</p>
              <p>MINIMUM TEMPERATURE: {info.tempMin}&deg;C</p>
              <p>MAXIMUM TEMPERATURE: {info.tempMax}&deg;C</p>
              <p>HUMIDITY: {info.humidity}</p>
              <p>PRESSURE: {info.pressure}</p>
              <p>
                The Weather Said To Be <b>{info.weather}</b> And FeelsLike{" "}
                <b>{info.feelslike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
