import { useContext } from "react";
import { AuthenticationContext } from "./context";
const Item = ()=> {
    const login = useContext(AuthenticationContext)
    console.log(login)
    return (<>
        Item Works
    </>)
}
export default Item;