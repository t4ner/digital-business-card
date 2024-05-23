import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from "./components/FormStepper/Stepper";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dijital-kartvizit-satin-al" element={<Stepper />} />
      </Routes>
    </div>
  );
}

export default App;
