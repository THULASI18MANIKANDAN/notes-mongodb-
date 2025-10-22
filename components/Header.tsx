
import React from 'react';
import { NoteIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <NoteIcon className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold ml-2 text-gray-800 tracking-tight">
          MY NOTES APPLICATION 
        </h1>
      </div>
    </header>
  );
};

export default Header;
