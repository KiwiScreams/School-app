import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import Detail from "./pages/detail/Detail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const navigate = useNavigate();
  axios
    .get("http://localhost:3030/objects")
    .then((response) => {
      if (response.data.length === 0) {
        navigate("/create", { replace: true });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
