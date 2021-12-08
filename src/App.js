import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Technology from "./Pages/Technology";
import { Switch, Route } from "react-router-dom";

const App = () => {
   return (
      <Switch>
         <Header />
         <Route exact path="/" render={(props) => <Home {...props} />} />
         <Route exact path="/crew" render={(props) => <Crew {...props} />} />
         <Route
            exact
            path="/destination"
            render={(props) => <Destination {...props} />}
         />
         <Route
            exact
            path="/technology"
            render={(props) => <Technology {...props} />}
         />
      </Switch>
   );
};

export default App;
