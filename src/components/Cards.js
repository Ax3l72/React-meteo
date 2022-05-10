import { useSelector } from "react-redux";

const Cards = () => {
    
    const data = useSelector((state) => state.weather.data);
    return (
        <div>
            <h1>{(data.name === undefined) ? "Recherche une ville": data.name+', '+data.main.temp+'°, ressenti '+data.main.feels_like+'° ('+data.main.temp_min+"° min & "+data.main.temp_max+"° max), "+data.weather[0].description }</h1>
        </div>
    )
}
export default Cards