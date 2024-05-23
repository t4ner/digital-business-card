import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from "./components/FormStepper/Stepper";
import Theme1 from "./components/Theme/Theme1";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dijital-kartvizit-satin-al" element={<Stepper />} />
        <Route path="login" element={<Login />} />
        <Route path="theme1" element={<Theme1 />} />
      </Routes>
    </div>
  );
}

export default App;
