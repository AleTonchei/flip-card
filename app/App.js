import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowsAltH } from '@fortawesome/fontawesome-free-solid'

import './app.scss'

import {  callWeatherAPI, callGoogleMapsAPI } from './utils/api'

import Loader from './components/Loader'
import Front from './components/Front'
import Back from './components/Back'
import ErrorCmp from './components/ErrorCmp'


class App extends React.Component {

  state = {
    isFlipped: false,
    error: null,
    isFetching: true,
    weatherInfo: null,
    day: (new Date().getDay() + 6) % 7,
    coords: null,
  }

  getCurrentWeather = () => {
    const { weather, getWeatherError } = callWeatherAPI(this.state.coords)
      .then( weatherInfo => {
        console.log('Weather: ', weatherInfo)
        this.setState({ isFetching: false, weatherInfo })
      })
      .catch( getWeatherError => ({ getWeatherError }) )
    if(getWeatherError) this.setState({ error: 'Unable to retrieve weather information' })
  }

  getPosition = () => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          coords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }
        }, this.getCurrentWeather)
      })
    } else {
      this.setState({ error: 'Unable to retrieve current location'})
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    this.setState( state => ({ isFlipped: !state.isFlipped }) )
  }

  componentDidMount() {
    this.getPosition()
  }

  render() {
    const { isFlipped, weatherInfo, coords, day, isFetching, error } = this.state
    return (
      <div className='app'>
        <div className={classnames('flipper-container', { flip: isFlipped, })} >
          { 
            !isFetching
            && !error
            && weatherInfo 
            && <Front weather={weatherInfo} day={day} /> 
          }
          { 
            !isFetching 
            && !error 
            && coords 
            && <Back coords={coords} /> 
          }
          { isFetching && !error && <Loader /> }

        </div>
        {
          weatherInfo 
          && <div onClick={this.handleClick} className="flip-div" >
            <FontAwesomeIcon icon={faArrowsAltH} size='2x' />
          </div>
        }
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
