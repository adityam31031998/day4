import React from "react";
import AddBooks from "./addBooks";
import AddUsers from "./addUsers";
import Users from "./users";
import Home from "../home";
import Books from "../books";
import { Routes, Route } from "react-router-dom";
import NavBar from "../navbar";
import ReadBook from "../readBooks";
const AdminPortal = () => {
  return (
    <div className="adminPortal">
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Users />} path="/users" />
        <Route element={<ReadBook />} path="/books/:id" />
        <Route element={<AddBooks />} path="/addBooks" />
        <Route element={<AddUsers />} path="/addUsers" />
      </Routes>
    </div>
  );
};

export default AdminPortal;
