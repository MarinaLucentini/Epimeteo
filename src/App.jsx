import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./component/Homepage";
import MyNavBar from "./component/MyNavBar";
import Meteopage from "./component/Meteopage";
import { useState } from "react";

const App = () => {
  const [searchUser, setSearchUser] = useState("");
  return (
    <div data-bs-theme="dark" className="bg-dark">
      <BrowserRouter>
        <MyNavBar
          setSearchUser={setSearchUser}
          searchUser={searchUser}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/weatherpage/:dimamicCity"
            element={<Meteopage searchUser={searchUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
