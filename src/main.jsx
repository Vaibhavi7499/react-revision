import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RoomContainer from "./contexts/RoomContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContainer from "./context/GlobalContext.jsx";
import EmpContainer from "./context/EmpDataContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import TodoStore from "./Store/TodoStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoomContainer>
      <BrowserRouter>
        <GlobalContainer>
          <EmpContainer>
            <ToastContainer autoClose={2000} />
            <Provider store={TodoStore} >
              <App />
            </Provider>
          </EmpContainer>
        </GlobalContainer>
      </BrowserRouter>
    </RoomContainer>
  </StrictMode>
);
