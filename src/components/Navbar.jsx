import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow flex items-center px-6 py-2 md:py-4">
      {/* Left Logo */}
      <div className="flex-1">
        <img
          src="/src/assets/azallogo.jpeg"
          alt="Logo"
          className="h-12 md:h-20 lg:h-24 w-auto cursor-pointer"
        />
      </div>

      {/* Center Menu */}
      <ul className="flex gap-4 md:gap-8 flex-1 justify-center text-gray-700 font-medium text-sm md:text-base lg:text-lg">
        <li>
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-black transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black transition">
            About Us
          </Link>
        </li>
      </ul>

      {/* Right Spacer */}
      <div className="flex-1" />
    </nav>
  );
};

export default Navbar;
