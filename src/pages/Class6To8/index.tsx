
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, Users, Clock, Star, Target, Award } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const Class6To8: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "Class 6-8 English Foundation",
        subtitle: "Build strong foundation in English grammar, vocabulary, and writing for junior classes"
      },
      sections: {
        grammar: "Grammar Basics",
        vocabulary: "Vocabulary Building", 
        writing: "Creative Writing",
        reading: "Reading Comprehension"
      },
      quiz: {
        question: "Which of the following is the correct past tense of 'go'?",
        options: ["goed", "went", "gone", "going"],
        correctAnswer: 1,
        explanation: "'Went' is the correct past tense form of the irregular verb 'go'."
      }
    },
    bn: {
      hero: {
        title: "ক্লাস ৬-৮ ইংরেজি ভিত্তি",
        subtitle: "জুনিয়র ক্লাসের জন্য ইংরেজি ব্যাকরণ, শব্দভাণ্ডার এবং লেখায় শক্তিশালী ভিত্তি তৈরি করুন"
      },
      sections: {
        grammar: "ব্যাকরণের মূল বিষয়",
        vocabulary: "শব্দভাণ্ডার গঠন",
        writing: "সৃজনশীল লেখা",
        reading: "পঠন বোধগম্যতা"
      },
      quiz: {
        question: "নিচের কোনটি 'go' এর সঠিক অতীত কাল?",
        options: ["goed", "went", "gone", "going"],
        correctAnswer: 1,
        explanation: "'went' হল অনিয়মিত verb 'go' এর সঠিক past tense।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const lessons = [
    {
      title: isBangla ? "Present Tense এর ব্যবহার" : "Using Present Tense",
      description: isBangla ? "Present simple, continuous এবং perfect tense এর সহজ ব্যাখ্যা" : "Easy explanation of present simple, continuous and perfect tense",
      duration: isBangla ? "৩০ মিনিট" : "30 minutes",
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "১,২০০+ শিক্ষার্থী" : "1,200+ students",
      rating: "4.7",
      category: isBangla ? "ব্যাকরণ" : "Grammar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "বাংলা থেকে ইংরেজি অনুবাদ" : "Bangla to English Translation",
      description: isBangla ? "সহজ বাক্যের অনুবাদ শিখুন" : "Learn to translate simple sentences",
      duration: isBangla ? "২৫ মিনিট" : "25 minutes", 
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "৯৮০+ শিক্ষার্থী" : "980+ students",
      rating: "4.6",
      category: isBangla ? "অনুবাদ" : "Translation",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "ছোট অনুচ্ছেদ লেখা" : "Writing Short Paragraphs",
      description: isBangla ? "সহজ বিষয়ে ছোট অনুচ্ছেদ লিখতে শিখুন" : "Learn to write short paragraphs on simple topics",
      duration: isBangla ? "৪০ মিনিট" : "40 minutes",
      difficulty: isBangla ? "সহজ" : "Beginner", 
      studentsCount: isBangla ? "১,৫০০+ শিক্ষার্থী" : "1,500+ students",
      rating: "4.8",
      category: isBangla ? "লেখা" : "Writing",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "প্রাত্যহিক জীবনের শব্দভাণ্ডার" : "Daily Life Vocabulary",
      description: isBangla ? "দৈনন্দিন ব্যবহারের ৫০০+ শব্দ শিখুন" : "Learn 500+ words for daily use",
      duration: isBangla ? "৩৫ মিনিট" : "35 minutes",
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "২,১০০+ শিক্ষার্থী" : "2,100+ students", 
      rating: "4.9",
      category: isBangla ? "শব্দভাণ্ডার" : "Vocabulary",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Young students learning"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>8,900+ {isBangla ? 'শিক্ষার্থী' : 'Students'}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>45 {isBangla ? 'পাঠ' : 'Lessons'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>20 {isBangla ? 'ঘন্টা' : 'Hours'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "কোর্স বিভাগ" : "Course Sections"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <BookOpen className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.grammar}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Tense, Parts of Speech, Articles" : "Tense, Parts of Speech, Articles"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Users className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.vocabulary}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "প্রাত্যহিক শব্দ, Synonyms, Antonyms" : "Daily words, Synonyms, Antonyms"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Clock className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.writing}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "অনুচ্ছেদ, চিঠি, সহজ রচনা" : "Paragraphs, Letters, Simple Essays"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Star className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.reading}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "গল্প, কবিতা, তথ্যমূলক লেখা" : "Stories, Poems, Informational texts"}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "জনপ্রিয় পাঠসমূহ" : "Popular Lessons"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Quiz */}
            <QuizBlock {...text.quiz} />
            
            {/* Weekly Updates */}
            <WeeklyUpdateBox isBangla={isBangla} />

            {/* Course Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "কোর্স পরিসংখ্যান" : "Course Statistics"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "মোট পাঠ" : "Total Lessons"}</span>
                  <span className="font-semibold text-gray-900">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "সম্পূর্ণ সময়" : "Total Duration"}</span>
                  <span className="font-semibold text-gray-900">
                    {isBangla ? "২০ ঘন্টা" : "20 hours"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "শিক্ষার্থী" : "Students"}</span>
                  <span className="font-semibold text-gray-900">8,900+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "রেটিং" : "Rating"}</span>
                  <span className="font-semibold text-gray-900">4.7/5</span>
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "শিক্ষার পথ" : "Learning Path"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">1</div>
                  <span className="text-sm text-gray-700">{isBangla ? "বেসিক গ্রামার" : "Basic Grammar"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">2</div>
                  <span className="text-sm text-gray-700">{isBangla ? "শব্দভাণ্ডার" : "Vocabulary"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium">3</div>
                  <span className="text-sm text-gray-500">{isBangla ? "সহজ লেখা" : "Simple Writing"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium">4</div>
                  <span className="text-sm text-gray-500">{isBangla ? "পড়া বোঝা" : "Reading Comprehension"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class6To8;
