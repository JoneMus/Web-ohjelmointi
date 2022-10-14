import './App.css';
import {useState, useEffect} from 'react';
import Weather from './weather';


function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (error) => {
        alert(error);
      })
    } else {
      alert('Your does not support geolocation!')
    }
  }, [])
  

  return (
    <div class="block">
      <h2>Your position is</h2>
      <p>
      Position:&nbsp;
      {lat.toFixed(3)},
      {lng.toFixed(3)}
    </p>
      <Weather lat={lat} lng={lng}/>
    </div>

  );

}

export default App;
