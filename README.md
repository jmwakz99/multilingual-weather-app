# Multilingual Weather Dashboard

A simple React application to display weather information in multiple languages. Users can toggle between languages and view current weather details.

## Acknowledgements

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Demo

https://jmwakz99.github.io/multilingual-weather-app/

## API Reference

#### Get current weather data

```http
  GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `appid`   | `string` | **Required**. Your OpenWeatherMap API key |
| `lon`     | `string` | **Required**. Longitude                   |
| `lat`     | `string` | **Required**. Latitude                    |

## Appendix

Any additional information goes here

## Authors

- [@johnsonmwakazi](https://www.github.com/jmwakz99)
- [@Fuzu](https://fuzu.com)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_BASE_UR:https://api.openweathermap.org/data/2.5`

`REACT_APP_API_KEY:YourOpenWeatherMapApiKey`

Load these variables with the following command

```bash
  source .env
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/jmwakz99/multilingual-weather-app.git
```

Go to the project directory

```bash
  cd multilingual-weather-app
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Tech Stack

**Client:** React, Context API, CSS

**Backend:** OpenWeatherMap API
