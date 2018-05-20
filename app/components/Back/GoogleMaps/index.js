import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import './map.scss'

const GoogleMaps = props => (
  <Map
      google={props.google}
      zoom={15}
      centerAroundCurrentLocation
    >
      <Marker
        position={{
          lat: props.coords.lat,
          lng: props.coords.lon,
        }}
      />
    </Map >
)

export default GoogleApiWrapper({ apiKey: process.env.GOOGLE_API_KEY })(GoogleMaps)
