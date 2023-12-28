import React, { useState } from "react";
import Home from "../home";
import Books from "../books";
import { Routes, Route } from "react-router-dom";
import NavBar from "../navbar";
import Users from "../admin/users";
import ReadBook from "../readBooks";
import Favourities from "./favourities";
const UserPortal = () => {
  let [cart,setCart]=useState([])
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Users />} path="/users" />
        <Route element={<ReadBook setCart={setCart} cart={cart} />} path="/books/:id" />
        <Route element={<Favourities setCart={setCart} cart={cart} />} path="/fav" />
      </Routes>
      <h1>Home</h1>
    </div>
  );
};

export default UserPortal;
