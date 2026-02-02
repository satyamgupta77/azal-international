const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} Azal University. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm md:text-base lg:text-lg">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
