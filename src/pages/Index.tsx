
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Target } from 'lucide-react';

const Index = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                {isBangla ? 'একাডেমিক ইংরেজিতে দক্ষতা অর্জন করুন' : 'Master Academic English'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {isBangla 
                ? 'বাংলাদেশের শিক্ষার্থীদের জন্য একাডেমিক ইংরেজি শেখার সম্পূর্ণ প্ল্যাটফর্ম'
                : 'The comprehensive platform for academic English learning in Bangladesh'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                to="#"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isBangla ? 'আজই শিখা শুরু করুন' : 'Start Learning Today'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {isBangla ? 'কোর্স দেখুন' : 'Explore Courses'}
              </Link>
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isBangla ? 'কেন AcademicEnglishBD বেছে নেবেন?' : 'Why Choose AcademicEnglishBD?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isBangla 
                ? 'বাংলাদেশী শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা একাডেমিক ইংরেজি শিক্ষা'
                : 'Comprehensive academic English learning designed for Bangladeshi students'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: isBangla ? 'সম্পূর্ণ পাঠ্যক্রম' : 'Comprehensive Curriculum',
                description: isBangla ? 'ক্লাস ৬ থেকে বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি পর্যন্ত সব কিছু।' : 'From Class 6 to university admission preparation, we cover everything.'
              },
              {
                icon: Users,
                title: isBangla ? 'দক্ষ শিক্ষকমণ্ডলী' : 'Expert Instructors',
                description: isBangla ? 'বাংলাদেশের শিক্ষা ব্যবস্থা বুঝেন এমন অভিজ্ঞ শিক্ষকদের থেকে শিখুন।' : 'Learn from experienced teachers who understand Bangladeshi education system.'
              },
              {
                icon: Award,
                title: isBangla ? 'প্রমাণিত ফলাফল' : 'Proven Results',
                description: isBangla ? 'আমাদের ৯৫% শিক্ষার্থী ৩ মাসের মধ্যে ইংরেজি গ্রেড উন্নতি করে।' : '95% of our students improve their English grades within 3 months.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
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
