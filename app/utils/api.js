import axios from 'axios'

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY
const OPEN_WEATHER_MAP_BASE_URL = process.env.OPEN_WEATHER_MAP_BASE_URL
const OPEN_WEATHER_MAP_API_VERSION = process.env.OPEN_WEATHER_MAP_API_VERSION
const OPEN_WEATHER_MAP_API_UNIT = process.env.OPEN_WEATHER_MAP_API_UNIT
const OPEN_WEATHER_MAP_API_LANG = process.env.OPEN_WEATHER_MAP_API_LANG

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

const transformResponse = ({ data }) => ({
  city: data.name,
  wind: data.wind.speed,
  humidity: data.main.humidity,
  temperature: Math.round(data.main.temp),
  label: data.weather.length 
    ? data.weather[0].main
    : '',
  code: data.weather.length 
    ? data.weather[0].id
    : '',
})

const callWeatherAPI = ({ lat, lon }) => {
  const axiosOptions = {
    method: 'get',
    url: OPEN_WEATHER_MAP_BASE_URL
      + '/' + OPEN_WEATHER_MAP_API_VERSION
      + '/weather',
    params: {
      APPID: OPEN_WEATHER_MAP_API_KEY,
      lat,
      lon,
      units: OPEN_WEATHER_MAP_API_UNIT,
      lang: OPEN_WEATHER_MAP_API_LANG,
    }
  }
  return axios(axiosOptions)
    .then(transformResponse)
}

module.exports = {
  callWeatherAPI,
}
