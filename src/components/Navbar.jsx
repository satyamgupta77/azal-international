import { Link } from "react-router-dom";
import logo from "../assets/azal-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow px-4 md:px-6">
      <div className="flex items-center min-h-16 md:min-h-24 lg:min-h-30">
        {/* Left Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-16 lg:h-20 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* Center Menu */}
        <ul className="flex gap-4 md:gap-8 mx-auto text-gray-700 font-medium text-sm md:text-base lg:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
