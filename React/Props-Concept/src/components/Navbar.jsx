import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
