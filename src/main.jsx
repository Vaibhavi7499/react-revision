import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RoomContainer from "./contexts/RoomContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContainer from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoomContainer>
      <BrowserRouter>
        <GlobalContainer>
          <App />
        </GlobalContainer>
      </BrowserRouter>
    </RoomContainer>
  </StrictMode>
);
