/*
 * Import 
 * ******************** */
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import moment from "moment-timezone";
import frLocal from "moment/locale/fr";

export default function Weather5Days3h(props) {
    const { data_week, variant } = props;

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
            {(data_week === undefined) ? "" : data_week.list.map((el, index) => {
                return (
                    <Col sm key={`week-${index}`}
                    style={{ padding: '0px 0px 40px 0px' }}>
                        <Card
                            bg={variant.toLowerCase() === 'light' ? 'white' : 'dark'} border={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                            <Card.Img style={{ width: '150px', heigth: "150px" }} variant="top" src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} />
                            <Card.Body>
                                <Card.Title>{time(timstp(el.dt), "DD MMMM YYYY à HH:mm")}</Card.Title>
                                <Card.Text>
                                    {el.main.temp}°, ressenti de {el.main.feels_like}°
                                </Card.Text>
                                <Card.Text>
                                    {el.weather[0].description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Temp min {el.main.temp_min}°</ListGroupItem>
                                <ListGroupItem>Temp max {el.main.temp_max}°</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                )

            })}
        </Row>
    )
}