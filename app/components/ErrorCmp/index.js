import React from 'react'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'

import './errorCmp.scss'

const ErrorCmp = props => (
  <div className="error-wrapper" >
    <FontAwesomeIcon icon={faExclamationTriangle} size='6x' />
    <span className="error-label" >{props.error}</span>
  </div>
)

export default ErrorCmp
