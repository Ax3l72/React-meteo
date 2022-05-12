import { Row } from 'react-bootstrap';

export default function WeatherNow(props) {
    const { weather_check, data } = props
    return (
        <Row className="mb-5">
            <h1>{(weather_check) ? "Recherche une ville" : "Maintenant sur : " + data.name}</h1>
            <h2>{(weather_check) ? "" : data.main.temp + '°, ressenti de ' +
                data.main.feels_like + '°, ' +
                data.weather[0].description}</h2>
        </Row>
    )
}