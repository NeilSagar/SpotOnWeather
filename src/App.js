import './App.css';
import { useState} from "react";
import Nav from './component/nav';
import Content from './component/content';
import Footer from './component/footer';
function App() {
  const [city,setCity]=useState("Bhubaneshwar");

  function handleCityName(city_val){
    setCity(city_val);
  }
  return (
    <div className="App">
      <Nav handleCityName={handleCityName} />

      <Content 
      city={city}/>
      <Footer/>
    </div>
  );
}

export default App;
