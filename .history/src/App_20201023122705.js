import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
      <BrowserRouter>
        <Switch>
          <Route path="/sidebar" component={Sidebar} />
          <Route path="/home" component={Home} />
          <Sidebar />
          <Home />
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
