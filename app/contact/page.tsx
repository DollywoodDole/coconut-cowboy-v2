import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form
          action="/api/contact"
          method="POST"
          className="max-w-lg mx-auto space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}