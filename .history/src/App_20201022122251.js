import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
    <Switch>
     <Route
      <Sidebar />
    </Switch>
    </div>
  );
}

export default App;
