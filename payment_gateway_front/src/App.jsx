import React from "react";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Profile from "./components/Profile";
import PublicProfile from "./components/PublicProfile";
import Registro from "./components/Registro";

import "./styles.css";

function App() {
  const [authUser, setAuthUser] = React.useState(false);

  React.useEffect(() => {
    let auth = localStorage.getItem("token");
    auth ? setAuthUser(auth) : setAuthUser(null);
  }, []);
  return (
    <Router>
      <div className="">
        <NavBar auth={authUser} />
        <Switch>
          {authUser == null ? (
            <>
              <Route path="/auth">
                <Login />
              </Route>
              <Route path="/register">
                <Registro />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/public" exact>
                <PublicProfile />
              </Route>
            </>
          ) : (
            <p>Bienvenido</p>
          )}
          <Route path="/public" exact>
            <PublicProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
