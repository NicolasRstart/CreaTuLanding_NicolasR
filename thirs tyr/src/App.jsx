import Navbar from "./assets/baradenavegacion";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Bienvenido a mi tienda</h1>
        <ProductCard />
      </main>
    </>
  );
}