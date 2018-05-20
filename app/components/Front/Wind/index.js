import React from 'react'

import './wind.scss'

const Wind = props => (
  <div className='wind' >
    <p className='wind-label' >Wind<br/>{props.wind} MPH</p>
  </div>
)

export default Wind
