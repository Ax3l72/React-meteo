/*
 * Import des Modules
 * *************** */
import axios from "axios"

/* 
 * Action types
 * ****************** */
import { GET_WEATHER_DATA, GET_WEATHER_DATA_WEEK, GET_WEATHER_DATA_HEBDO } from "./ActionTypes.js";

/*
 * Actions
 * ******* */
const apiK = process.env.REACT_APP_API_WEATHER_KEY
export const getWeather = (country) => {
  return (dispatch) => {
    return axios
      .get("http://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: country,
          units: "metric",
          lang: "fr",
          appid: apiK,
        },
      })
      .then((res) => {
        console.log("weather", res.data)
        dispatch({ type: GET_WEATHER_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getWeatherWeek = (country) => {
  return (dispatch) => {
    return axios
      .get("https://api.openweathermap.org/data/2.5/forecast?", {
        params: {
          q: country,
          units: "metric",
          lang: "fr",
          appid: apiK,
        },
      })
      .then((res) => {
        console.log("weeks", res.data)
        dispatch({ type: GET_WEATHER_DATA_WEEK, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getWeatherHebdo = (co) => {
  return (dispatch) => {
    return axios
    .get("https://api.openweathermap.org/data/2.5/onecall?", {
      params: {
        lat: co.lat,
        lon: co.lon,
        units: "metric",
        lang: "fr",
        appid: apiK,
      },
    })
    .then((res) => {
        console.log("hebdo", res.data)
        dispatch({ type: GET_WEATHER_DATA_HEBDO, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

