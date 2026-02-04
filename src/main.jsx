import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import Bootstrap  
import "bootstrap/dist/css/bootstrap.min.css";


// Import Open Sans => Font utilizzato


// Import local assets
import "./assets/css/index.css";

// Import root component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
