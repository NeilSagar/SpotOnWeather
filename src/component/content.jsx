import React,{useState,useEffect} from "react";
import CardType1 from "./CardType1";
import Swal from "sweetalert2";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import City from "./City";
function Content(props){
    let city=props.city;
    
    const [loading,setLoading]=useState(false);
    const [cityname,setCityname]=useState("Bhubaneshwar");
    const [temperature,setTemperature]=useState("");
    const [feel_like,setFeel_like]=useState("");
    const [humidity,setHumdity]=useState("");
    const [pressure,setPressure]=useState("");
    const [windspeed,setWindspeed]=useState("");
    const [visibility,setVisibility]=useState("");
    const [weather,setWeather]=useState("");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    const handleSubmit=async()=>{
        try {
            setLoading(true);
            const appId="e0e8a6b5e0515fecad6d3e0947e9fff1";
            const apiurl="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appId+"&units=metric";
            const data=await fetch(apiurl);
            const parsedData=await data.json();

            setLoading(false);
            
            const {temp:temperature_val,humidity:humidity_val,pressure:pressure_val,feels_like:feel_like_val}=parsedData.main;
            const visibility_val=parsedData.visibility;
            const wind_speed_val=parsedData.wind.speed;
            const weather_val=parsedData.weather[0].main;
            const city_val=parsedData.name;
            changeAll(temperature_val,feel_like_val,humidity_val,pressure_val,visibility_val,wind_speed_val,weather_val,city_val);
            
        } catch (error) {
            console.log(error.message);
            Toast.fire({
                icon: 'warning',
                title: 'Server is not able to recognise city name !'
              })
        }
      }

      function changeAll(temperature_val,feel_like_val,humidity_val,pressure_val,visibility_val,wind_speed_val,weather_val,city_val){
        setTemperature(Math.floor(temperature_val));
        setFeel_like(Math.floor(feel_like_val));
        setHumdity(humidity_val);
        setPressure(pressure_val);
        setVisibility(Math.floor(visibility_val/1000));
        setWindspeed(Math.floor(wind_speed_val));
        setWeather(weather_val);
        setCityname(city_val);
      }
    useEffect(()=>{
        (city!=="")?handleSubmit():Toast.fire({
            icon: 'warning',
            title: 'Enter the city name !'
          });
    },[city]);

      
    return (
        <div className="content">
        {loading?      
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        :
            null
        }
        <>
                <City cityname={cityname} weather={weather}/>
                <div className="display-info">
                <CardType1 heading="Temperature" value={temperature} unit="°C"/>
                <CardType1 heading="Feels like" value={feel_like} unit="°C"/>
                <CardType1 heading="Humidity" value={humidity} unit="%"/>
                <CardType1 heading="Pressure" value={pressure} unit="mm"/>
                <CardType1 heading="Visibility" value={visibility} unit="km"/>
                <CardType1 heading="Windspeed" value={windspeed} unit="kph"/>
                </div>
            </>
        </div>
    );
}
export default Content;