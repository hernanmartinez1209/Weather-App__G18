
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CartWeather from './components/CartWeather'
import Loadign from './components/Loadign'

function App() { 
  const [coords, setCoords] = useState()
  const [weathern, setWeathern ] = useState()
  const [temperture , setTempertu] =  useState()


useEffect(() => {
  const succes = pos =>{
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
      
    }
    setCoords(obj)
  }
 console.log(coords);
  navigator.geolocation.getCurrentPosition(succes)
}, [])
 useEffect(() => {
    if (coords) {
      const APIKEY = '561e05854189262da877bb7f9ff09d9c'
    const BASEURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
   
    axios.get(BASEURL)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const farenheit =(celsius * 9/5 + 32).toFixed(1)
      setTempertu({celsius , farenheit})
      setWeathern(res.data) 
    
    })
    .catch( err => console.log(err));
    }
    
 }, [coords])
 
 


  return (
    <div className="App">
    { weathern ?
      <CartWeather 
      weathern={weathern}
      temperture={temperture}/>
      :<Loadign />
      
    }
      {/* <footer>© Desarollado Por HMhernanmartinez 2022</footer> */}
    </div>
  )
}

export default App
