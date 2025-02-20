
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-cinzel text-xl font-bold text-primary">
            Ice & Fire
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/characters" className="nav-link">
              Characters
            </Link>
            <Link to="/houses" className="nav-link">
              Houses
            </Link>
            <Link to="/locations" className="nav-link">
              Locations
            </Link>
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-stone hover:text-primary focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/characters"
                className="nav-link px-4 py-2 hover:bg-stone/5 rounded"
                onClick={() => setIsOpen(false)}
              >
                Characters
              </Link>
              <Link
                to="/houses"
                className="nav-link px-4 py-2 hover:bg-stone/5 rounded"
                onClick={() => setIsOpen(false)}
              >
                Houses
              </Link>
              <Link
                to="/locations"
                className="nav-link px-4 py-2 hover:bg-stone/5 rounded"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                to="/books"
                className="nav-link px-4 py-2 hover:bg-stone/5 rounded"
                onClick={() => setIsOpen(false)}
              >
                Books
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
