import React, { useState } from 'react'

 const CartWeather = ({weathern ,temperture}) => {
    
    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperture = () => setIsCelsius(!isCelsius)
    console.log();
  return (
    <div className='cart'>
        <h1 className='cart__h1'>Weather App</h1>
        <h2 className='cart__h2'>{`${weathern?.name} ,${weathern?.sys.country}`}</h2>
      <section>
        <img className='img__cart_section1' src={weathern && `http://openweathermap.org/img/wn/${weathern.weather[0].icon}@4x.png`} alt="" />
        </section>  
        <section>
            <h3 className='h3__cart_section2' >"{weathern?.weather[0].description}"</h3>
            <ul className='ul__cart_section2'>
            <li className='li__cart_section2'><span className='span__cart_section2' >Wind Speed</span>{weathern?.wind.speed}m/s</li>
            <li className='li__cart_section2'><span className='span__cart_section2' >Clouds</span>{weathern?.clouds.all}%</li>
            <li className='li__cart_section2'><span className='span__cart_section2' >Pressure</span>{weathern?.main.pressure}hPa</li>
            </ul>
        </section>
        <h2 className='secon-h2__cart'>{isCelsius? `${temperture?.celsius} °C` : `${temperture?.farenheit} °F` }</h2>
         <button className='btn__cart' onClick={changeTemperture}>{isCelsius ? 'change to °F' : 'change to °C'}</button>
    </div>
  )
}

export default CartWeather