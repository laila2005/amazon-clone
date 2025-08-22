
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div style={{ 
          margin: 0, 
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
        {/* Navbar fixed at the top */}
        <Navbar />
        
        {/* Main content that takes up available space */}
        <div style={{ flex: 1 }}>
          <AppRoutes />
        </div>
        
        {/* Footer fixed at the bottom */}
        <Footer />
      </div>
      </CartProvider>
    </Router>
  );
}
