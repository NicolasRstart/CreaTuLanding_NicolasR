import { ShoppingCart } from "lucide-react";
import { useCart } from "../assets/CartContext";

export default function CartWidget() {
  const { cartCount } = useCart();

  return (
    <button aria-label="Carrito" className="relative p-2 rounded-2xl hover:bg-gray-100 transition">
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full leading-none">
          {cartCount}
        </span>
      )}
    </button>
  );
}
