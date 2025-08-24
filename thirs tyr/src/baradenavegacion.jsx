import CartWidget from "./CartWidget";

export default function Navbar() {
  const links = [
    { href: "#", label: "Inicio" },
    { href: "#productos", label: "Productos" },
    { href: "#ofertas", label: "Ofertas" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-600">MiTienda</a>

          {/* Links */}
          <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-blue-600">{l.label}</a>
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