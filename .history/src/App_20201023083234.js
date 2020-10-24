import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
    <BrowserRouter>
        <Switch>
          <Route path="/sidebar" component={Sidebar} />
      <Sidebar />
      <R
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
