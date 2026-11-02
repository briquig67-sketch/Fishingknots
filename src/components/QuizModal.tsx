import React, { useState } from 'react';
import { X, HelpCircle, CheckCircle2, AlertCircle, RotateCcw, Trophy, ArrowRight } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    question: 'Which knot provides nearly 100% breaking strength and is renowned as the safest choice for slippery braided superlines?',
    options: ['Palomar Knot', 'Blood Knot', 'Arbor Knot', 'Dropper Loop'],
    correctIndex: 0,
    explanation: 'The Palomar Knot is virtually impossible to slip on braided lines because the line is doubled through the eye and clamped around the hook body.',
  },
  {
    question: 'You want your artificial crankbait or topwater lure to have maximum swimming action and articulation. Which knot should you tie?',
    options: ['Snell Knot', 'Non-Slip Mono Loop Knot', 'Arbor Knot', 'Improved Clinch Knot'],
    correctIndex: 1,
    explanation: 'The Non-Slip Mono Loop Knot leaves an open, non-cinching loop through the lure eye, letting the lure swim with natural wobble.',
  },
  {
    question: 'What is the gold-standard slim line-to-line knot for connecting braided mainline to fluorocarbon leader to glide through micro rod guides?',
    options: ['FG Knot', 'Palomar Knot', 'Arbor Knot', 'Dropper Loop'],
    correctIndex: 0,
    explanation: 'The FG Knot (Fine Gripping Knot) weaves braid directly onto the single leader strand, producing the slimmest connection known without doubled leader bulk.',
  },
  {
    question: 'When tying a Snell Knot on a live bait or circle hook, which way MUST the leader enter the hook eye for proper hookset leverage?',
    options: ['From the back of the shank', 'From the front (hook point side)', 'It does not matter', 'Through the barb'],
    correctIndex: 1,
    explanation: 'Entering the hook eye from the front (point side) ensures that when line tension is applied, the hook pivots inward into the fish\'s jaw.',
  },
  {
    question: 'Which knot is specifically designed to create a standing 90-degree branch loop for bottom rigs (like fluke/sea bass high-low rigs)?',
    options: ['Blood Knot', 'Dropper Loop', 'Double Uni Knot', 'Improved Clinch Knot'],
    correctIndex: 1,
    explanation: 'The Dropper Loop creates a standing loop projecting perpendicular to the mainline without requiring any cut or joined lines.',
  },
  {
    question: 'What is the primary knot used to anchor fresh backing or mainline securely to a reel\'s spool arbor?',
    options: ['Arbor Knot', 'Palomar Knot', 'Blood Knot', 'FG Knot'],
    correctIndex: 0,
    explanation: 'The Arbor Knot creates a sliding loop around the reel spool hub locked by a jammed overhand stopper knot.',
  },
];

interface QuizModalProps {
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const q = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === q.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#091124] border border-slate-700 shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#0a1530] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg font-bold text-white">Knot Knowledge Quiz</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {!quizFinished ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-teal-400">Score: {score}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-400 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt, idx) => {
                  let btnStyle = 'bg-[#0b1630] border-slate-800 text-slate-200 hover:bg-[#0e1d40]';
                  if (selectedOption === idx) {
                    btnStyle = 'bg-teal-950/60 border-teal-500 text-teal-200 ring-1 ring-teal-500';
                  }
                  if (isSubmitted) {
                    if (idx === q.correctIndex) {
                      btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500';
                    } else if (selectedOption === idx) {
                      btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    } else {
                      btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isSubmitted}
                      className={`w-full p-3.5 rounded-xl text-left text-sm font-semibold border transition flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && idx === q.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {isSubmitted && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-teal-300 block mb-1">
                    {selectedOption === q.correctIndex ? '✓ Correct!' : '✗ Not Quite'}
                  </strong>
                  {q.explanation}
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex justify-end">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${
                      selectedOption !== null
                        ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 active:scale-95'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold text-sm transition active:scale-95"
                  >
                    <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Quiz Completed!</h3>
              <p className="text-sm text-slate-300">
                You scored <strong className="text-teal-300 text-lg">{score}</strong> out of{' '}
                <strong className="text-white text-lg">{QUIZ_QUESTIONS.length}</strong>.
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {score === QUIZ_QUESTIONS.length
                  ? 'Master Angler! You have mastered fishing knot fundamentals.'
                  : score >= 4
                  ? 'Great job! You know your knots well.'
                  : 'Good practice! Review the step-by-step knot guides to sharpen your skills.'}
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition border border-slate-700"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition"
                >
                  Back to Knots
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
