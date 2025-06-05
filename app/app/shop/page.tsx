import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';

const products = [
  { id: 1, name: 'Western Shirt', price: 59.99, image: '/products/shirt.jpg' },
  { id: 2, name: 'Cowboy Hat', price: 39.boxylic

System: It looks like the code for `app/page.tsx` was cut off. I’ll complete the `app/page.tsx` file, ensuring it integrates the fixed `ProductCarousel.tsx`, `Header.tsx`, `Footer.tsx`, and `ProductCard.tsx` components. I’ll also verify the setup in a clean terminal context, addressing the previous errors (TypeScript parsing and export issues) to continue building the improved `coconutcowboy.ca` site using Next.js with the App Router, TypeScript, and Tailwind CSS.

### Step 1: Complete `app/page.tsx`
Here’s the complete `app/page.tsx` for the home page, incorporating the hero section and product carousel:
```tsx
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';

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