
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../src/context/cartContext"; // Asegúrate de proporcionar la ruta correcta
import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import Cart from "./components/Cart";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos" />} />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Lista" />}
          />
          <Route path="/items/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


