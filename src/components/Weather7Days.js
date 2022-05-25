/*
 * Import 
 * ******************** */
import { Accordion, Row } from 'react-bootstrap'
import moment from "moment-timezone";
import frLocal from "moment/locale/fr";

export default function Weather7DAys(props) {
    const { data_hebdo } = props;

    function time(datetime, format) {
        moment.updateLocale('fr', frLocal);
        var time1 = moment(datetime).tz("Europe/Paris").format(format)
        return time1
    }

    function timstp(timep) {
        const today = new Date(timep * 1000)
        return today
    };

    return (
        <Row className="mb-5">
            <Accordion>
                {(data_hebdo === undefined) ? "" : data_hebdo.daily.map((el, index) => {
                    return (
                        < Accordion.Item key={`colps-${index}`} eventKey={`colps-${index}`}>
                            <Accordion.Header>{time(timstp(el.dt), "dddd DD MMMM")}, {el.temp.day}°, ressenti de {el.feels_like.day}°, {el.weather[0].description} <img alt={el.weather[0].description} src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} /> </Accordion.Header>
                            <Accordion.Body>
                                Temp min {el.temp.min}°
                                <br />
                                Temp max {el.temp.max}°
                                <br />
                                Vent {el.wind_speed} km/h
                                <br />
                                Humidité {el.humidity}%
                                <br />
                                UV {el.uvi}°
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </Row>
    )
} 