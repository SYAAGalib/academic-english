
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, BookOpen } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const navigation = [
    { name: isBangla ? 'হোম' : 'Home', href: isBangla ? '/bn' : '/' },
    { name: isBangla ? 'ক্লাস ৬-৮' : 'Class 6-8', href: isBangla ? '/bn/class-6-8' : '/class-6-8' },
    { name: isBangla ? 'এসএসসি' : 'SSC', href: isBangla ? '/bn/ssc' : '/ssc' },
    { name: isBangla ? 'এইচএসসি' : 'HSC', href: isBangla ? '/bn/hsc' : '/hsc' },
    { name: isBangla ? 'ভর্তি পরীক্ষা' : 'Admission', href: isBangla ? '/bn/admission' : '/admission' },
    { name: isBangla ? 'শিক্ষকদের জন্য' : 'Teachers', href: isBangla ? '/bn/teachers' : '/teachers' },
    { name: isBangla ? 'রিসোর্স' : 'Resources', href: isBangla ? '/bn/resources' : '/resources' },
    { name: isBangla ? 'ব্লগ' : 'Blog', href: isBangla ? '/bn/blog' : '/blog' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={isBangla ? '/bn' : '/'} className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              AcademicEnglishBD
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <LanguageToggle />
            
            <Link
              to={isBangla ? '/bn/login' : '/login'}
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200"
            >
              {isBangla ? 'লগইন' : 'Login'}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100">
            <SearchBar />
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={isBangla ? '/bn/login' : '/login'}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                {isBangla ? 'লগইন' : 'Login'}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
