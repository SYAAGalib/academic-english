
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface BookmarkButtonProps {
  size?: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ size = 5 }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 rounded-full transition-all duration-200 ${
        isBookmarked 
          ? 'bg-red-500 text-white shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
      }`}
    >
      <Heart 
        className={`h-${size} w-${size} ${isBookmarked ? 'fill-current' : ''}`} 
      />
    </button>
  );
};

export default BookmarkButton;
