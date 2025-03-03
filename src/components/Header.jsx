import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRandom, FaBars, FaTimes } from "react-icons/fa"; // Icons
import fetchRandomPost from "../utils/fetchRandomPost";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Blog Title */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          FastCasts
        </Link>

        {/* Centered Navbar Links (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          <Link to="/archive" className="hover:underline">
            Archive
          </Link>
          <Link to="/tags" className="hover:underline">
            Tags
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>

        {/* Random Post Button (Desktop) */}
        <button
          onClick={() => fetchRandomPost(navigate)}
          className="hidden md:block text-xl hover:text-gray-300 cursor-pointer"
        >
          <FaRandom />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-center py-4">
          <Link
            to="/archive"
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Archive
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <button
            onClick={async () => {
              await fetchRandomPost(navigate);
              setIsOpen(false);
            }}
            className="block w-full py-2 hover:bg-blue-500 text-white text-center appearance-none bg-transparent border-none cursor-pointer"
          >
            <FaRandom className="inline" /> Random
          </button>
        </div>
      )}
    </header>
  );
}
