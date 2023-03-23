import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter} from "react-router-dom";
import { Context } from "./context/Context";
import ReactGA from "react-ga4";
import App from "./App";

ReactGA.initialize("G-YYTZSQPXL0");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
</React.StrictMode>
);

