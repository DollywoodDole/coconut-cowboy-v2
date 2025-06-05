import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Coconut Cowboy. All rights reserved.</p>
      <div className="mt-2">
        <Link href="https://instagram.com" className="mx-2 hover:underline">Instagram</Link>
        <Link href="https://twitter.com" className="mx-2 hover:underline">Twitter</Link>
      </div>
    </footer>
  );
}