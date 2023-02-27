import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./redux/index";
import Router1 from "./router";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./components/dashboardMain/global/global.css"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Router1 />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
