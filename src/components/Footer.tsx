
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">AcademicEnglishBD</div>
            </div>
            <p className="text-gray-300 text-sm">
              {isBangla 
                ? 'বাংলাদেশের শিক্ষার্থীদের জন্য একাডেমিক ইংরেজি শেখার সেরা প্ল্যাটফর্ম।'
                : 'The premier platform for academic English learning for students in Bangladesh.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AcademicEnglishBD. {isBangla ? 'সমস্ত অধিকার সংরক্ষিত।' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
