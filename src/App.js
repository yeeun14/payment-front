import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Payment from "./components/Payment";
import Charge from "./components/Charge";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Charge />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
