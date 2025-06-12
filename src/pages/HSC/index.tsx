
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Globe, BookOpen, TrendingUp, Users, Award, Brain } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const HSC: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "HSC English (Class 11-12)",
        subtitle: "Advanced English for higher secondary with focus on comprehension, composition, and literature"
      },
      sections: {
        comprehension: "Reading Comprehension",
        composition: "Composition Writing",
        grammar: "Advanced Grammar",
        literature: "Literature Analysis"
      },
      quiz: {
        question: "What is the main theme of 'The Invisible Man' by H.G. Wells?",
        options: [
          "Science and its consequences",
          "Love and romance",
          "War and peace",
          "Social inequality"
        ],
        correctAnswer: 0,
        explanation: "The novel explores the dangerous consequences of scientific experimentation and the abuse of power."
      }
    },
    bn: {
      hero: {
        title: "এইচএসসি ইংরেজি (একাদশ-দ্বাদশ শ্রেণী)",
        subtitle: "উচ্চ মাধ্যমিকের জন্য উন্নত ইংরেজি - Comprehension, Composition এবং সাহিত্যের উপর গুরুত্ব"
      },
      sections: {
        comprehension: "পঠন বোধগম্যতা",
        composition: "রচনা লেখা",
        grammar: "উন্নত ব্যাকরণ", 
        literature: "সাহিত্য বিশ্লেষণ"
      },
      quiz: {
        question: "H.G. Wells এর 'The Invisible Man' এর মূল থিম কী?",
        options: [
          "বিজ্ঞান ও এর পরিণতি",
          "প্রেম ও রোমান্স",
          "যুদ্ধ ও শান্তি",
          "সামাজিক অসমতা"
        ],
        correctAnswer: 0,
        explanation: "উপন্যাসটি বৈজ্ঞানিক পরীক্ষা-নিরীক্ষার বিপজ্জনক পরিণতি এবং ক্ষমতার অপব্যবহার নিয়ে।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const lessons = [
    {
      title: isBangla ? "Reading Comprehension Strategies" : "Reading Comprehension Strategies",
      description: isBangla ? "দ্রুত পড়া ও বোঝার কৌশল শিখুন" : "Learn techniques for fast reading and understanding",
      duration: isBangla ? "৫৫ মিনিট" : "55 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "২,৮০০+ শিক্ষার্থী" : "2,800+ students",
      rating: "4.9",
      category: isBangla ? "পড়া" : "Reading",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Essay Writing Techniques" : "Essay Writing Techniques",
      description: isBangla ? "উচ্চমানের প্রবন্ধ লেখার কৌশল" : "Techniques for writing high-quality essays",
      duration: isBangla ? "৬০ মিনিট" : "60 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৩,২০০+ শিক্ষার্থী" : "3,200+ students",
      rating: "4.8",
      category: isBangla ? "লেখা" : "Writing",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "CV ও Cover Letter Writing" : "CV & Cover Letter Writing",
      description: isBangla ? "পেশাদার CV ও Cover Letter লেখার নিয়ম" : "Professional CV and cover letter writing rules",
      duration: isBangla ? "৪৫ মিনিট" : "45 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৪,১০০+ শিক্ষার্থী" : "4,100+ students",
      rating: "4.7",
      category: isBangla ? "লেখা" : "Writing",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Literature Analysis - Poetry" : "Literature Analysis - Poetry",
      description: isBangla ? "কবিতার ছন্দ, অলংকার ও বিশ্লেষণ" : "Poetry rhythm, figures of speech, and analysis",
      duration: isBangla ? "৫০ মিনিট" : "50 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "২,৫০০+ শিক্ষার্থী" : "2,500+ students",
      rating: "4.6",
      category: isBangla ? "সাহিত্য" : "Literature",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="HSC students in library"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>14,200+ {isBangla ? 'শিক্ষার্থী' : 'Students'}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>75 {isBangla ? 'পাঠ' : 'Lessons'}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>98% {isBangla ? 'সন্তুষ্টি' : 'Satisfaction'}</span>
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
                {isBangla ? "এইচএসসি ইংরেজি বিষয়সমূহ" : "HSC English Components"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.comprehension}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Unseen passage, Summary writing" : "Unseen passages and summary writing"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <FileText className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.composition}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Essay, Report, CV, Application" : "Essays, reports, CVs, applications"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.grammar}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Complex grammar, Sentence patterns" : "Complex grammar and sentence patterns"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Globe className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.literature}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Novel, Drama, Poetry analysis" : "Analysis of novels, dramas, and poetry"}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "উন্নত পাঠসমূহ" : "Advanced Lessons"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>

            {/* Literature Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "সাহিত্য পাঠ্যসূচি" : "Literature Syllabus"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "The Invisible Man", author: "H.G. Wells", type: isBangla ? "উপন্যাস" : "Novel" },
                  { title: "Arms and the Man", author: "George Bernard Shaw", type: isBangla ? "নাটক" : "Drama" },
                  { title: "The Garden Party", author: "Katherine Mansfield", type: isBangla ? "ছোটগল্প" : "Short Story" },
                  { title: "On His Blindness", author: "John Milton", type: isBangla ? "কবিতা" : "Poetry" }
                ].map((work, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-1">{work.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{work.author}</p>
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                      {work.type}
                    </span>
                  </div>
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

            {/* HSC Exam Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "এইচএসসি পরীক্ষার তথ্য" : "HSC Exam Info"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "পূর্ণমান" : "Full Marks"}</span>
                  <span className="font-semibold text-gray-900">100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "পরীক্ষার সময়" : "Exam Duration"}</span>
                  <span className="font-semibold text-gray-900">
                    {isBangla ? "৩ ঘন্টা" : "3 hours"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "পাস নম্বর" : "Pass Marks"}</span>
                  <span className="font-semibold text-gray-900">33</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "A+ নম্বর" : "A+ Marks"}</span>
                  <span className="font-semibold text-gray-900">80+</span>
                </div>
              </div>
            </div>

            {/* Career Prep */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "ক্যারিয়ার প্রস্তুতি" : "Career Preparation"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {isBangla 
                  ? "এইচএসসির পর IELTS, TOEFL, SAT প্রস্তুতি নিন"
                  : "Prepare for IELTS, TOEFL, SAT after HSC"
                }
              </p>
              <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                {isBangla ? "আরও জানুন" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSC;
