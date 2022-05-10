/*
 * Import des Modules
 * *************** */
import axios from "axios"

/* 
 * Action types
 * ****************** */
import { GET_WEATHER_DATA } from "./ActionTypes.js";

/*
 * Actions
 * ******* */
export const getWeather = (country) => {
    return (dispatch) => {
      return axios
        .get("http://api.openweathermap.org/data/2.5/weather?", {
          params: {
            q: country,
            units: "metric",
            lang: "fr",
            appid: "48fe072d754d789378b9e722f15478f3",
          },
        })
        .then((res) => {
            console.log(res.data)
          dispatch({ type: GET_WEATHER_DATA, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };