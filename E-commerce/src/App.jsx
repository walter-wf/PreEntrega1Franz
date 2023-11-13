import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import {ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (   
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Lista" />} />
        <Route path="/items/:id" element={<div>Detalle</div>} />
        <Route path="*" element={Error404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

