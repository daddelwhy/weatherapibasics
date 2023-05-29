import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  const apikeys = "2bf2d58046448bfbc8efb38aba696aaf";
  const [city, setcity] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=13.736717&lon=100.523186&appid=${apikeys}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setcity(data);
      });
  }, []);
   const convertTemp=(k)=>{
    return (k-273).toFixed() //////tofixed เปลี่ยนทศนิยมเป็นจำนวนเต็มค่าที่เก็บคือเคลวิน เปลี่ยนเป็น C
   }
  return (
    <>
      <Container>
        <div className="app">
          <div className="location">
            <h1>BANGKOK</h1>
            <p>thailand</p>
          </div>

          <div className="box">
            <div className="wea">
              <h1>{convertTemp(city.main.temp)}&deg;C</h1>
              <small>max : {convertTemp(city.main.temp_max)}&deg;C , min : {convertTemp(city.main.temp_min)}&deg;C</small>
            </div>

            <div className="info">
              <div className="status">
                <p>{city.weather[0].main}</p>
              </div>
              <div className="hum">
                <p>HUM : {city.main.humidity}</p>
              </div>
              <div className="wind">
                <p>WIND : {city.wind.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
