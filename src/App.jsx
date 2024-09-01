import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Table from "./pages/table/Table"
import Create from "./pages/create/Create"
import Update from "./pages/update/Update"
import Detail from "./pages/detail/Detail"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Detail />}></Route>
      </Routes>
    </>
  )
}

export default App
