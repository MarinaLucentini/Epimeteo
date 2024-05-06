import { useEffect, useState } from "react";
import location from "../assets/wired-lineal-18-location-pin.gif";
import place from "../assets/wired-lineal-18-location-pin.gif";

import {
  Button,
  Card,
  Col,
  Container,
  Offcanvas,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const [savedCity, setSavedCity] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const savedCityByLocal = JSON.parse(
    localStorage.getItem("searched-cities") || "[]"
  );
  useEffect(() => {
    setSavedCity(savedCityByLocal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCardClick = (city) => {
    navigate(`/weatherpage/${city}`);
  };
  return (
    <>
      <main className="my-3">
        <Container>
          <Row>
            <Col className="text-white">
              <Button
                variant="outline-light"
                onClick={handleShow}
              >
                Your latest searches
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    Your latest searches
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Container>
                    <Row>
                      <Col>
                        {savedCity &&
                          savedCity.length > 0 &&
                          savedCity.map((city) => {
                            return (
                              <Card
                                key={city}
                                className="my-3"
                                onClick={() => {
                                  handleCardClick(city);
                                }}
                              >
                                <Card.Body>
                                  <Card.Title className="d-flex  align-items-center justify-content-between">
                                    <h3>{city}</h3>
                                    <h4 className="mx-3 d-flex align-items-center">
                                      <img
                                        src={place}
                                        alt=""
                                        className="w-50"
                                      />
                                    </h4>
                                  </Card.Title>
                                </Card.Body>
                              </Card>
                            );
                          })}
                      </Col>
                    </Row>
                  </Container>
                </Offcanvas.Body>
              </Offcanvas>

              <Stack gap={3} className="align-items-center">
                <div>
                  <h1>Weather App</h1>
                </div>
                <div className="d-flex align-items-center flex-column flex-lg-row">
                  <h3 className="text-center">
                    Type the name of the city you want to
                    know the weather for and click the
                    button below or click here to open the
                    map
                  </h3>

                  <Link className="btn" to={"/map"}>
                    <img
                      src={location}
                      alt="pin"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div>
                  <img
                    src={
                      "https://cdni.iconscout.com/illustration/premium/thumb/woman-walking-in-windy-weather-4386339-3640172.png"
                    }
                    alt="copertina"
                  />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default Homepage;
