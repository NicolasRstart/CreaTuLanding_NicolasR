import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ProductList";
import productdetaill from ".pages/productdetail"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Bienvenido a mi tienda</h1>
        <ProductCard />
      </main>
    </>
  );
}