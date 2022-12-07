import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import ProtectedRoute from "./common/ProtectedRoute";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <ProtectedRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
