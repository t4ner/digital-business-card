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
import Payment from "./components/FormStepper/components/Payment";
import PaymentTest from "./components/FormStepper/components/PaymentTest";
import PaymentConfirm from "./components/FormStepper/components/PaymentConfirm";
import ThemeTunahan from "./components/StaticTheme/ThemeTunahan";
import ThemeYakup from "./components/StaticTheme/ThemeYakup";
import ThemeEfkan from "./components/StaticTheme/ThemeEfkan";
import ThemeAhmet from "./components/StaticTheme/ThemeAhmet";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentTest" element={<PaymentTest />} />
        <Route path="/payment-fail" element={<PaymentFail />} />
        <Route path="/payment-confirm" element={<PaymentConfirm />} />
        <Route path="/dijital-kartvizit-satin-al" element={<Stepper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="setting" element={<Setting />} />
          <Route path="digital-business-card-update" element={<CardUpdate />} />
        </Route>

        <Route path="theme1" element={<Theme1 />} />
        <Route path="theme2" element={<Theme2 />} />
        <Route path="/tunahancakil" element={<ThemeTunahan />} />
        <Route path="/yakupsamilogut" element={<ThemeYakup />} />
        <Route path="/efkanyildiz" element={<ThemeEfkan />} />
        <Route path="/ahmetyakar" element={<ThemeAhmet />} />




      </Routes>
    </div>
  );
}

export default App;
