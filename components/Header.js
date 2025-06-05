export default function Header() {
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coconut Cowboy</h1>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}