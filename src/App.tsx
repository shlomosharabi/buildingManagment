import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PayRent from "./pages/PayRent";
import ElectricityBill from "./pages/ElectricityBill";
import WaterBill from "./pages/WaterBill";
import Arnona from "./pages/Arnona";
import Takalot from "./pages/Takalot";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<PayRent />} />
        <Route path="/electricitybill" element={<ElectricityBill />} />
        <Route path="/waterbill" element={<WaterBill />} />
        <Route path="/arnona" element={<Arnona />} />
        <Route path="/takalot" element={<Takalot />} />
      </Routes>
    </div>
  );
}

export default App;
