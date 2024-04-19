import "./App.css";
import Welcome, { LocationContext } from "./components/Welcome";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import CardDetails from "./components/CardDetails";
function App() {
  return (
    <>
      {/* <Welcome /> */}
      <LocationContext.Provider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/details" element={<CardDetails />} />
        </Routes>
      </LocationContext.Provider>
    </>
  );
}

export default App;
