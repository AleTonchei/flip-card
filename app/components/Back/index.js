import React from 'react'
import classnames from 'classnames'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/fontawesome-free-solid'

import './back.scss'

import GoogleMaps from './GoogleMaps'

const Back = props => (
  <div className="back" >
    <GoogleMaps coords={props.coords} />
  </div>
)

export default Back
