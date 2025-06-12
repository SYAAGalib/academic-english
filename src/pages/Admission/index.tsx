
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Target, Brain, Clock, Trophy, Users, BookOpen, Award } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const Admission: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "University Admission Prep",
        subtitle: "Master English for DU, BUET, Medical, and other university admission tests"
      },
      sections: {
        vocabulary: "Vocabulary & Logic",
        grammar: "Grammar Mastery",
        comprehension: "Speed Reading",
        practice: "Mock Tests"
      },
      quiz: {
        question: "Choose the correct synonym for 'Ubiquitous':",
        options: ["Rare", "Omnipresent", "Ancient", "Valuable"],
        correctAnswer: 1,
        explanation: "Ubiquitous means present, appearing, or found everywhere; omnipresent."
      }
    },
    bn: {
      hero: {
        title: "বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি",
        subtitle: "ঢাবি, বুয়েট, মেডিকেল এবং অন্যান্য বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ইংরেজিতে দক্ষতা অর্জন"
      },
      sections: {
        vocabulary: "শব্দভাণ্ডার ও যুক্তি",
        grammar: "ব্যাকরণ দক্ষতা",
        comprehension: "দ্রুত পড়া",
        practice: "মক টেস্ট"
      },
      quiz: {
        question: "'Ubiquitous' শব্দের সঠিক সমার্থক শব্দ কোনটি:",
        options: ["বিরল", "সর্বব্যাপী", "প্রাচীন", "মূল্যবান"],
        correctAnswer: 1,
        explanation: "Ubiquitous অর্থ সর্বত্র বিদ্যমান বা সর্বব্যাপী।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const lessons = [
    {
      title: isBangla ? "DU C Unit Vocabulary" : "DU C Unit Vocabulary",
      description: isBangla ? "ঢাবি গ C ইউনিটের জন্য ২০০০+ শব্দ" : "2000+ words for DU C Unit preparation",
      duration: isBangla ? "৯০ মিনিট" : "90 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৫,২০০+ শিক্ষার্থী" : "5,200+ students",
      rating: "4.9",
      category: isBangla ? "শব্দভাণ্ডার" : "Vocabulary",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "BUET English Preparation" : "BUET English Preparation",
      description: isBangla ? "বুয়েটের ইংরেজি অংশের বিশেষ প্রস্তুতি" : "Special preparation for BUET English section",
      duration: isBangla ? "৭৫ মিনিট" : "75 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৩,৮০০+ শিক্ষার্থী" : "3,800+ students",
      rating: "4.8",
      category: isBangla ? "প্রকৌশল" : "Engineering",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Medical English MCQ" : "Medical English MCQ",
      description: isBangla ? "মেডিকেল ভর্তি পরীক্ষার ইংরেজি MCQ" : "English MCQs for medical admission tests",
      duration: isBangla ? "৬০ মিনিট" : "60 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৪,৫০০+ শিক্ষার্থী" : "4,500+ students",
      rating: "4.7",
      category: isBangla ? "চিকিৎসা" : "Medical",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Analogy & Logic Problems" : "Analogy & Logic Problems",
      description: isBangla ? "সাদৃশ্য ও যুক্তি সমস্যার সমাধান" : "Solving analogy and logic problems",
      duration: isBangla ? "৫৫ মিনিট" : "55 minutes",
      difficulty: isBangla ? "কঠিন" : "Advanced",
      studentsCount: isBangla ? "৩,৬০০+ শিক্ষার্থী" : "3,600+ students",
      rating: "4.6",
      category: isBangla ? "যুক্তি" : "Logic",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="University admission preparation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>17,500+ {isBangla ? 'শিক্ষার্থী' : 'Students'}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>90 {isBangla ? 'পাঠ' : 'Lessons'}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>92% {isBangla ? 'ভর্তি সফলতা' : 'Admission Success'}</span>
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
                {isBangla ? "ভর্তি পরীক্ষার প্রস্তুতি বিভাগ" : "Admission Test Preparation Areas"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Brain className="h-8 w-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.vocabulary}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "উচ্চতর শব্দভাণ্ডার ও যুক্তি প্রশ্ন" : "Advanced vocabulary and logical reasoning"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Target className="h-8 w-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.grammar}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "জটিল ব্যাকরণ ও error detection" : "Complex grammar and error detection"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Clock className="h-8 w-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.comprehension}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "দ্রুত পড়া ও বিশ্লেষণ কৌশল" : "Speed reading and analysis techniques"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Trophy className="h-8 w-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.practice}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "পূর্ণাঙ্গ মক টেস্ট ও মূল্যায়ন" : "Complete mock tests and evaluation"}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "বিশেষায়িত পাঠসমূহ" : "Specialized Lessons"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>

            {/* Universities Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "বিশ্ববিদ্যালয় ভিত্তিক প্রস্তুতি" : "University-wise Preparation"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: isBangla ? "ঢাকা বিশ্ববিদ্যালয়" : "University of Dhaka", units: ["A", "B", "C", "D"], color: "bg-blue-100 text-blue-800" },
                  { name: isBangla ? "বুয়েট" : "BUET", units: [isBangla ? "প্রকৌশল" : "Engineering"], color: "bg-green-100 text-green-800" },
                  { name: isBangla ? "মেডিকেল কলেজ" : "Medical Colleges", units: [isBangla ? "চিকিৎসা" : "Medical", isBangla ? "দন্ত" : "Dental"], color: "bg-red-100 text-red-800" },
                  { name: isBangla ? "রাজশাহী বিশ্ববিদ্যালয়" : "Rajshahi University", units: ["A", "B", "C", "D"], color: "bg-purple-100 text-purple-800" }
                ].map((university, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{university.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {university.units.map((unit, unitIndex) => (
                        <span key={unitIndex} className={`px-3 py-1 text-sm font-medium rounded-full ${university.color}`}>
                          {unit}
                        </span>
                      ))}
                    </div>
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

            {/* Admission Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "ভর্তি পরিসংখ্যান" : "Admission Statistics"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "ডিইউ আবেদনকারী" : "DU Applicants"}</span>
                  <span className="font-semibold text-gray-900">4,50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "ডিইউ আসন" : "DU Seats"}</span>
                  <span className="font-semibold text-gray-900">7,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "বুয়েট আসন" : "BUET Seats"}</span>
                  <span className="font-semibold text-gray-900">1,155</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "মেডিকেল আসন" : "Medical Seats"}</span>
                  <span className="font-semibold text-gray-900">3,500+</span>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "সফলতার টিপস" : "Success Tips"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span>{isBangla ? "প্রতিদিন ৫০টি নতুন শব্দ শিখুন" : "Learn 50 new words daily"}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span>{isBangla ? "দ্রুত পড়ার অভ্যাস করুন" : "Practice speed reading"}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span>{isBangla ? "নিয়মিত মক টেস্ট দিন" : "Take regular mock tests"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
