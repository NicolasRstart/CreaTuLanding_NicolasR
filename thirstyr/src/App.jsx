import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
