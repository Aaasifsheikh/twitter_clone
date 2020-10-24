import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Twittes from "./Twittes";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
      <BrowserRouter>
        <Switch>
          <Route path="/sidebar" component={Sidebar} />
          <Sidebar />
          <Route path="/twittes" component={Twittes} />
          <Twittes />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
