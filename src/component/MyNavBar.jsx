import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

const MyNavBar = (props) => {
  const [city, setCity] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchUser(city);

    navigate(`/weatherpage/:${city}`);
  };
  return (
    <Navbar className="bg-dark">
      <Container
        fluid
        className="d-flex flex-column flex-md-row"
      >
        <NavLink to="/" className="nav-link text-white">
          <i class="bi bi-tornado"></i> Check weather of the
          city
        </NavLink>
        <Nav className=" my-2 my-lg-0 text-white">
          <h4>
            <i className="bi bi-geo-alt-fill mx-2"></i>
            {props.searchUser}
          </h4>
        </Nav>

        <Form
          onSubmit={(e) => handleSubmit(e)}
          className="d-flex align-items-center"
        >
          <Form.Control
            type="search"
            placeholder="Search city..."
            className="me-2"
            aria-label="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit" variant="outline-light">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
