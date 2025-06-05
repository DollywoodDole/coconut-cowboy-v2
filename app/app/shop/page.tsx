import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCarousel from '../../components/ProductCarousel';

const products = [
  { id: 1, name: 'Western Shirt', price: 59.99, image: '/products/shirt.jpg' },
  { id: 2, name: 'Cowboy Hat', price: 39.99, image: '/products/hat.jpg' },
  { id: 3, name: 'Denim Jacket', price: 89.99, image: '/products/jacket.jpg' },
];

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <ProductCarousel products={products} />
      </main>
      <Footer />
    </div>
  );
}