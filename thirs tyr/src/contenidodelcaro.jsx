import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, name, price, qty, subtotal }

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty, subtotal: (i.qty + qty) * i.price } : i
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty, subtotal: qty * product.price }];
    });
  }

  function removeFromCart(productId, qty = 1) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === productId ? { ...i, qty: Math.max(0, i.qty - qty), subtotal: Math.max(0, i.qty - qty) * i.price } : i))
        .filter((i) => i.qty > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.subtotal, 0);

  const value = { items, addToCart, removeFromCart, clearCart, cartCount, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>.");
  return ctx;
}
