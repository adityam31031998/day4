import { Link } from "react-router-dom";
import "../styles/landingPage.css"
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="title">

      <h1>Book Hub</h1>
      </div>
      <div className="linkOption">
        <Link  to={"/adminLogin"}>AdminLogin</Link>
        <Link to={"/UserLogin"}>userLogin</Link>
      </div>
    </div>
  );
};

export default LandingPage;
