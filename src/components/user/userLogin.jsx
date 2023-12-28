import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminLogin.css";
import loginimg from "../images/loginbg.png";
import adminProfilepic from "../images/adminpic.jpg";
import adminusericon from "../images/adminicon.png";
import adminInputpic from "../images/mobile1.png";
import adminKey from "../images/key.png";
const UserLogin = () => {
  let navigate = useNavigate();
  const userName = useRef();
  const UserPassword = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    navigate("/userPortal");
  }
  return (
    <div className="adminLogin">
      <div className="adminDiv">
        <h1 className="adminTitle">User Login</h1>
        <div className="adminLeft">
          <img src={loginimg} alt="" />
          <p>Welcome User</p>
          <img className="adminProfilepic" src={adminProfilepic} alt="" />
        </div>
        <div className="adminRight">
          <img src={adminInputpic} className="adminInputpicss" alt="" />
          <form>
            <div className="adminInput">
             
              <div className="logBtn">
                <button onClick={handleSubmit}>
                  <img className="adminLoginSubmits" src="" alt="" />
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
