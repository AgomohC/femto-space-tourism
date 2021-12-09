import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Router>
            <Switch>
               <App />
            </Switch>
         </Router>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
