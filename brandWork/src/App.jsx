import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Home.jsx";
import Dashboard from "/src/server/Dashboard.jsx"; //

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
