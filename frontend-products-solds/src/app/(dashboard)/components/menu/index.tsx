
import Link from 'next/link';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <Link href="/">
            <li className="text-white hover:text-orange-500 transition">Home</li>
          </Link>
          <div className="border-l h-6 border-white"></div>
          <Link href="/submitfile">
            <li className="text-white hover:text-orange-500 transition">Submit File</li>
          </Link>
          <div className="border-l h-6 border-white"></div>
          <Link href="/productssold">
            <li className="text-white hover:text-orange-500 transition">Report Products Sold</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
