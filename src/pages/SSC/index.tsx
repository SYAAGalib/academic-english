
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, MessageSquare, BookOpen, Target, Award, Users } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const SSC: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "SSC English (Class 9-10)",
        subtitle: "Master SSC English syllabus with narration, voice change, and board question practice"
      },
      sections: {
        narration: "Narration",
        voice: "Voice Change",
        writing: "Formal Writing",
        board: "Board Questions"
      },
      quiz: {
        question: "Change the voice: 'The teacher is teaching the students.'",
        options: [
          "The students are being taught by the teacher.",
          "The students are taught by the teacher.",
          "The students were being taught by the teacher.",
          "The students have been taught by the teacher."
        ],
        correctAnswer: 0,
        explanation: "In present continuous tense, passive voice is formed using 'am/is/are + being + past participle'."
      }
    },
    bn: {
      hero: {
        title: "এসএসসি ইংরেজি (নবম-দশম শ্রেণী)",
        subtitle: "Narration, Voice change এবং বোর্ড প্রশ্ন অনুশীলনের মাধ্যমে এসএসসি ইংরেজি সিলেবাস আয়ত্ত করুন"
      },
      sections: {
        narration: "বর্ণনা (Narration)",
        voice: "কর্মবাচ্য পরিবর্তন",
        writing: "আনুষ্ঠানিক লেখা",
        board: "বোর্ড প্রশ্ন"
      },
      quiz: {
        question: "Voice change করুন: 'The teacher is teaching the students.'",
        options: [
          "The students are being taught by the teacher.",
          "The students are taught by the teacher.",
          "The students were being taught by the teacher.",
          "The students have been taught by the teacher."
        ],
        correctAnswer: 0,
        explanation: "Present continuous tense এ passive voice হয় 'am/is/are + being + past participle' দিয়ে।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const lessons = [
    {
      title: isBangla ? "Direct থেকে Indirect Speech" : "Direct to Indirect Speech",
      description: isBangla ? "Statement, Question, Command এর Narration শিখুন" : "Learn narration of statements, questions, and commands",
      duration: isBangla ? "৪৫ মিনিট" : "45 minutes",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "৩,২০০+ শিক্ষার্থী" : "3,200+ students",
      rating: "4.8",
      category: isBangla ? "ব্যাকরণ" : "Grammar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Active থেকে Passive Voice" : "Active to Passive Voice",
      description: isBangla ? "সকল tense এর Voice change এর নিয়ম" : "Voice change rules for all tenses",
      duration: isBangla ? "৫০ মিনিট" : "50 minutes",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "২,৮০০+ শিক্ষার্থী" : "2,800+ students",
      rating: "4.7",
      category: isBangla ? "ব্যাকরণ" : "Grammar",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Formal Letter Writing" : "Formal Letter Writing",
      description: isBangla ? "আবেদনপত্র, অভিযোগপত্র লেখার নিয়ম" : "How to write applications and complaint letters",
      duration: isBangla ? "৩৫ মিনিট" : "35 minutes",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "২,৫০০+ শিক্ষার্থী" : "2,500+ students",
      rating: "4.6",
      category: isBangla ? "লেখা" : "Writing",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "Right Form of Verb" : "Right Form of Verb",
      description: isBangla ? "Verb এর সঠিক রূপ ব্যবহারের কৌশল" : "Techniques for using correct verb forms",
      duration: isBangla ? "৪০ মিনিট" : "40 minutes",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "৩,৫০০+ শিক্ষার্থী" : "3,500+ students",
      rating: "4.9",
      category: isBangla ? "ব্যাকরণ" : "Grammar",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="SSC students studying"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>12,500+ {isBangla ? 'শিক্ষার্থী' : 'Students'}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>60 {isBangla ? 'পাঠ' : 'Lessons'}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>95% {isBangla ? 'সফলতার হার' : 'Success Rate'}</span>
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
                {isBangla ? "এসএসসি ইংরেজি বিষয়সমূহ" : "SSC English Topics"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <MessageSquare className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.narration}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Direct to Indirect Speech" : "Direct to Indirect Speech conversion"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Target className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.voice}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Active to Passive Voice পরিবর্তন" : "Active to Passive Voice transformation"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <FileText className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.writing}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "Application, Completing Story" : "Applications, Completing Story"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <BookOpen className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.board}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "সকল বোর্ডের প্রশ্ন ও সমাধান" : "All board questions and solutions"}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "মূল পাঠসমূহ" : "Core Lessons"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson, index) => (
                  <LessonCard key={index} {...lesson} />
                ))}
              </div>
            </div>

            {/* Board Questions */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "বোর্ড পরীক্ষার প্রশ্নপত্র" : "Board Exam Papers"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: isBangla ? "ঢাকা বোর্ড ২০২৩" : "Dhaka Board 2023", description: isBangla ? "সমাধানসহ প্রশ্নপত্র" : "Question paper with solutions" },
                  { title: isBangla ? "রাজশাহী বোর্ড ২০২৩" : "Rajshahi Board 2023", description: isBangla ? "সমাধানসহ প্রশ্নপত্র" : "Question paper with solutions" },
                  { title: isBangla ? "চট্টগ্রাম বোর্ড ২০২৩" : "Chittagong Board 2023", description: isBangla ? "সমাধানসহ প্রশ্নপত্র" : "Question paper with solutions" }
                ].map((topic, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
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

            {/* SSC Exam Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "এসএসসি পরীক্ষার তথ্য" : "SSC Exam Info"}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSC;
