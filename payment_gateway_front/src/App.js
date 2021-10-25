import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Registro from "./components/Registro";
import Profile from "./components/Profile";
import PublicProfile from "./components/PublicProfile";
import "./styles.css";

function App() {
  return (
    <>
      <NavBar />

      <Login />
      <Registro />
      <Profile />
      <PublicProfile />
    </>
  );
}

export default App;
