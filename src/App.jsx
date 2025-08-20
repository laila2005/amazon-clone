
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0 }}>
        <AppRoutes />
      </div>
    </Router>
  );
}
