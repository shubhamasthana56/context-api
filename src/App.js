import { useContext } from "react";
import { DarkThemeContext } from "./context";
const App = ()=> {
  const themeData = useContext(DarkThemeContext);
  console.log(themeData)
  return (
    <>
      <div>Shubham</div>
    </>
  )
}
export default App;