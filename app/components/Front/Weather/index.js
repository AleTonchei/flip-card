import React from 'react'

import './weather.scss'

import sun from '../../../img/sun.svg'
import cloud from '../../../img/cloud.svg'
import rain from '../../../img/rain.svg'
import snow from '../../../img/snow.svg'
import mist from '../../../img/mist.svg'

const getImageFromCode = code => {
  if(code < 600) return rain
  if(code < 700) return cloud
  if(code < 800) return mist
  if(code === 800) return sun
  if(code > 800) return cloud
}

const Weather = props => (
  <div className='weather' >
    <img className='weather-img' src={getImageFromCode(props.code)} />
    <h3 className='weather-label' >{props.label}</h3>
  </div>
)

export default Weather
