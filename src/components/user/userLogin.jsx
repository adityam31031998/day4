import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminLogin.css";
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
        <form onSubmit={handleSubmit}>
          <div className="adminInput">
            <div className="logBtn">
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
