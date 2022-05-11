import { useSelector } from "react-redux";
import { Row, Container, Col, Card, ListGroup, ListGroupItem, InputGroup, FormControl, Button } from 'react-bootstrap'
import moment from "moment-timezone";
import frLocal from "moment/locale/fr";

const Cards = () => {

    const data = useSelector((state) => state.weather.data);
    const data_week = useSelector((state) => state.weather.data_week);
    let weather_check = data.name === undefined
    let variant = "light"
    function time(datetime, format) {
        moment.updateLocale('fr', frLocal);
        var time1 = moment(datetime).tz("Europe/Paris").format(format)
        // console.log(time1)
        return time1
    }


    return (
        <div>
            {/* {console.log(data_week.list[0].dt)} */}


            <Container>
                <Row>
                    <h1>{(weather_check) ? "Recherche une ville" : "Maintenant sur : "+data.name}</h1>
                    <h2>{(weather_check) ? "" : data.main.temp + '°, ressenti de ' +
                        data.main.feels_like + '°, ' +
                        data.weather[0].description}</h2>
                    {/* {(weather_check) ? " " : <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />} */}
                </Row>
                <Row>
                    {(data_week === undefined) ? " " : data_week.list.map((el, index) => {
                        // console.log(el)
                        return (
                            <Col style={{ padding: '0px 0px 40px 0px' }}>
                                <Card key={index}
                                    bg={variant.toLowerCase() === 'light' ? 'white' : 'dark'} border={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem' }}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                                    <Card.Img style={{width: '150px',heigth:"150px"}} variant="top" src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`} />
                                    <Card.Body>
                                        <Card.Title>{time(data_week.list[index].dt_txt, "DD MMMM YYYY à HH:mm")}</Card.Title>
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
            </Container>

        </div>
    )
}
export default Cards