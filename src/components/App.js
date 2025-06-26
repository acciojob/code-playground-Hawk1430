import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute"; 

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  function handleAuth() {
    setIsAuth(!isAuth);
  }

  return (
    <div className="main-container">
      <p>
        {isAuth
          ? 'Logged in, Now you can enter Playground'
          : "You are not authenticated, Please login first"}
      </p>

      <nav>
        {isAuth && (
          <li>
            <Link to="/playground">Playground</Link>
          </li>
        )}
        <li>
          <Link to="/">Login</Link>
        </li>
      </nav>


      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} isAuth={isAuth} handleAuth={handleAuth} />
          )}
        />
        <PrivateRoute
          exact
          path="/playground"
          component={Playground}
          isAuth={isAuth}
        />
      </Switch>
    </div>
  );
};

export default App;
