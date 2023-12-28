import {Link, useLocation} from "react-router-dom"
import "../styles/navbar.css"
const NavBar = () => {
    const nav=useLocation()
    const navpath=nav.pathname.startsWith("/adminPortal");
    
    return ( <div className="navbar">
        <div className="logo1">
            <img src="../book.jpeg" className="logo" alt=""/>
            <h1 className="title">BookHub</h1>
        </div>
        <div className="links">
            {navpath ?
                <>
                    <Link className="link" to={"/adminPortal"}>users</Link>
                    <Link className="link" to={"/adminPortal/addBooks"}>AddBooks</Link>
                    <Link className="link" to={"/adminPortal/books"}>books</Link>
                    <Link className="link" to={"/adminPortal/users"}>users</Link>
                    <Link className="link" to={"/adminLogin"}>Logout</Link>
                    <Link className="link" to={"/adminPortal/addUsers"}>AddUsers</Link>
                </>
            :
                <>
                    <Link className="link" to={"/userPortal"}>Home</Link>
                    <Link className="link" to={"/userPortal/books"}>books</Link>
                    {/* <Link className="link" to={"/userPortal/users"}>users</Link> */}
                    <Link className="link" to={"/userPortal/fav"}>Addfav</Link>
                    <Link className="link" to={"/userLogin"}>Logout</Link>

                </>
            }
        </div>
    </div> );
}
 
export default NavBar;