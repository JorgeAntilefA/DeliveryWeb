import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageBins from "../Pages/Bins";
import Login from "../Pages/Login";
import { UserContextProvider } from "../Context/UserContext";
import { SalidasContextProvider } from "../Context/SalidasContext";

export default function App() {
  const srv = "/Delivery";

  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path={process.env.NODE_ENV === "development" ?  "/":srv } component={Login} />
          <SalidasContextProvider>
            <Route exact path={process.env.NODE_ENV === "development" ?  "/registro": srv + "/registro" } component={PageBins}></Route>
          </SalidasContextProvider>
        </Switch>
      </Router>
    </UserContextProvider>
  
  );
}
