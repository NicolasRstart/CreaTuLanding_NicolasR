import CartWidget from "./CartWidget";

import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function Navbar() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/categoria/electronica", label: "Electrónica" },
    { to: "/categoria/ropa", label: "Ropa" },
    { to: "/categoria/hogar", label: "Hogar" },
    { to: "/categoria/deportes", label: "Deportes" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            MiTienda
          </NavLink>

          {/* Links */}
          <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}