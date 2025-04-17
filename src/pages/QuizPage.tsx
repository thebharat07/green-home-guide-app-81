
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const QuizPage = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      question: "Which of these items should NOT go in your compost bin?",
      options: [
        "Banana peels",
        "Coffee grounds",
        "Cooked meat",
        "Dry leaves"
      ],
      correctAnswer: 2,
      explanation: "Cooked meat can attract pests and create odor issues in home compost systems."
    },
    {
      question: "Which of these is recyclable?",
      options: [
        "Greasy pizza box",
        "Clean aluminum can",
        "Plastic grocery bag",
        "Styrofoam cup"
      ],
      correctAnswer: 1,
      explanation: "Clean aluminum cans are highly recyclable. Plastic bags need special collection, pizza boxes with grease are contaminated, and many facilities don't accept styrofoam."
    },
    {
      question: "What should you do with batteries before disposal?",
      options: [
        "Throw them in regular trash",
        "Take them to a special collection point",
        "Puncture them first",
        "Soak them in water"
      ],
      correctAnswer: 1,
      explanation: "Batteries contain hazardous materials and should be taken to special collection points for proper disposal."
    },
    {
      question: "What's the best way to reduce waste?",
      options: [
        "Recycle everything",
        "Compost everything",
        "Reduce consumption and reuse items",
        "Incinerate waste"
      ],
      correctAnswer: 2,
      explanation: "The waste hierarchy prioritizes reducing consumption and reusing items before recycling or disposal."
    },
    {
      question: "Which of these is hazardous waste?",
      options: [
        "Newspaper",
        "Glass bottle",
        "Paint thinner",
        "Cotton t-shirt"
      ],
      correctAnswer: 2,
      explanation: "Paint thinner contains chemicals that can harm the environment if not disposed of properly."
    }
  ];

  const handleOptionSelect = (index: number) => {
    if (showExplanation) return;
    
    setSelectedOption(index);
    setShowExplanation(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container px-4 py-6">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={18} className="mr-1" />
            <span>{t.common.back}</span>
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-primary mb-2">{t.navigation.quiz}</h1>
          <p className="text-gray-600">See how much you know about proper waste management.</p>
        </motion.div>

        {!quizCompleted ? (
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                Score: {score}
              </span>
            </div>
            
            <h2 className="text-xl font-medium mb-4">{currentQ.question}</h2>
            
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedOption === index
                      ? index === currentQ.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-primary hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showExplanation}
                  whileHover={!showExplanation ? { scale: 1.01 } : {}}
                  whileTap={!showExplanation ? { scale: 0.99 } : {}}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showExplanation && index === selectedOption && (
                      <span>
                        {index === currentQ.correctAnswer ? (
                          <Check size={20} className="text-green-500" />
                        ) : (
                          <X size={20} className="text-red-500" />
                        )}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
              >
                <h3 className="font-medium mb-1">Explanation:</h3>
                <p className="text-sm text-gray-700">{currentQ.explanation}</p>
              </motion.div>
            )}
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button className="w-full" onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? t.common.next : t.common.finish}
                </Button>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
            <div className="text-5xl font-bold my-6 text-primary">
              {score}/{questions.length}
            </div>
            <p className="mb-6 text-gray-600">
              {score === questions.length
                ? "Perfect score! You're a waste management expert!"
                : score >= questions.length / 2
                ? "Good job! You know quite a bit about waste management."
                : "Keep learning about proper waste management techniques!"}
            </p>
            <Button onClick={restartQuiz}>Try Again</Button>
          </motion.div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default QuizPage;
