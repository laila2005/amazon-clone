
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserProvider";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </UserProvider>
    </Router>
  );
}
