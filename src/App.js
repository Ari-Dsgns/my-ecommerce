import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./componentes/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import { Checkout } from "./componentes/Checkout/Checkout";

export default function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}
