
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Target, GraduationCap, TrendingUp, CheckCircle } from 'lucide-react';

const Index = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-600/10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Books and learning"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  {isBangla ? 'একাডেমিক ইংরেজিতে দক্ষতা অর্জন করুন' : 'Master Academic English'}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {isBangla 
                  ? 'বাংলাদেশের শিক্ষার্থীদের জন্য একাডেমিক ইংরেজি শেখার সম্পূর্ণ প্ল্যাটফর্ম'
                  : 'The comprehensive LMS platform for academic English learning in Bangladesh'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to={isBangla ? "/bn/class-6-8" : "/class-6-8"}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isBangla ? 'আজই শিখা শুরু করুন' : 'Start Learning Today'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to={isBangla ? "/bn/resources" : "/resources"}
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {isBangla ? 'ফ্রি রিসোর্স' : 'Free Resources'}
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>{isBangla ? 'ফ্রি নিবন্ধন' : 'Free Registration'}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>{isBangla ? 'সার্টিফিকেট' : 'Certificates'}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning English"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-600">{isBangla ? 'সফল শিক্ষার্থী' : 'Success Stories'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: isBangla ? "১০,০০০+" : "10,000+", label: isBangla ? "শিক্ষার্থী" : "Students" },
              { icon: BookOpen, value: isBangla ? "৫০০+" : "500+", label: isBangla ? "পাঠ" : "Lessons" },
              { icon: Award, value: "95%", label: isBangla ? "সফলতার হার" : "Success Rate" },
              { icon: Target, value: isBangla ? "৫০+" : "50+", label: isBangla ? "বিষয় কভার" : "Topics Covered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isBangla ? 'আপনার স্তর অনুযায়ী কোর্স বেছে নিন' : 'Choose Your Course Level'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isBangla 
                ? 'ক্লাস ৬ থেকে বিশ্ববিদ্যালয় ভর্তি পর্যন্ত সম্পূর্ণ শিক্ষা সহায়তা'
                : 'Complete educational support from Class 6 to university admission'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: isBangla ? 'ক্লাস ৬-৮' : 'Class 6-8',
                description: isBangla ? 'মৌলিক ব্যাকরণ ও শব্দভাণ্ডার' : 'Basic grammar & vocabulary foundation',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                href: isBangla ? '/bn/class-6-8' : '/class-6-8',
                students: '2,500+',
                lessons: '45'
              },
              {
                title: isBangla ? 'এসএসসি (৯-১০)' : 'SSC (9-10)',
                description: isBangla ? 'Narration, Voice এবং বোর্ড প্রস্তুতি' : 'Narration, Voice & board preparation',
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                href: isBangla ? '/bn/ssc' : '/ssc',
                students: '4,200+',
                lessons: '60'
              },
              {
                title: isBangla ? 'এইচএসসি (১১-১২)' : 'HSC (11-12)',
                description: isBangla ? 'উন্নত ব্যাকরণ ও সাহিত্য' : 'Advanced grammar & literature',
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                href: isBangla ? '/bn/hsc' : '/hsc',
                students: '3,800+',
                lessons: '75'
              },
              {
                title: isBangla ? 'ভর্তি পরীক্ষা' : 'Admission Tests',
                description: isBangla ? 'ঢাবি, বুয়েট, মেডিকেল প্রস্তুতি' : 'DU, BUET, Medical preparation',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                href: isBangla ? '/bn/admission' : '/admission',
                students: '5,600+',
                lessons: '90'
              },
              {
                title: isBangla ? 'শিক্ষকদের জন্য' : 'For Teachers',
                description: isBangla ? 'শিক্ষাদান কৌশল ও উপকরণ' : 'Teaching strategies & resources',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                href: isBangla ? '/bn/teachers' : '/teachers',
                students: '1,200+',
                lessons: '40'
              },
              {
                title: isBangla ? 'রিসোর্স লাইব্রেরি' : 'Resource Library',
                description: isBangla ? 'PDF, ওয়ার্কশিট ও অডিও' : 'PDFs, worksheets & audio files',
                image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                href: isBangla ? '/bn/resources' : '/resources',
                students: '8,900+',
                lessons: '200+'
              }
            ].map((course, index) => (
              <Link key={index} to={course.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students}
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {course.lessons}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                    <div className="mt-4 flex items-center text-teal-600 font-medium">
                      {isBangla ? 'শুরু করুন' : 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isBangla ? 'কেন AcademicEnglishBD বেছে নেবেন?' : 'Why Choose AcademicEnglishBD?'}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: GraduationCap,
                    title: isBangla ? 'বিশেষজ্ঞ প্রশিক্ষক' : 'Expert Instructors',
                    description: isBangla ? 'অভিজ্ঞ শিক্ষকদের থেকে শিখুন' : 'Learn from experienced teachers'
                  },
                  {
                    icon: TrendingUp,
                    title: isBangla ? 'প্রমাণিত ফলাফল' : 'Proven Results',
                    description: isBangla ? '৯৫% শিক্ষার্থী গ্রেড উন্নতি করে' : '95% students improve grades'
                  },
                  {
                    icon: BookOpen,
                    title: isBangla ? 'সম্পূর্ণ পাঠ্যক্রম' : 'Complete Curriculum',
                    description: isBangla ? 'সব বোর্ড ও পরীক্ষার জন্য' : 'For all boards and exams'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Learning environment"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isBangla ? 'ইংরেজি যাত্রা শুরু করতে প্রস্তুত?' : 'Ready to Start Your English Journey?'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {isBangla ? 'বাংলাদেশের হাজারো সফল শিক্ষার্থীর সাথে যুক্ত হন' : 'Join thousands of successful students in Bangladesh'}
          </p>
          <Link
            to={isBangla ? "/bn/login" : "/login"}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {isBangla ? 'এখনই শুরু করুন' : 'Get Started Now'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
