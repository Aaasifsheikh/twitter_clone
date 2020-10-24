import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import  from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
    <BrowserRouter>
        <Switch>
          <Route path="/sidebar" component={Sidebar} />
      <Sidebar />
      <Route exact path="/home" component={}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
