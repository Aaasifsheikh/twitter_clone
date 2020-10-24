import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="Twitter">
        <Switch>
          <Route path="/sidebar" component={Sidebar} />
        </Switch>
      </BrowserRouter>
      <Sidebar />
    </div>
  );
}

export default App;
