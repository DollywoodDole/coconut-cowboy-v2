import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';

// Sample product data (replace with Shopify API data later if needed)
const products = [
  { id: 1, name: 'Western Shirt', price: 59.99, image: '/products/shirt.jpg' },
  { id: 2, name: 'Cowboy Hat', price: 39.99, image: '/products/hat.jpg' },
  { id: 3, name: 'Denim Jacket', price: 89.99, image: '/products/jacket.jpg' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <section
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        >
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Coconut Cowboy</h1>
            <p className="text-xl mb-6">Western style, modern edge.</p>
            <Link
              href="/shop"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
          </div>
        </section>
        <ProductCarousel products={products} />
      </main>
      <Footer />
    </div>
  );
}