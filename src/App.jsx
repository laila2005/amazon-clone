
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here, e.g. <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}
