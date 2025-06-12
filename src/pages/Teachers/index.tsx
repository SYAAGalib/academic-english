
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, Users, Download, Star, Target, Award, FileText, Video, Calendar, MessageCircle } from 'lucide-react';
import LessonCard from '../../components/LessonCard';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const Teachers: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "Resources for English Teachers",
        subtitle: "Comprehensive teaching materials, strategies, and resources for English educators in Bangladesh"
      },
      sections: {
        materials: "Teaching Materials",
        strategies: "Teaching Strategies",
        assessment: "Assessment Tools",
        training: "Professional Development"
      },
      quiz: {
        question: "What is the most effective way to teach grammar to beginners?",
        options: ["Memorizing rules", "Through context and examples", "Direct translation", "Grammar drills only"],
        correctAnswer: 1,
        explanation: "Teaching grammar through context and examples helps students understand practical usage."
      }
    },
    bn: {
      hero: {
        title: "ইংরেজি শিক্ষকদের জন্য সম্পদ",
        subtitle: "বাংলাদেশের ইংরেজি শিক্ষকদের জন্য বিস্তৃত শিক্ষণ উপকরণ, কৌশল এবং সম্পদ"
      },
      sections: {
        materials: "শিক্ষণ উপকরণ",
        strategies: "শিক্ষাদান কৌশল",
        assessment: "মূল্যায়ন সরঞ্জাম",
        training: "পেশাগত উন্নয়ন"
      },
      quiz: {
        question: "নতুনদের ব্যাকরণ শেখানোর সবচেয়ে কার্যকর উপায় কী?",
        options: ["নিয়ম মুখস্থ করা", "প্রসঙ্গ ও উদাহরণের মাধ্যমে", "সরাসরি অনুবাদ", "শুধু ব্যাকরণ অনুশীলন"],
        correctAnswer: 1,
        explanation: "প্রসঙ্গ ও উদাহরণের মাধ্যমে ব্যাকরণ শেখানো শিক্ষার্থীদের ব্যবহারিক প্রয়োগ বুঝতে সাহায্য করে।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const teachingResources = [
    {
      title: isBangla ? "ক্লাস ৬-৮ পাঠ পরিকল্পনা" : "Class 6-8 Lesson Plans",
      description: isBangla ? "সাপ্তাহিক পাঠ পরিকল্পনা এবং কার্যক্রম" : "Weekly lesson plans and activities",
      duration: isBangla ? "৫০+ পরিকল্পনা" : "50+ Plans",
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "৮০০+ শিক্ষক" : "800+ Teachers",
      rating: "4.8",
      category: isBangla ? "পাঠ পরিকল্পনা" : "Lesson Plans",
      image: "https://images.unsplash.com/photo-1606140849200-e379bfdd1e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "ইন্টারঅ্যাক্টিভ গ্রামার ওয়ার্কশীট" : "Interactive Grammar Worksheets",
      description: isBangla ? "মুদ্রণযোগ্য ওয়ার্কশীট এবং কার্যকলাপ" : "Printable worksheets and activities",
      duration: isBangla ? "১০০+ শীট" : "100+ Sheets",
      difficulty: isBangla ? "সব স্তর" : "All Levels",
      studentsCount: isBangla ? "১,৫০০+ শিক্ষক" : "1,500+ Teachers",
      rating: "4.9",
      category: isBangla ? "ওয়ার্কশীট" : "Worksheets",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "SSC বোর্ড পরীক্ষার কৌশল" : "SSC Board Exam Strategies",
      description: isBangla ? "পরীক্ষার প্রস্তুতি এবং মূল্যায়ন গাইড" : "Exam preparation and assessment guides",
      duration: isBangla ? "৩০ ভিডিও" : "30 Videos",
      difficulty: isBangla ? "মধ্যম" : "Intermediate",
      studentsCount: isBangla ? "৬০০+ শিক্ষক" : "600+ Teachers",
      rating: "4.7",
      category: isBangla ? "পরীক্ষা প্রস্তুতি" : "Exam Prep",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: isBangla ? "শ্রেণীকক্ষ ব্যবস্থাপনা টিপস" : "Classroom Management Tips",
      description: isBangla ? "কার্যকর শ্রেণীকক্ষ ব্যবস্থাপনার কৌশল" : "Effective classroom management techniques",
      duration: isBangla ? "২০ গাইড" : "20 Guides",
      difficulty: isBangla ? "সহজ" : "Beginner",
      studentsCount: isBangla ? "১,২০০+ শিক্ষক" : "1,200+ Teachers",
      rating: "4.6",
      category: isBangla ? "ব্যবস্থাপনা" : "Management",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Teachers in classroom"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>3,500+ {isBangla ? 'শিক্ষক' : 'Teachers'}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <span>200+ {isBangla ? 'সম্পদ' : 'Resources'}</span>
              </div>
              <div className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                <span>50K+ {isBangla ? 'ডাউনলোড' : 'Downloads'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Teaching Features */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "শিক্ষকদের জন্য বিশেষ সুবিধা" : "Special Features for Teachers"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <FileText className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.materials}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "ওয়ার্কশীট, পাঠ পরিকল্পনা, কার্যকলাপ" : "Worksheets, lesson plans, activities"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Video className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.strategies}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "কার্যকর শিক্ষাদান পদ্ধতি" : "Effective teaching methodologies"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Target className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.assessment}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "মূল্যায়ন টুলস এবং রুব্রিক" : "Assessment tools and rubrics"}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Award className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.sections.training}</h3>
                  <p className="text-gray-600 text-sm">
                    {isBangla ? "প্রশিক্ষণ এবং দক্ষতা উন্নয়ন" : "Training and skill development"}
                  </p>
                </div>
              </div>
            </div>

            {/* Teaching Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBangla ? "জনপ্রিয় শিক্ষণ সম্পদ" : "Popular Teaching Resources"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachingResources.map((resource, index) => (
                  <LessonCard key={index} {...resource} />
                ))}
              </div>
            </div>

            {/* Teaching Community */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isBangla ? "শিক্ষক সম্প্রদায়" : "Teacher Community"}
              </h3>
              <p className="text-gray-600 mb-6">
                {isBangla 
                  ? "অন্যান্য শিক্ষকদের সাথে যোগ দিন, অভিজ্ঞতা শেয়ার করুন এবং একসাথে শিখুন।" 
                  : "Join other teachers, share experiences, and learn together."
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">
                    {isBangla ? "আলোচনা ফোরাম" : "Discussion Forums"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isBangla ? "শিক্ষকদের আলোচনা" : "Teacher discussions"}
                  </p>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">
                    {isBangla ? "অনলাইন ওয়ার্কশপ" : "Online Workshops"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isBangla ? "মাসিক প্রশিক্ষণ" : "Monthly training"}
                  </p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">
                    {isBangla ? "সার্টিফিকেশন" : "Certification"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isBangla ? "পেশাগত সার্টিফিকেট" : "Professional certificates"}
                  </p>
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

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "শিক্ষক পরিসংখ্যান" : "Teacher Statistics"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "নিবন্ধিত শিক্ষক" : "Registered Teachers"}</span>
                  <span className="font-semibold text-gray-900">3,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "মোট সম্পদ" : "Total Resources"}</span>
                  <span className="font-semibold text-gray-900">200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "মাসিক ডাউনলোড" : "Monthly Downloads"}</span>
                  <span className="font-semibold text-gray-900">15K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isBangla ? "গড় রেটিং" : "Average Rating"}</span>
                  <span className="font-semibold text-gray-900">4.8/5</span>
                </div>
              </div>
            </div>

            {/* Resource Categories */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "সম্পদের ধরন" : "Resource Categories"}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{isBangla ? "পাঠ পরিকল্পনা" : "Lesson Plans"}</span>
                  <span className="text-sm font-medium text-purple-600">85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{isBangla ? "ওয়ার্কশীট" : "Worksheets"}</span>
                  <span className="text-sm font-medium text-purple-600">120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{isBangla ? "মূল্যায়ন টুলস" : "Assessment Tools"}</span>
                  <span className="text-sm font-medium text-purple-600">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{isBangla ? "প্রশিক্ষণ ভিডিও" : "Training Videos"}</span>
                  <span className="text-sm font-medium text-purple-600">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
