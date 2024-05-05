import { useEffect, useState } from "react";
import humidity from "../assets/wired-lineal-447-water-drop.gif";
import wind from "../assets/wired-lineal-1-cloud.gif";
import { Card } from "react-bootstrap";

const MeteoAlClick = (props) => {
  const [meteo, setMeteo] = useState();
  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.city.lat}&lon=${props.city.lng}&units=metric&appid=2656a4a2591ffd79258c33dce46b469f`,
      {
        method: "GET",
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((city) => {
        setMeteo(city);
        console.log(city);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  useEffect(() => {
    if (props.city) {
      fetchMeteo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.city]);
  return (
    <>
      {meteo && (
        <>
          <div className="d-flex justify-content-center">
            <div
              data-bs-theme="dark"
              className="text-white d-flex flex-column align-items-center"
            >
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className="d-flex align-items-center justify-content-evenly">
                    <h1>{meteo.name}</h1>
                    <h2 className="display-5">
                      {Math.round(meteo.main.temp)} °
                    </h2>
                    <h4 className="mx-3">
                      {meteo.weather[0].main}
                    </h4>
                  </Card.Title>
                  <Card.Text
                    as="div"
                    className="d-flex flex-column align-items-center"
                  >
                    <img
                      src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}.png`}
                      alt=""
                      className="w-25"
                    />
                    <div>
                      <h5 className="secondary">
                        Max-temp:{" "}
                        {Math.round(meteo.main.temp_max)}° ,
                        Min-temp:{" "}
                        {Math.round(meteo.main.temp_min)}°
                      </h5>

                      <h5 className="secondary">
                        Wind: {meteo.wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                        Humidity: {meteo.main.humidity}
                        <img
                          src={humidity}
                          alt=""
                          fluid
                          className="logo"
                        />
                      </h5>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MeteoAlClick;
