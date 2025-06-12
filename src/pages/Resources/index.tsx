
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Download, FileText, BookOpen, Users, Star, Filter, Search, Video, Image, Music } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const Resources: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "Learning Resources Hub",
        subtitle: "Comprehensive collection of PDFs, worksheets, audio files, and study materials for English learning"
      },
      sections: {
        worksheets: "Worksheets",
        audiobooks: "Audio Materials",
        ebooks: "E-Books",
        videos: "Video Lessons"
      },
      quiz: {
        question: "Which type of resource is most effective for improving pronunciation?",
        options: ["PDF worksheets", "Audio materials", "Written exercises", "Grammar books"],
        correctAnswer: 1,
        explanation: "Audio materials help students hear correct pronunciation and improve their speaking skills."
      }
    },
    bn: {
      hero: {
        title: "শিক্ষা সম্পদ কেন্দ্র",
        subtitle: "ইংরেজি শেখার জন্য PDF, ওয়ার্কশীট, অডিও ফাইল এবং অধ্যয়ন উপকরণের বিস্তৃত সংগ্রহ"
      },
      sections: {
        worksheets: "ওয়ার্কশীট",
        audiobooks: "অডিও উপকরণ",
        ebooks: "ই-বুক",
        videos: "ভিডিও পাঠ"
      },
      quiz: {
        question: "উচ্চারণ উন্নত করার জন্য কোন ধরনের সম্পদ সবচেয়ে কার্যকর?",
        options: ["PDF ওয়ার্কশীট", "অডিও উপকরণ", "লিখিত অনুশীলন", "ব্যাকরণ বই"],
        correctAnswer: 1,
        explanation: "অডিও উপকরণ শিক্ষার্থীদের সঠিক উচ্চারণ শুনতে এবং কথা বলার দক্ষতা উন্নত করতে সাহায্য করে।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const resourceCategories = [
    {
      title: isBangla ? "ব্যাকরণ ওয়ার্কশীট সংগ্রহ" : "Grammar Worksheets Collection",
      description: isBangla ? "সব স্তরের জন্য ব্যাকরণ অনুশীলন" : "Grammar practice for all levels",
      duration: isBangla ? "৫০ পৃষ্ঠা" : "50 Pages",
      difficulty: isBangla ? "সব স্তর" : "All Levels",
      studentsCount: isBangla ? "৫,০০০+ ডাউনলোড" : "5,000+ Downloads",
      rating: "4.9",
      category: isBangla ? "PDF" : "PDF",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "ইংরেজি উচ্চারণ অডিও গাইড" : "English Pronunciation Audio Guide",
      description: isBangla ? "নেটিভ স্পিকারদের উচ্চারণ শিখুন" : "Learn pronunciation from native speakers",
      duration: isBangla ? "২ ঘন্টা" : "2 Hours",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "৩,২০০+ ডাউনলোড" : "3,200+ Downloads",
      rating: "4.8",
      category: isBangla ? "অডিও" : "Audio",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "SSC ইংরেজি সাজেশন ২০২৪" : "SSC English Suggestion 2024",
      description: isBangla ? "বোর্ড পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্ন" : "Important questions for board exams",
      duration: isBangla ? "৮০ পৃষ্ঠা" : "80 Pages",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "১০,০০০+ ডাউনলোড" : "10,000+ Downloads",
      rating: "4.9",
      category: isBangla ? "PDF" : "PDF",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "ইংরেজি গল্পের বই" : "English Story Books",
      description: isBangla ? "পড়ার দক্ষতা উন্নয়নের জন্য গল্প" : "Stories for improving reading skills",
      duration: isBangla ? "১২০+ গল্প" : "120+ Stories",
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "৭,৫০০+ ডাউনলোড" : "7,500+ Downloads",
      rating: "4.7",
      category: isBangla ? "ই-বুক" : "E-Book",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "IELTS প্রস্তুতি গাইড" : "IELTS Preparation Guide",
      description: isBangla ? "IELTS পরীক্ষার সম্পূর্ণ প্রস্তুতি" : "Complete IELTS exam preparation",
      duration: isBangla ? "২০০ পৃষ্ঠা" : "200 Pages",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৪,৮০০+ ডাউনলোড" : "4,800+ Downloads",
      rating: "4.8",
      category: isBangla ? "PDF" : "PDF",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "ইংরেজি ভোকাবুলারি ভিডিও সিরিজ" : "English Vocabulary Video Series",
      description: isBangla ? "দৈনন্দিন ব্যবহারের শব্দ শিখুন" : "Learn daily use vocabulary",
      duration: isBangla ? "৫০ ভিডিও" : "50 Videos",
      difficulty: isBangla ? "সব স্তর" : "All Levels",
      studentsCount: isBangla ? "৮,৯০০+ ডাউনলোড" : "8,900+ Downloads",
      rating: "4.9",
      category: isBangla ? "ভিডিও" : "Video",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Library with books and learning resources"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                <span>50K+ {isBangla ? 'ডাউনলোড' : 'Downloads'}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <span>500+ {isBangla ? 'ফাইল' : 'Files'}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>15 {isBangla ? 'বিভাগ' : 'Categories'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={isBangla ? "সম্পদ খুঁজুন..." : "Search resources..."}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="h-5 w-5" />
                  <span>{isBangla ? "ফিল্টার" : "Filter"}</span>
                </button>
              </div>
            </div>

            {/* Resource Categories */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "সম্পদের ধরন" : "Resource Categories"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <FileText className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{text.sections.worksheets}</h3>
                  <p className="text-sm text-gray-600">150+</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <Music className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{text.sections.audiobooks}</h3>
                  <p className="text-sm text-gray-600">80+</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <BookOpen className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{text.sections.ebooks}</h3>
                  <p className="text-sm text-gray-600">120+</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <Video className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{text.sections.videos}</h3>
                  <p className="text-sm text-gray-600">200+</p>
                </div>
              </div>
            </div>

            {/* Popular Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "জনপ্রিয় সম্পদ" : "Popular Resources"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourceCategories.map((resource, index) => (
                  <LessonCard key={index} {...resource} />
                ))}
              </div>
            </div>

            {/* Featured Collections */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isBangla ? "বিশেষ সংগ্রহ" : "Featured Collections"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isBangla ? "বোর্ড পরীক্ষা বান্ডল" : "Board Exam Bundle"}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {isBangla 
                      ? "SSC ও HSC পরীক্ষার জন্য সব প্রয়োজনীয় সম্পদ" 
                      : "All essential resources for SSC & HSC exams"
                    }
                  </p>
                  <button className="text-emerald-600 font-medium text-sm hover:text-emerald-700">
                    {isBangla ? "ডাউনলোড করুন →" : "Download →"}
                  </button>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isBangla ? "শিক্ষক প্যাকেজ" : "Teacher Package"}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {isBangla 
                      ? "শিক্ষকদের জন্য সম্পূর্ণ শিক্ষণ উপকরণ" 
                      : "Complete teaching materials for educators"
                    }
                  </p>
                  <button className="text-emerald-600 font-medium text-sm hover:text-emerald-700">
                    {isBangla ? "ডাউনলোড করুন →" : "Download →"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Quiz */}
            <QuizBlock {...text.quiz} />
            
            {/* Weekly Updates */}
            <WeeklyUpdateBox isBangla={isBangla} />

            {/* Download Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "ডাউনলোড পরিসংখ্যান" : "Download Statistics"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "মোট ডাউনলোড" : "Total Downloads"}</span>
                  <span className="font-semibold text-gray-900">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "এই সপ্তাহে" : "This Week"}</span>
                  <span className="font-semibold text-gray-900">2,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "জনপ্রিয় ধরন" : "Most Popular"}</span>
                  <span className="font-semibold text-gray-900">PDF</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "গড় রেটিং" : "Average Rating"}</span>
                  <span className="font-semibold text-gray-900">4.8/5</span>
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "দ্রুত অ্যাক্সেস" : "Quick Access"}
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">
                      {isBangla ? "নতুন ওয়ার্কশীট" : "New Worksheets"}
                    </span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Music className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">
                      {isBangla ? "অডিও লেসন" : "Audio Lessons"}
                    </span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">
                      {isBangla ? "ভিডিও টিউটোরিয়াল" : "Video Tutorials"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
