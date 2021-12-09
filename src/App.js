import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Technology from "./Pages/Technology";
import { Route } from "react-router-dom";

const App = () => {
   return (
      <>
         <Header />
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/crew">
            <Crew />
         </Route>
         <Route exact path="/destination">
            <Destination />
         </Route>
         <Route exact path="/technology">
            <Technology />
         </Route>
      </>
   );
};

export default App;
