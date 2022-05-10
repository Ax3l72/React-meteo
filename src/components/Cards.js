import { useSelector } from "react-redux";

const Cards = () => {
    
    const data = useSelector((state) => state.weather.data);
    return (
        <div>
            <h1>Maintenant :</h1>
            <h2>{(data.name === undefined) ? "Recherche une ville": data.name+', '+data.main.temp+'°, ressenti '+
            data.main.feels_like+'° ('+data.main.temp_min+"° min & "+data.main.temp_max+"° max), "+
            data.weather[0].description }</h2>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
            <br/>
        </div>
    )
}
export default Cards