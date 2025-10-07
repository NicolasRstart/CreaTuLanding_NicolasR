import { useState } from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const [qty, setQty] = useState(Math.min(initial, stock));

  const inc = () => setQty((q) => Math.min(stock, q + 1));
  const dec = () => setQty((q) => Math.max(1, q - 1));
  const handleAdd = () => stock > 0 && onAdd(qty);

  return (
    <div className="space-x-2 inline-flex items-center">
      <button onClick={dec} className="px-3 py-1 border rounded">-</button>
      <span className="px-3">{qty}</span>
      <button onClick={inc} className="px-3 py-1 border rounded">+</button>
      <button onClick={handleAdd} className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Agregar
      </button>
    </div>
  );
}
