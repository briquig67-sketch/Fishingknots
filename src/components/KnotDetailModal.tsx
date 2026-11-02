import React, { useState, useEffect } from 'react';
import { Knot } from '../types';
import {
  ArrowLeft,
  Tv,
  Settings,
  Heart,
  Award,
  CheckCircle2,
  Lightbulb,
  ThumbsUp,
  AlertTriangle,
  Layers,
  X
} from 'lucide-react';
import { KnotSvgPlayer } from './KnotSvgPlayer';

interface KnotDetailModalProps {
  knot: Knot;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
  isMastered: boolean;
  onToggleMastered: (id: string) => void;
}

export const KnotDetailModal: React.FC<KnotDetailModalProps> = ({
  knot,
  isFavorite,
  onToggleFavorite,
  onClose,
  isMastered,
  onToggleMastered,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#091124] border border-slate-700 shadow-2xl overflow-hidden my-2 sm:my-6 flex flex-col text-slate-100">
        
        {/* Android Top AppBar (Matches the turquoise/teal app bar in uploaded screenshot) */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#00acc1] text-white shadow-md">
          {/* Back button + Knot Title + Subtitle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 -ml-1 rounded-full hover:bg-black/10 active:bg-black/20 transition text-white"
              aria-label="Back to knots"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <div>
              <h2 className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-white">
                {knot.name}
              </h2>
              <p className="text-[11px] text-teal-100 font-medium">
                Fishing Knots Guide
              </p>
            </div>
          </div>

          {/* Right Action Icons (TV icon, Favorite, Close - exactly like Android app bar) */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleFavorite(knot.id)}
              className="p-2 rounded-full hover:bg-black/10 active:scale-90 transition text-white"
              title="Add to Favorites"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? 'fill-rose-300 text-rose-200' : 'text-white'
                }`}
              />
            </button>

            <button
              onClick={() => onToggleMastered(knot.id)}
              className="p-2 rounded-full hover:bg-black/10 active:scale-90 transition text-white"
              title="Mark as Mastered"
            >
              <Award className={`w-5 h-5 ${isMastered ? 'text-amber-300' : 'text-white'}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 active:scale-90 transition text-white"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-3 sm:p-5 md:p-6 space-y-6">
          {/* 1. The Knot Viewer Component (White canvas, 3D cord style, controls) */}
          <KnotSvgPlayer
            knot={knot}
            initialStep={activeStepIndex}
            onStepChange={setActiveStepIndex}
          />

          {/* 2. Knot Purpose and Suitable Lines */}
          <div className="bg-[#0c1630] rounded-xl p-4 sm:p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                {knot.purposeCategory}
              </span>
              <span className="text-xs text-slate-400">
                Difficulty: <strong className="text-teal-300">{knot.difficulty}</strong> ({knot.difficultyScore}/5)
              </span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              <strong className="text-teal-300">What it is used for: </strong>
              {knot.purpose}
            </p>

            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-xs font-bold text-slate-400 block mb-1.5">
                Suitable Line Compatibility:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {knot.lineSuitabilityNotes}
              </p>
            </div>
          </div>

          {/* 3. Step-by-Step Written Instructions (Clickable to jump animation) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              Step-by-Step Tying Sequence ({knot.steps.length} Steps)
            </h3>
            <div className="space-y-2">
              {knot.steps.map((st, index) => {
                const isSelected = activeStepIndex === index;
                return (
                  <div
                    key={st.stepNumber}
                    onClick={() => setActiveStepIndex(index)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-teal-950/50 border-teal-500/70 shadow-md ring-1 ring-teal-500/30'
                        : 'bg-[#0b1428] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-teal-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {st.stepNumber}
                    </span>
                    <div className="flex-1 space-y-0.5">
                      <h4 className={`text-xs font-bold ${isSelected ? 'text-teal-300' : 'text-slate-200'}`}>
                        {st.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {st.instruction}
                      </p>
                      {st.tip && (
                        <p className="text-[11px] text-amber-300/90 pt-1">
                          <strong className="text-amber-400">Tip:</strong> {st.tip}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Pro Tips */}
          {knot.proTips && knot.proTips.length > 0 && (
            <div className="bg-[#0e1b38] rounded-xl p-4 border border-amber-500/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Angler's Pro Tying Tips
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {knot.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-[#0b182e] rounded-xl p-3.5 border border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <ThumbsUp className="w-3.5 h-3.5" />
                Advantages
              </span>
              <ul className="space-y-1 text-slate-300">
                {knot.pros.map((p, i) => (
                  <li key={i}>✓ {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0b182e] rounded-xl p-3.5 border border-slate-800 space-y-1.5">
              <span className="font-bold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Considerations
              </span>
              <ul className="space-y-1 text-slate-300">
                {knot.cons.map((c, i) => (
                  <li key={i}>! {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action */}
        <div className="p-3.5 bg-[#0a1530] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Offline Angler Guide • 12 Essential Knots
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition active:scale-95"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
