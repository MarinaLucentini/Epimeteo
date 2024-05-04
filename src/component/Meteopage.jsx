// import icons from "../assets/icons/";

import { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Weekmeteo from "./Weekmeteo";

const Meteopage = (props) => {
  const [city, setCity] = useState();
  const [meteo, setMeteo] = useState();
  const params = useParams();
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fetchCity = () => {
    setLoading(true);
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${params.dimamicCity}&appid=2656a4a2591ffd79258c33dce46b469f`,
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
      .then((citysearched) => {
        setCity(citysearched);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchMeteo = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&appid=2656a4a2591ffd79258c33dce46b469f`,
      {
        method: "GET",
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          setIsError(true);
          throw new Error("Errore nella richiesta");
        }
      })
      .then((city) => {
        setMeteo(city);
        setIsError(false);
        console.log(city);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //   const Week = () => {
  //     const date = new Date();
  //   };
  useEffect(() => {
    fetchCity();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchUser, params.dimamicCity]);
  useEffect(() => {
    if (city) {
      fetchMeteo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <>
      <Container className="my-3 bg-dark">
        {isError && (
          <Alert variant="danger">{errorMsg}</Alert>
        )}
        {!isError && !isLoading && (
          <Row>
            <Col xs={4}>
              {meteo && (
                <>
                  <div className="d-flex">
                    <div
                      data-bs-theme="dark"
                      className="text-white d-flex flex-column align-items-center"
                    >
                      <h5
                        className="text-white
                  "
                      >
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        {city[0].name}, {city[0].state},{" "}
                        {city[0].country}
                      </h5>
                      <h3 className="text-secondary  my-0 ">
                        <img
                          src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
                          alt=""
                        />{" "}
                        {meteo.weather[0].description}
                      </h3>

                      <div className="d-flex flex-column align-items-center my-3">
                        <h2 className="display-5">
                          {meteo.main.temp}°
                        </h2>
                        <h5 className="secondary">
                          {" "}
                          <i className="bi bi-wind"></i>{" "}
                          Wind: {meteo.wind.speed}
                        </h5>
                        <h5 className="secondary">
                          {" "}
                          <i className="bi bi-water"></i>{" "}
                          Humidity: {meteo.main.humidity}
                        </h5>
                        <h5 className="secondary">
                          {" "}
                          Max-temp {meteo.main.temp_max}
                        </h5>
                        <h5 className="secondary">
                          Min-temp {meteo.main.temp_min}
                        </h5>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {isLoading && (
                <h5>
                  {" "}
                  Loading...
                  <Spinner
                    animation="border"
                    role="status"
                  ></Spinner>
                </h5>
              )}
            </Col>
            <Col xs={8}>
              <Weekmeteo city={city} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
export default Meteopage;
