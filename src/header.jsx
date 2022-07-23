import "./css/header.css";
import { Link } from "react-router-dom";
const Header = ()=> {
    const navItems = [{item:"LOGIN", path: "/login"}, "HOME", "ABOUT"]
    return (
        <>
            <div className="header-container">
                {navItems.map((item, i)=> {
                    return (
                        <div className="header-item" key={i}>
                            <a href="">{item}</a>
                            <Link to="">{item}</Link>
                            </div>
                    )
                })}
            </div>
        </>
    )
}

export default Header;