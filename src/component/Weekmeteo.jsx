import { useEffect, useState } from "react";

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
  }, [props.city]);
  return (
    <>
      <div className="d-flex">
        <div
          data-bs-theme="dark"
          className="text-white d-flex flex-column align-items-center"
        >
          <img
            src={`http://openweathermap.org/img/wn/${meteo.list[5].weather[0].icon}@2x.png`}
            alt=""
          />{" "}
          <h3 className="text-secondary  my-0 ">
            {meteo.list[5].weather[0].description}
          </h3>
          <div className="d-flex flex-column align-items-center my-3">
            <h2 className="display-5">
              {meteo.list[5].main.temp}°
            </h2>
            <h5 className="secondary">
              {" "}
              <i className="bi bi-wind"></i> Wind:{" "}
              {meteo.list[5].wind.speed}
            </h5>
            <h5 className="secondary">
              {" "}
              <i className="bi bi-water"></i> Humidity:{" "}
              {meteo.list[5].main.humidity}
            </h5>
            <h5 className="secondary">
              {" "}
              Max-temp {meteo.list[5].main.temp_max}
            </h5>
            <h5 className="secondary">
              Min-temp {meteo.list[5].main.temp_min}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weekmeteo;
