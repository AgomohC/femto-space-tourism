import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const history = createBrowserHistory();

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Router history={history}>
            <App />
         </Router>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
