import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
    <Switch>
     <Route path="/twitter>
      <Sidebar  />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
