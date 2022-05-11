import React from "react";
import { store } from "../store";
import { getWeather, getWeatherWeek } from "../store/actions/WeatherActions";
import { Container, Row, InputGroup, FormControl, Button } from "react-bootstrap"; 
const Input = (props) => {
  function getValue() {
    var input = document.getElementById("city").value;
    if (input.length > 0) {
      store.dispatch(getWeather(input));
      store.dispatch(getWeatherWeek(input));
    }
  }

  return (
    // <div>
    //   <input id="city" type="text" placeholder="Trouve ta ville"></input>
    //   <button onClick={(e) => getValue(e)}>Find</button>
    // </div>
    <Container>
      <Row>
        <InputGroup className="my-5">
          <FormControl
            id="city"
            placeholder="Trouve ta ville"
          />
          <Button variant="dark" onClick={(e) => getValue(e)}
          >Rechercher</Button>{' '}
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Input;