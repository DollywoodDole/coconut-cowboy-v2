"use client"; // Add this to make ProductCard a client component

import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link
        href={`/shop/${product.id}`}
        className="mt-2 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        View Details
      </Link>
    </div>
  );
}