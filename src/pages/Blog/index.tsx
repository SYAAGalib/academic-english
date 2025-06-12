
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowRight, BookOpen, Users, Heart, MessageCircle } from 'lucide-react';
import QuizBlock from '../../components/QuizBlock';
import WeeklyUpdateBox from '../../components/WeeklyUpdateBox';

const Blog: React.FC = () => {
  const location = useLocation();
  const isBangla = location.pathname.startsWith('/bn');

  const content = {
    en: {
      hero: {
        title: "English Learning Blog",
        subtitle: "Tips, strategies, and insights for mastering English in Bangladesh"
      },
      quiz: {
        question: "What is the best way to improve English writing skills?",
        options: ["Reading only", "Writing practice daily", "Grammar memorization", "Translation exercises"],
        correctAnswer: 1,
        explanation: "Daily writing practice with feedback is the most effective way to improve writing skills."
      }
    },
    bn: {
      hero: {
        title: "ইংরেজি শেখার ব্লগ",
        subtitle: "বাংলাদেশে ইংরেজিতে দক্ষতা অর্জনের জন্য টিপস, কৌশল এবং অন্তর্দৃষ্টি"
      },
      quiz: {
        question: "ইংরেজি লেখার দক্ষতা উন্নয়নের সবচেয়ে ভাল উপায় কী?",
        options: ["শুধু পড়া", "প্রতিদিন লেখার অনুশীলন", "ব্যাকরণ মুখস্থ করা", "অনুবাদ অনুশীলন"],
        correctAnswer: 1,
        explanation: "ফিডব্যাক সহ প্রতিদিন লেখার অনুশীলন লেখার দক্ষতা উন্নয়নের সবচেয়ে কার্যকর উপায়।"
      }
    }
  };

  const text = isBangla ? content.bn : content.en;

  const blogPosts = [
    {
      id: 1,
      title: isBangla ? "SSC ইংরেজি পরীক্ষার জন্য ১০ টি কার্যকর টিপস" : "10 Effective Tips for SSC English Exam",
      excerpt: isBangla 
        ? "SSC পরীক্ষায় ভাল ফলাফলের জন্য প্রয়োজনীয় কৌশল এবং টিপস জানুন।" 
        : "Learn essential strategies and tips for achieving good results in SSC exams.",
      author: isBangla ? "রহিম স্যার" : "Rahim Sir",
      date: "২০২৪-০৬-১০",
      readTime: isBangla ? "৮ মিনিট" : "8 min read",
      category: isBangla ? "পরীক্ষা প্রস্তুতি" : "Exam Prep",
      likes: 245,
      comments: 32,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: isBangla ? "ইংরেজি ব্যাকরণ শেখার সহজ উপায়" : "Easy Ways to Learn English Grammar",
      excerpt: isBangla 
        ? "ব্যাকরণ শেখাকে মজার এবং সহজ করে তোলার কার্যকর পদ্ধতি।" 
        : "Effective methods to make grammar learning fun and easy.",
      author: isBangla ? "ফাতিমা ম্যাডাম" : "Fatima Madam",
      date: "২০২৪-০৬-০৮",
      readTime: isBangla ? "৬ মিনিট" : "6 min read",
      category: isBangla ? "ব্যাকরণ" : "Grammar",
      likes: 189,
      comments: 24,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: isBangla ? "প্রতিদিন ইংরেজি শব্দভাণ্ডার বৃদ্ধির কৌশল" : "Daily English Vocabulary Building Techniques",
      excerpt: isBangla 
        ? "কিভাবে প্রতিদিন নতুন শব্দ শিখে আপনার ইংরেজি দক্ষতা বাড়াবেন।" 
        : "How to learn new words daily and enhance your English skills.",
      author: isBangla ? "করিম স্যার" : "Karim Sir",
      date: "২০২৪-০৬-০৫",
      readTime: isBangla ? "৫ মিনিট" : "5 min read",
      category: isBangla ? "শব্দভাণ্ডার" : "Vocabulary",
      likes: 156,
      comments: 18,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: isBangla ? "HSC ইংরেজি রচনা লেখার গাইড" : "HSC English Essay Writing Guide",
      excerpt: isBangla 
        ? "HSC পরীক্ষায় ভাল রচনা লেখার জন্য পদ্ধতিগত গাইড।" 
        : "A systematic guide to writing good essays for HSC exams.",
      author: isBangla ? "নাসির স্যার" : "Nasir Sir",
      date: "২০২৪-০৬-০৩",
      readTime: isBangla ? "১০ মিনিট" : "10 min read",
      category: isBangla ? "লেখা" : "Writing",
      likes: 298,
      comments: 45,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: isBangla ? "ইংরেজি শোনার দক্ষতা উন্নয়ন" : "Improving English Listening Skills",
      excerpt: isBangla 
        ? "ইংরেজি শোনার দক্ষতা বাড়ানোর জন্য ব্যবহারিক টিপস।" 
        : "Practical tips for enhancing your English listening abilities.",
      author: isBangla ? "সালমা ম্যাডাম" : "Salma Madam",
      date: "২০২৪-০৬-০১",
      readTime: isBangla ? "৭ মিনিট" : "7 min read",
      category: isBangla ? "দক্ষতা" : "Skills",
      likes: 167,
      comments: 28,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: isBangla ? "ভর্তি পরীক্ষার ইংরেজি প্রস্তুতি" : "English Preparation for Admission Tests",
      excerpt: isBangla 
        ? "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ইংরেজি অংশের প্রস্তুতি নিন।" 
        : "Prepare for the English section of university admission tests.",
      author: isBangla ? "তানভীর স্যার" : "Tanvir Sir",
      date: "২০২৪-০৫-২৮",
      readTime: isBangla ? "১২ মিনিট" : "12 min read",
      category: isBangla ? "ভর্তি পরীক্ষা" : "Admission",
      likes: 324,
      comments: 52,
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    { name: isBangla ? "পরীক্ষা প্রস্তুতি" : "Exam Prep", count: 15 },
    { name: isBangla ? "ব্যাকরণ" : "Grammar", count: 22 },
    { name: isBangla ? "শব্দভাণ্ডার" : "Vocabulary", count: 18 },
    { name: isBangla ? "লেখা" : "Writing", count: 12 },
    { name: isBangla ? "দক্ষতা" : "Skills", count: 20 },
    { name: isBangla ? "ভর্তি পরীক্ষা" : "Admission", count: 8 }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-600/10"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Blog and learning content"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {text.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>100+ {isBangla ? 'আর্টিকেল' : 'Articles'}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>25K+ {isBangla ? 'পাঠক' : 'Readers'}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{isBangla ? 'সাপ্তাহিক আপডেট' : 'Weekly Updates'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                    {isBangla ? "ফিচার্ড" : "Featured"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
                    <span>{isBangla ? "পড়ুন" : "Read More"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Regular Posts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isBangla ? "সাম্প্রতিক পোস্ট" : "Recent Posts"}
              </h2>
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                          {isBangla ? "পড়ুন →" : "Read →"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Quiz */}
            <QuizBlock {...text.quiz} />
            
            {/* Weekly Updates */}
            <WeeklyUpdateBox isBangla={isBangla} />

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "বিভাগসমূহ" : "Categories"}
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 hover:text-orange-600 cursor-pointer transition-colors">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "জনপ্রিয় পোস্ট" : "Popular Posts"}
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="flex space-x-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-orange-600 cursor-pointer transition-colors">
                        {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isBangla ? "নিউজলেটার" : "Newsletter"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {isBangla 
                  ? "সাপ্তাহিক ইংরেজি শেখার টিপস পেতে সাবস্ক্রাইব করুন।" 
                  : "Subscribe to get weekly English learning tips."
                }
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder={isBangla ? "আপনার ইমেইল ঠিকানা" : "Your email address"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                />
                <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                  {isBangla ? "সাবস্ক্রাইব করুন" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
