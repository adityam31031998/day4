import React from "react";
import Home from "../home";
import Books from "../books";
import { Routes, Route } from "react-router-dom";
import NavBar from "../navbar";
import Users from "../admin/users";
const UserPortal = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Users />} path="/users" />
      </Routes>
      <h1>Home</h1>
    </div>
  );
};

export default UserPortal;
