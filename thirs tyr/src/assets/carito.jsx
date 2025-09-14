import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (qty = 1) => setCartCount(c => c + qty);
  const removeFromCart = (qty = 1) => setCartCount(c => Math.max(0, c - qty));
  const clearCart = () => setCartCount(0);

  const value = { cartCount, addToCart, removeFromCart, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>.");
  return ctx;
}