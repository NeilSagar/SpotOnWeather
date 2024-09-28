import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
function Nav(props){
    const[cityname,setCityname]=useState("");
    
    function handleChange(event){
        const value=event.target.value;
        setCityname(value);
    }
    function handleSubmit(){
        props.handleCityName(cityname);
    }
    return (
        <div className="navbar">
            <h1>SpotOnWeather</h1>
            <div className="searchSec">
            <input className="city-name" placeholder="which city are you in?" value={cityname} onChange={handleChange}/>
            <button onClick={handleSubmit}><SearchIcon sx={{ fontSize: 20 }}/></button>
            </div>
        </div>
    );
}
export default Nav;