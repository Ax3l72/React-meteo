import React from "react";
import { store } from "../store";
import { getWeather, getWeatherWeek } from "../store/actions/WeatherActions";
import { Container, Row, InputGroup, FormControl, Button } from "react-bootstrap";
export default function Input(props) {
  function getValue() {
    var input = document.getElementById("city").value;
    if (input.length > 0) {
      store.dispatch(getWeather(input));
      store.dispatch(getWeatherWeek(input));
    }
  }

  return (
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