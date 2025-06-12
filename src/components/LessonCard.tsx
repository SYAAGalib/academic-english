
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

interface LessonCardProps {
  title: string;
  description: string;
  duration?: string;
  difficulty?: string;
  studentsCount?: string;
  rating?: string;
  image?: string;
  href?: string;
  category?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ 
  title, 
  description, 
  duration, 
  difficulty, 
  studentsCount, 
  rating, 
  image, 
  href,
  category 
}) => {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
      case 'সহজ':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
      case 'মধ্যম':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
      case 'কঠিন':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-blue-500"></div>
        )}
        <div className="absolute top-4 right-4">
          <BookmarkButton />
        </div>
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800 rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {difficulty && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          )}
          {rating && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {duration && (
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            )}
            {studentsCount && (
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{studentsCount}</span>
              </div>
            )}
          </div>
        </div>
        
        {href && (
          <div className="mt-4">
            <a
              href={href}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200"
            >
              Start Learning
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
