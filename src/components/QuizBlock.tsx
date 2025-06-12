
import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface QuizBlockProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  timeLimit?: number;
}

const QuizBlock: React.FC<QuizBlockProps> = ({ question, options, correctAnswer, explanation, timeLimit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit || 60);

  const handleAnswerSelect = (optionIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(optionIndex);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(timeLimit || 60);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Quick Quiz</h3>
        {timeLimit && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{timeLeft}s</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <p className="text-gray-800 text-lg leading-relaxed">{question}</p>
      </div>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
              showResult
                ? index === correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : index === selectedAnswer && index !== correctAnswer
                  ? 'border-red-500 bg-red-50 text-red-800'
                  : 'border-gray-200 bg-gray-50 text-gray-600'
                : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50 cursor-pointer'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex-1">{option}</span>
              {showResult && (
                <div className="ml-4">
                  {index === correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : index === selectedAnswer && index !== correctAnswer ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : null}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center space-x-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            {explanation && (
              <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {explanation}
              </p>
            )}
          </div>

          <button
            onClick={resetQuiz}
            className="w-full px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizBlock;
