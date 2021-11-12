import React from "react";

import NavBar from "./components/utils/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Profile from "./components/profile/Profile";
import PublicProfile from "./components/profile/PublicProfile";
import Registro from "./components/user/Registro";
import Footer from "./components/utils/Footer";
import Inicio from "./components/utils/Inicio";

import "./styles.css";

function App() {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    let auth = localStorage.getItem("token");
    auth ? setAuthUser(auth) : setAuthUser(null);
  }, []);

  return (
    <Router>
      <div className="bg-container">
        <NavBar auth={authUser} />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/auth">
            <Login />
          </Route>
          <Route path="/register">
            <Registro />
          </Route>
          <Route path="/public/:id" exact>
            <PublicProfile />
          </Route>

          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
