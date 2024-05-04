// import icons from "../assets/icons/";
import place from "../assets/wired-lineal-18-location-pin.gif";
import humidity from "../assets/wired-lineal-447-water-drop.gif";
import wind from "../assets/wired-lineal-1-cloud.gif";
import { useEffect, useState } from "react";

import {
  Alert,
  Card,
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
  const randomImage = (weather) => {
    switch (weather) {
      case "Snow":
        return "https://st2.depositphotos.com/2419757/42796/v/450/depositphotos_427961088-stock-illustration-family-is-having-fun-outside.jpg";

      case "Clear":
        return "https://i.pinimg.com/564x/bc/59/c7/bc59c75e83cbedeb2b4741988296ff0c.jpg";

      case "Rain":
        return "https://i.pinimg.com/564x/c8/0c/e7/c80ce7295ad100589d81e37080cca247.jpg";

      default:
        return "https://i.pinimg.com/564x/73/63/96/7363968426d4d56c10ec244bf50cff13.jpg";
    }
  };
  return (
    <>
      <Container className="my-3 bg-dark">
        {isError && (
          <Alert variant="danger">{errorMsg}</Alert>
        )}
        {!isError && !isLoading && (
          <Row className="flex-column align-items-center">
            <h5
              className="text-white
                  "
            >
              <img src={place} alt="" className="logo" />
              {city[0].name}, {city[0].state},{" "}
              {city[0].country}
            </h5>
            <Col
              xs={12}
              className="d-flex justify-content-center"
            >
              {meteo && (
                <>
                  <div className="d-flex">
                    <div
                      data-bs-theme="dark"
                      className="text-white d-flex flex-column align-items-center"
                    >
                      <Card>
                        <Card.Img
                          variant="top"
                          src={randomImage(
                            meteo.weather[0].main
                          )}
                        />
                        <Card.Body>
                          <Card.Title className="d-flex align-items-center justify-content-between">
                            <h2 className="display-5">
                              {Math.round(meteo.main.temp)}{" "}
                              °
                            </h2>
                            <h4 className="mx-3">
                              {meteo.weather[0].main}
                            </h4>
                            <img
                              src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}.png`}
                              alt=""
                            />
                          </Card.Title>
                          <Card.Text
                            as="div"
                            className="d-flex flex-column  "
                          >
                            <h5 className="secondary">
                              Max-temp {meteo.main.temp_max}
                            </h5>
                            <h5 className="secondary">
                              Min-temp {meteo.main.temp_min}
                            </h5>
                            <h5 className="secondary">
                              Wind: {meteo.wind.speed}
                              <img
                                src={wind}
                                alt=""
                                fluid
                                className="logo"
                              />{" "}
                            </h5>
                            <h5 className="secondary">
                              Humidity:{" "}
                              {meteo.main.humidity}
                              <img
                                src={humidity}
                                alt=""
                                fluid
                                className="logo"
                              />
                            </h5>
                          </Card.Text>
                        </Card.Body>
                      </Card>
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
            <Col xs={12} className="my-3">
              <Weekmeteo city={city} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
export default Meteopage;
