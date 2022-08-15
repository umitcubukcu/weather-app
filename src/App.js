import React, { useState } from 'react';
import './App.css';
import cities from "./cities";
import { Weather } from "./components/";
import ApiService from "./api/api-service";

function App() {
  const [city, updateCity] = useState(cities[0]);
  const [day, setDay] = useState([1,2,3,4,5,6,7]);
  function handleCity(e){
    updateCity(cities[e.target.value-1])
  }


  return (
    <div className="App">

      <form action="">
        <label>Bir şehir seçiniz</label>
        <select onChange={handleCity}>
          {cities.map(city => (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          ))
          }
        </select>
      </form>

      <Weather city={city} day={day}> </Weather>
    </div>
  );
}

export default App;