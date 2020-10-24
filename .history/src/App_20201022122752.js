import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import {BrowserRouter}
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Twitter">
      <BrowserRouter>
        <Switch>
          <Route path="/twitter">
            <Sidebar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
