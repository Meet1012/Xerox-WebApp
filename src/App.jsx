import "./App.css";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main location={location} />} />
      </Routes>
    </>
  );
}

export default App;
