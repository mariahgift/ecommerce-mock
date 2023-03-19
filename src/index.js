import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter} from "react-router-dom";
import { Context } from "./context/Context";

import App from "./App";

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

// ReactDOM.render(
//   <BrowserRouter>
//     <Context>
//       <App />
//     </Context>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
