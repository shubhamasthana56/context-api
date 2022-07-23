import { useContext } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { DarkThemeContext, AuthenticationContext } from "./context";
import Header from "./header";
import "./css/App.css";
const App = ()=> {
  // const themeData = useContext(DarkThemeContext);
  // const {isLogin, userAuthetication} = useContext(AuthenticationContext);
  // const abc = "a"
  return (
    <>
      {/* <button onClick={userAuthetication} id="login-button" className="button" style={{backgroundColor: "black"}}>{isLogin ? "Logout": "Login"}</button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header/>}/>
          <Route/>
        </Routes>
          
      </BrowserRouter>

    </>
  )
}
export default App;