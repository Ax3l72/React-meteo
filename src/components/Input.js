import React from "react";
import { store } from "../store";
import { getWeather } from "../store/actions/WeatherActions";

const Input = (props) => {
  function getValue() {
    var input = document.getElementById("city").value;
    if (input.length > 0) {
      store.dispatch(getWeather(input));
    }
  }

  return (
    <div>
      <input id="city" type="text" placeholder="Trouve ta ville"></input>
      <button onClick={(e) => getValue(e)}>Find</button>
    </div>
  );
};

export default Input;