# flip-card
A simple flip card made with react

### Directory Structure

```
.
├── dist
├── app           // React Application
├── config        // Configurations
├── .babelrc      // Babel Configuration
├── .env.example  // Enviromental Variables
├── index.html    // Main HTML Page
├── package.json  // NPM packages
└── ReadMe.md     // How to Setup
```

### Env Vars

| Env Var | Value | Type |
| :---: | :---: | :---: |
| NODE_ENV | --- | String |
| OPEN_WEATHER_MAP_API_KEY | --- | String |
| OPEN_WEATHER_MAP_BASE_URL | http://api.openweathermap.org/data | String |
| OPEN_WEATHER_MAP_API_VERSION | 2.5 | String |
| OPEN_WEATHER_MAP_API_UNIT | metric | Boolean |
| OPEN_WEATHER_MAP_API_LANG | en | String |
| GOOGLE_API_KEY | --- | String |

### Run the project

```
$ cp .env.example .env
// Fill env vars
$ npm start
```
