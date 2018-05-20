import React from 'react'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

import './location.scss'

const Location = props => (
  <div className='location' >
    <FontAwesomeIcon className='location-icon' icon={faMapMarkerAlt} size='2x' />
    <h1 className='location-text' >{props.city}</h1>
  </div>
)

export default Location
