import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRandom, FaBars, FaTimes } from "react-icons/fa"; // Icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Blog Title */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          FastCasts
        </Link>

        {/* Centered Navbar Links (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          <Link to="/archives" className="hover:underline">
            Archive
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>

        {/* Right-Aligned Random Link (Desktop) */}
        <Link
          to="/random"
          className="hidden md:block text-xl hover:text-gray-300"
        >
          <FaRandom />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-center py-4">
          <Link
            to="/archives"
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Archives
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/random"
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            <FaRandom className="inline" /> Random
          </Link>
        </div>
      )}
    </header>
  );
}
