import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ItemDetail from "../components/ItemDetail";
import { useState } from "react";
import { useCart } from "../assets/CartContext";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Producto no encontrado</h1>
        <Link to="/" className="text-blue-600 hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  function handleAdd(qty) {
    addToCart(product, qty);
    setAdded(true);
  }

  return (
    <div className="p-6">
      <ItemDetail product={product} onAdd={handleAdd} added={added} />
      <div className="mt-4">
        <Link to="/" className="text-blue-600 hover:underline">Volver al catálogo</Link>
      </div>
    </div>
  );
}