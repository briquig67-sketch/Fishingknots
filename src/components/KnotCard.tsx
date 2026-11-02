import React from 'react';
import { Knot } from '../types';
import { Star, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { CompletedKnotSvg } from './CompletedKnotSvg';

interface KnotCardProps {
  knot: Knot;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectKnot: (knot: Knot) => void;
}

export const KnotCard: React.FC<KnotCardProps> = ({
  knot,
  isFavorite,
  onToggleFavorite,
  onSelectKnot,
}) => {
  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Medium':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Advanced':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div
      onClick={() => onSelectKnot(knot)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0b1428] border border-slate-800 hover:border-teal-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/40 cursor-pointer overflow-hidden active:scale-[0.99] touch-manipulation"
    >
      {/* Top Banner & Badges */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-wide uppercase ${getDifficultyBadge(
                  knot.difficulty
                )}`}
              >
                {knot.difficulty}
              </span>
              <span className="text-[11px] text-teal-400 font-semibold px-2 py-0.5 rounded-full bg-teal-950/60 border border-teal-800/40">
                {knot.purposeCategory}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
              {knot.name}
            </h3>
          </div>

          {/* Favorite Toggle Button */}
          <button
            onClick={(e) => onToggleFavorite(knot.id, e)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-850 active:scale-90 transition border border-slate-800 shrink-0"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite
                  ? 'fill-rose-500 text-rose-500 filter drop-shadow'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            />
          </button>
        </div>

        {/* Short Purpose Text */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
          {knot.purpose}
        </p>

        {/* Mini Preview SVG of Completed Knot */}
        <div className="mt-1 rounded-xl overflow-hidden border border-slate-800/90 group-hover:border-teal-500/40 transition">
          <CompletedKnotSvg knotId={knot.id} className="w-full h-32" showLabels={false} />
        </div>

        {/* Suitable Lines Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mt-1">
          {knot.suitableLines.map((line) => (
            <span
              key={line}
              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Knot Stats & Action */}
      <div className="px-4 py-3 bg-[#081022] border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-slate-300">
          <span className="flex items-center gap-1 font-semibold text-teal-300" title="Knot breaking strength">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            {knot.strengthRating}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">{knot.steps.length} Steps</span>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-teal-400 group-hover:translate-x-0.5 transition-transform">
          <span>Tie Knot</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
