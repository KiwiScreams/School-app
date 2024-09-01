import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import Detail from "./pages/detail/Detail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
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
  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        document.title = "ონლაინ ცხრილი";
        break;
      case location.pathname === "/create":
        document.title = "შექმნა";
        break;
      case location.pathname.startsWith("/update/"):
        document.title = "ედითი";
        break;
      case location.pathname.startsWith("/read/"):
        document.title = "დეტალურად";
        break;
      default:
        document.title = "ონლაინ ცხრილი";
    }
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Detail />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
