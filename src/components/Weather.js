import React from 'react'
import ApiWorker from "../api/api-service";


function Weather(city) {

   const api_key = '630a68ba48d0384952bd607738436ca2';
   const path = `https://api.openweathermap.org/data/2.5/weather?lat=${city.city.latitude}&lon=${city.city.longitude}&appid=${api_key}`;

   return (
      <div>
         <ApiWorker path = {path}></ApiWorker>
      </div>
   )
}

export default Weather