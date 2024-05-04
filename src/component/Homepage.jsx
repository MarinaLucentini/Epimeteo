import {
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";

const Homepage = () => {
  return (
    <>
      <main className="my-3">
        <Container>
          <Row>
            <Col className="text-white">
              <Stack gap={3} className="align-items-center">
                <div>
                  <h1>Weather App</h1>
                </div>
                <div>
                  <img
                    src={
                      "https://cdni.iconscout.com/illustration/premium/thumb/woman-walking-in-windy-weather-4386339-3640172.png"
                    }
                    alt="copertina"
                  />
                </div>
                <div>
                  Type the name of the city you want to know
                  the weather for and click the button below
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
