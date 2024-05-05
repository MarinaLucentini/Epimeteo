import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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

  const getDayOfTheWeek = (dateStr) => {
    const date = new Date(dateStr);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  return (
    <>
      {meteo && (
        <Container>
          <Row
            xs={2}
            md={3}
            lg={5}
            className="flex-row justify-content-center gy-3"
          >
            {meteo.list
              .filter((item, index) => index % 8 === 0)
              .map((day, index) => (
                <Col key={index}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="d-flex flex-column align-items-center">
                        <p>{getDayOfTheWeek(day.dt_txt)}</p>
                        <h3>
                          {Math.round(day.main.temp)} °
                        </h3>
                        <h4 className="mx-3 d-flex align-items-center">
                          {day.weather[0].main}
                          <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            alt=""
                          />
                        </h4>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </>
  );
};
export default Weekmeteo;
