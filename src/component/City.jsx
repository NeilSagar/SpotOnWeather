import LocationOnIcon from '@mui/icons-material/LocationOn';
function City(props){
        return (
            <div className="cityname-display">
            <h3><span><LocationOnIcon sx={{fontSize:48, color:"#E76161"}}/></span>{props.cityname}</h3>
            <div className="weather-info">
                <p className="tag">Weather</p>
                <p className="value">{props.weather}</p>
            </div>
            </div>
        );
}

export default City ;