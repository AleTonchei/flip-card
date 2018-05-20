import React from 'react'

import './humidity.scss'

const Humidity = props => (
  <div className='humidity' >
    <p className='humidity-label' >Humidity<br/>{props.humidity}%</p>
  </div>
)

export default Humidity
