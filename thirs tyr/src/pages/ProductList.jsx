import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const filtered = categoryId ? PRODUCTS.filter((p) => p.category === categoryId) : PRODUCTS;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}
      </h1>
      <ItemList products={filtered} />
    </div>
  );
}
