import React from 'react'

import './degrees.scss'

const Degrees = props => (
  <div className='degrees' >
    <span className='degrees-label' >{props.temperature}°</span>
  </div>
)

export default Degrees
