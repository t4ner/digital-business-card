import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from "./components/FormStepper/Stepper";
import Theme1 from "./components/Theme/Theme1";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/DashboardPages/Setting";
import CardUpdate from "./pages/DashboardPages/CardUpdate";
import Theme2 from "./components/Theme/Theme2";
import PaymentSuccess from "./components/FormStepper/components/PaymentSuccess";
import PaymentFail from "./components/FormStepper/components/PaymentFail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dijital-kartvizit-satin-al" element={<Stepper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="setting" element={<Setting />} />
          <Route path="digital-business-card-update" element={<CardUpdate />} />
        </Route>
        <Route path="/ecoqrcode/payment-success" element={<PaymentSuccess />} />
        <Route path="/ecoqrcode/payment-fail" element={<PaymentFail />} />

        <Route path="theme1" element={<Theme1 />} />
        <Route path="theme2" element={<Theme2 />} />
      </Routes>
    </div>
  );
}

export default App;
