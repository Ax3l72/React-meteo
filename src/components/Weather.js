/*
 * Import 
 * ******************** */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Container } from 'react-bootstrap'
import { store } from "../store";
import { getWeather, getWeatherHebdo, getWeatherWeek } from "../store/actions/WeatherActions";
/*
 * Import Components
 * ******************** */
import Weather7Days from "./Weather7Days";
import Weather5Days3h from "./Weather5Days3h";
import WeatherNow from "./WeatherNow"

export default function Weather (props) {

    const data = useSelector((state) => state.weather.data);
    const data_week = useSelector((state) => state.weather.data_week);
    const data_hebdo = useSelector((state) => state.weather.data_hebdo);
    let weather_check = data.name === undefined
    let variant = "light"

    let co = { name: "Nantes", lat: 47.20691244668223, lon: -1.5716977994801233 };

    useEffect(() => {
        store.dispatch(getWeather(co.name));
        store.dispatch(getWeatherWeek(co.name));
        store.dispatch(getWeatherHebdo(data_hebdo ? (data.coord) : (co)));
    }, []);

    return (
        <Container>
                <WeatherNow weather_check={weather_check} data={data} />
                <Weather7Days data_hebdo={data_hebdo} />
                <Weather5Days3h data_week={data_week} variant={variant} />
            
            
        </Container>
    )
}