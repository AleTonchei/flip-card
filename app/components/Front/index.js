import React from 'react'
import classnames from 'classnames'

import './front.scss'

import Location from './Location'
import Degrees from './Degrees'
import Weather from './Weather'
import Wind from './Wind'
import Humidity from './Humidity'
import Week from './Week'

const Front = props => (
  <div className="front" >
    <div className={classnames('row', 'upper-row')} >
      <Location city={props.weather.city} />
      <Degrees temperature={props.weather.temperature} />
    </div>
    <Weather label={props.weather.label} code={props.weather.code} />
    <div className='row' >
      <Wind wind={props.weather.wind} />
      <Humidity humidity={props.weather.humidity} />
    </div>
    <div className='row' >
      <Week day={props.day} />
    </div>
  </div>
)

export default Front
