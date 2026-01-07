import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Mikael Celik
        </Link>
        
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/hobbies" className="hover:text-blue-400 transition-colors">
              Hobbies
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-400 transition-colors">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;