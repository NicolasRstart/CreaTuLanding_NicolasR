import { Link, useParams } from "react-router-dom";

// Datos simulados (en un futuro se reemplaza con fetch a API)
const PRODUCTS = [
  { id: 1, name: "Laptop", category: "electronica" },
  { id: 2, name: "Auriculares", category: "electronica" },
  { id: 3, name: "Remera", category: "ropa" },
  { id: 4, name: "Silla Gamer", category: "hogar" },
  { id: 5, name: "Pelota", category: "deportes" },
];

export default function ProductList() {
  const { categoryId } = useParams();
  const filtered = categoryId
    ? PRODUCTS.filter((p) => p.category === categoryId)
    : PRODUCTS;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-500">Categoría: {p.category}</p>
            <Link
              to={`/producto/${p.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Ver detalle
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}