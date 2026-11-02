import React, { useState } from 'react';
import { X, Anchor, ChevronDown, CheckCircle2, Eye } from 'lucide-react';
import { KNOTS_DATA } from '../data/knotsData';
import { KnotChartDiagram } from './KnotChartDiagram';
import { Knot } from '../types';

interface WallChartModalProps {
  onClose: () => void;
  onSelectKnot: (knot: Knot) => void;
}

export const WallChartModal: React.FC<WallChartModalProps> = ({ onClose, onSelectKnot }) => {
  const [selectedKnotId, setSelectedKnotId] = useState(KNOTS_DATA[0].id);
  const activeKnot = KNOTS_DATA.find((k) => k.id === selectedKnotId) || KNOTS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#091124] border border-slate-700 shadow-2xl overflow-hidden my-2 sm:my-6 flex flex-col text-slate-100">
        
        {/* Poster Header Bar (Styled like the red/blue Ande Fisherman's Knot Chart banner) */}
        <div className="bg-[#0284c7] px-4 sm:px-6 py-4 text-white border-b border-sky-600 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 p-2 flex items-center justify-center">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-none text-white drop-shadow-sm">
                Fisherman's Knots Quick-Reference Chart
              </h2>
              <p className="text-xs text-sky-100 font-semibold tracking-wide uppercase pt-1">
                Detailed Guide to Pro-Fisherman's Knot-Tying
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Knot Selector Strip */}
        <div className="px-4 py-2.5 bg-[#0a1530] border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
          {KNOTS_DATA.map((k) => {
            const isSelected = k.id === selectedKnotId;
            return (
              <button
                key={k.id}
                onClick={() => setSelectedKnotId(k.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition border ${
                  isSelected
                    ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                    : 'bg-[#0f1d38] text-slate-300 border-slate-700 hover:bg-[#16274a]'
                }`}
              >
                {k.name}
              </button>
            );
          })}
        </div>

        {/* Poster Card Body */}
        <div className="p-4 sm:p-6 space-y-4 bg-[#0a1224] overflow-y-auto">
          {/* Header Panel for Active Knot */}
          <div className="bg-white rounded-xl p-4 border border-slate-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wide">
                  {activeKnot.purposeCategory}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Strength: <strong className="text-slate-800">{activeKnot.strengthRating}</strong>
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mt-1">
                {activeKnot.name}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {activeKnot.purpose}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectKnot(activeKnot);
              }}
              className="px-4 py-2 rounded-xl bg-[#2e7d32] hover:bg-[#256829] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm self-start sm:self-auto"
            >
              Open Interactive Animator
            </button>
          </div>

          {/* Full Chart Progression Drawing */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-300 p-2 sm:p-4 shadow-sm min-h-[420px] flex items-center justify-center">
            <KnotChartDiagram
              knot={activeKnot}
              activeStepIndex={activeKnot.steps.length - 1}
              viewMode="chart"
            />
          </div>

          {/* Written Instructions Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-[#0e1c3a] rounded-xl p-4 border border-slate-800 space-y-2">
              <span className="font-bold text-teal-300 uppercase tracking-wider block">
                Numbered Step Breakdown
              </span>
              <ol className="space-y-1.5 text-slate-300 list-decimal list-inside leading-relaxed">
                {activeKnot.steps.map((st) => (
                  <li key={st.stepNumber}>
                    <strong className="text-white">{st.title}:</strong> {st.instruction}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#0e1c3a] rounded-xl p-4 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-300 uppercase tracking-wider block">
                Pro Tying Instructions &amp; Line Notes
              </span>
              <p className="text-slate-300 leading-relaxed">
                {activeKnot.lineSuitabilityNotes}
              </p>
              {activeKnot.proTips.length > 0 && (
                <div className="pt-2 border-t border-slate-800 text-slate-300">
                  <strong className="text-amber-400">Pro Tip: </strong>
                  {activeKnot.proTips[0]}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0a1530] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Complete 12-Knot Illustrated Quick-Reference Chart</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
          >
            Close Chart
          </button>
        </div>
      </div>
    </div>
  );
};
