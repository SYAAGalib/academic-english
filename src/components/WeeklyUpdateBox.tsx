
import React from 'react';
import { Calendar, Bell, ArrowRight } from 'lucide-react';

interface WeeklyUpdateBoxProps {
  isBangla?: boolean;
}

const WeeklyUpdateBox: React.FC<WeeklyUpdateBoxProps> = ({ isBangla = false }) => {
  const content = {
    en: {
      title: "Weekly Updates",
      subtitle: "New content every Sunday!",
      description: "Get fresh lessons, quizzes, and study materials delivered weekly.",
      nextUpdate: "Next Update: This Sunday",
      buttonText: "Subscribe for Updates"
    },
    bn: {
      title: "সাপ্তাহিক আপডেট",
      subtitle: "প্রতি রবিবার নতুন কন্টেন্ট!",
      description: "সাপ্তাহিক নতুন পাঠ, কুইজ এবং অধ্যয়ন উপকরণ পান।",
      nextUpdate: "পরবর্তী আপডেট: এই রবিবার",
      buttonText: "আপডেটের জন্য সাবস্ক্রাইব করুন"
    }
  };

  const text = isBangla ? content.bn : content.en;

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-lg p-6 shadow-md">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {text.title}
          </h3>
          <p className="text-teal-700 font-medium mb-2">
            {text.subtitle}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {text.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Bell className="h-4 w-4" />
              <span>{text.nextUpdate}</span>
            </div>
            <button className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group">
              <span>{text.buttonText}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyUpdateBox;
