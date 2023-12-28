import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminLogin.css";
import loginimg from "../images/loginbg.png";
import adminProfilepic from "../images/adminpic.jpg";
import adminusericon from "../images/adminicon.png";
import adminInputpic from "../images/mobile.png";
import adminKey from "../images/key.png";
import adminLoginSubmit from "../images/login.png";
const AdminLogin = () => {
  let navigate = useNavigate();
  const adminName = useRef();
  const adminPassword = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    let admin = {
      admin: "admin@gmail.com",
      password: 12345,
    };
    if (
      adminName.current.value == admin.admin &&
      adminPassword.current.value == admin.password
    ) {
      navigate("/adminPortal");
    } else {
      alert("invalid admin Credential");
    }
  }
  return (
    <div className="adminLogin">
      <div className="adminDiv">
        <h1 className="adminTitle">Admin  Login</h1>
        <div className="adminLeft">
          <img src={loginimg} alt="" />
          <p>Welcome Admin</p>
          <img className="adminProfilepic" src={adminProfilepic} alt="" />
        </div>
        <div className="adminRight">
          <img src={adminInputpic} className="adminInputpicsss" alt="" />
          <form onSubmit={handleSubmit}>
            <div className="adminInput">
              <img src={adminusericon} alt="" />
              <input type="email" placeholder="Email address" ref={adminName} />

              <img className="adminKeys" src={adminKey} alt="" />
              <input
                type="password"
                ref={adminPassword}
                placeholder="password"
              />
              <div className="logBtn">
                <button>
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

export default AdminLogin;
