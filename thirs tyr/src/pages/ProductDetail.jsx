import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Producto no encontrado</h1>
        <Link to="/" className="text-blue-600 hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">Categoría: {product.category}</p>
      <p className="mb-4">{product.description}</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Volver al catálogo
      </Link>
    </div>
  );
}