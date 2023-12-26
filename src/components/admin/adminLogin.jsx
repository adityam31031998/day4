import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminLogin.css";
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
      <h1 className="adminTitle">Login Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="adminInput">

            <input
              type="email"
              placeholder="Enter the Email address"
              ref={adminName}
            />
            <input
              type="password"
              ref={adminPassword}
              placeholder="Enter the password"
            />
          <div className="logBtn">
            <button>Login</button>
          </div>
        </div>
      </form>
        </div>
    </div>
  );
};

export default AdminLogin;
