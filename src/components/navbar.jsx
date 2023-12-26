import {Link, useLocation} from "react-router-dom"
import "../styles/navbar.css"
const NavBar = () => {
    const nav=useLocation()
    console.log(nav);
    return ( <div className="navbar">
        <div className="logo1">
            <img src="../book.jpeg" className="logo" alt=""/>
            <h1 className="title">BookHub</h1>
        </div>
        <div className="links">
        { nav.pathname=="/adminPortal" ? <Link className="link" to={"/adminPortal"}>users</Link>:<Link className="link" to={"/userPortal"}>users</Link>}
        {nav.pathname=="/adminPortal" ? <Link className="link" to={"/adminPortal/books"}>books</Link>:<Link className="link" to={"/userPortal/books"}>books</Link>}
            {nav.pathname.startsWith('/adminPortal') && <Link className="link" to={"/adminPortal/addBooks"}>AddBooks</Link>}
            {nav.pathname.startsWith('/adminPortal')&& <Link className="link" to={"/adminPortal/addUsers"}>AddUsers</Link>}
            {nav.pathname=="/adminPortal" ? <Link className="link" to={"/adminPortal/users"}>users</Link>:<Link className="link" to={"/userPortal/users"}>users</Link>}
            { <Link className="link" to={"/adminLogin"}>Logout</Link>}
        </div>
    </div> );
}
 
export default NavBar;