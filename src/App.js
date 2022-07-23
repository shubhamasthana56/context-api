import { useContext } from "react";
import { DarkThemeContext, AuthenticationContext } from "./context";
import "./css/App.css";
const App = ()=> {
  const themeData = useContext(DarkThemeContext);
  const {isLogin, userAuthetication} = useContext(AuthenticationContext);
  const abc = "a"
  return (
    <>
      <button onClick={userAuthetication} id="login-button" className="button" style={{backgroundColor: "black"}}>{isLogin ? "Logout": "Login"}</button>
    </>
  )
}
export default App;