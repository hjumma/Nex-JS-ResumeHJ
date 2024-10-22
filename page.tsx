import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-50"></div>
      <header className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white z-10 relative shadow-lg">
        <div className="text-3xl font-bold">Haris Jumma</div>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-green-300 transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-green-300 transition duration-200">About</Link>
          <Link href="/service" className="hover:text-green-300 transition duration-200">Services</Link>
          <Link href="/education" className="hover:text-green-300 transition duration-200">Education</Link>
          <Link href="/contact" className="hover:text-green-300 transition duration-200">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center py-20 z-10 relative">
        <h1 className="text-6xl font-extrabold text-blue-900 mb-4 animate-bounce">Welcome to My Professional Portfolio</h1>
        <p className="text-xl max-w-2xl mb-8 text-gray-700 shadow-md p-5 bg-white rounded-lg">
          Enthusiastic supply chain professional with expertise in procurement, 
          eager to contribute to team success through attention to detail and 
          excellent organizational skills.
        </p>
        <Link href="/about">
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
            Learn More
          </button>
        </Link>
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 text-center z-10 relative">
        <p>© 2024 Haris Jumma | CSCA. All rights reserved.</p>
      </footer>
    </div>
  );
}
