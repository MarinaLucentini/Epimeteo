import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import humidity from "../assets/wired-lineal-447-water-drop.gif";
import wind from "../assets/wired-lineal-1-cloud.gif";

const Weekmeteo = (props) => {
  const [meteo, setMeteo] = useState();
  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.city[0].lat}&lon=${props.city[0].lon}&units=metric&appid=2656a4a2591ffd79258c33dce46b469f`,
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
      {meteo && (
        <Container>
          <Row xs={6} className="flex-row">
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[5].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[5].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[5].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[5].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[5].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[5].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[5].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[5].main.humidity}
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
              )}
            </Col>
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[10].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[10].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[10].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[10].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[10].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[10].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[10].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[10].main.humidity}
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
              )}
            </Col>
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[15].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[15].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[15].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[15].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[15].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[15].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[15].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[15].main.humidity}
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
              )}
            </Col>
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[20].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[20].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[20].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[20].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[20].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[20].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[20].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[20].main.humidity}
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
              )}
            </Col>
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[25].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[25].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[25].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[25].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[25].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[25].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[25].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[25].main.humidity}
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
              )}
            </Col>
            <Col>
              {meteo && (
                <Card>
                  <Card.Img
                    variant="top"
                    src={randomImage(
                      meteo.list[30].weather[0].main
                    )}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      <h2 className="display-5">
                        {Math.round(
                          meteo.list[30].main.temp
                        )}{" "}
                        °
                      </h2>
                      <h4 className="mx-3">
                        {meteo.list[30].weather[0].main}
                      </h4>
                      <img
                        src={`http://openweathermap.org/img/wn/${meteo.list[30].weather[0].icon}.png`}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text
                      as="div"
                      className="d-flex flex-column "
                    >
                      <h5 className="secondary">
                        Max-temp{" "}
                        {meteo.list[30].main.temp_max}
                      </h5>
                      <h5 className="secondary">
                        Min-temp{" "}
                        {meteo.list[30].main.temp_min}
                      </h5>
                      <h5 className="secondary">
                        Wind: {meteo.list[30].wind.speed}
                        <img
                          src={wind}
                          alt=""
                          fluid
                          className="logo"
                        />{" "}
                      </h5>
                      <h5 className="secondary">
                        Humidity:{" "}
                        {meteo.list[30].main.humidity}
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
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Weekmeteo;
