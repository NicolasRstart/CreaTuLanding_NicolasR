import { useCart } from "../assets/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Carrito</h1>
        <p>El carrito está vacío.</p>
        <Link to="/" className="text-blue-600 hover:underline mt-3 inline-block">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      <ul className="space-y-4">
        {items.map((i) => (
          <li key={i.id} className="p-4 border rounded flex justify-between items-center">
            <div className="text-left">
              <div className="font-semibold">{i.name}</div>
              <div className="text-sm">Cantidad: {i.qty}</div>
              <div className="text-sm">Subtotal: ${i.subtotal}</div>
            </div>
            <button onClick={() => removeFromCart(i.id, 1)} className="px-3 py-1 border rounded">-1</button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right">
        <div className="text-lg font-semibold">Total: ${total}</div>
        <div className="mt-3 flex justify-end gap-3">
          <button onClick={clearCart} className="px-4 py-2 border rounded">Vaciar carrito</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded">Ir a checkout</button>
        </div>
      </div>
    </div>
  );
}
