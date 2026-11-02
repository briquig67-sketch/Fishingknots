import React from 'react';
import { X, Layers, Droplet, Zap, AlertCircle } from 'lucide-react';

interface LineReferenceModalProps {
  onClose: () => void;
}

export const LineReferenceModal: React.FC<LineReferenceModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#091124] border border-slate-700 shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col text-slate-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#0a1530] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Fishing Line Guide & Knot Matrix
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 text-sm text-slate-200 overflow-y-auto">
          {/* Golden Rules of Knot Tying */}
          <div className="bg-gradient-to-r from-teal-950/60 to-cyan-950/60 rounded-xl p-4 border border-teal-500/40 space-y-2">
            <h3 className="font-bold text-teal-300 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-cyan-400" />
              The 3 Golden Rules of Fishing Knots
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">1. Always Wet the Line:</strong> Saliva or lake water lubricates coils, preventing heat friction which drastically weakens nylon and fluorocarbon.
              </li>
              <li>
                <strong className="text-white">2. Draw Steady, Don't Jerk:</strong> Pull firmly with even pressure so wraps seat in parallel rather than jumping over each other.
              </li>
              <li>
                <strong className="text-white">3. Leave a Safe Tag Margin:</strong> Trim tag ends to 1/8" (3mm). Cutting too flush invites knot pull-through under sudden drag surge.
              </li>
            </ul>
          </div>

          {/* Line Types Comparison */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white">Line Characteristics & Knot Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Monofilament */}
              <div className="p-4 rounded-xl bg-[#0c1630] border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Nylon Monofilament
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High stretch (forgiving hooksets), floats well, highly supple. Excellent knot grip due to nylon elasticity.
                </p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <strong>Best Knots:</strong> Palomar, Improved Clinch, Uni, Blood Knot.
                </div>
              </div>

              {/* Fluorocarbon */}
              <div className="p-4 rounded-xl bg-[#0c1630] border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Fluorocarbon
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Near-invisible underwater (refractive index near water), abrasion resistant, fast sinking, stiffer. Prone to friction burn.
                </p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <strong>Best Knots:</strong> Palomar, Uni Knot, Triple Surgeon, Non-Slip Loop.
                </div>
              </div>

              {/* Braided Line */}
              <div className="p-4 rounded-xl bg-[#0c1630] border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Braided Superline
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero stretch, ultra-thin diameter for extreme sensitivity. Slick surface causes standard clinch knots to slip out.
                </p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <strong>Best Knots:</strong> Palomar (unbeatable), FG Knot, Double Uni (7-8 wraps).
                </div>
              </div>
            </div>
          </div>

          {/* Knot Selection Matrix Table */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white">Quick Reference Matrix</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#0c1938] text-teal-300 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Application</th>
                    <th className="p-3">Recommended Knot</th>
                    <th className="p-3">Strength</th>
                    <th className="p-3">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#081226]">
                  <tr>
                    <td className="p-3 font-semibold text-white">Braided Line to Hook/Lure</td>
                    <td className="p-3 text-teal-400 font-bold">Palomar Knot</td>
                    <td className="p-3">95-100%</td>
                    <td className="p-3 text-emerald-400">Easy</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Braid to Fluoro Leader (Guides)</td>
                    <td className="p-3 text-teal-400 font-bold">FG Knot</td>
                    <td className="p-3">98-100%</td>
                    <td className="p-3 text-rose-400">Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Braid to Mono Leader (Quick)</td>
                    <td className="p-3 text-teal-400 font-bold">Double Uni Knot</td>
                    <td className="p-3">90-95%</td>
                    <td className="p-3 text-amber-400">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Crankbait / Lure Articulation</td>
                    <td className="p-3 text-teal-400 font-bold">Loop Knot (Non-Slip)</td>
                    <td className="p-3">90-95%</td>
                    <td className="p-3 text-amber-400">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Live Bait / Circle Hook</td>
                    <td className="p-3 text-teal-400 font-bold">Snell Knot</td>
                    <td className="p-3">95-100%</td>
                    <td className="p-3 text-amber-400">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Multi-Hook Bottom Rig</td>
                    <td className="p-3 text-teal-400 font-bold">Dropper Loop</td>
                    <td className="p-3">80-85%</td>
                    <td className="p-3 text-rose-400">Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Reel Spool Anchor</td>
                    <td className="p-3 text-teal-400 font-bold">Arbor Knot</td>
                    <td className="p-3">90%</td>
                    <td className="p-3 text-emerald-400">Easy</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Fly Leader to Tippet</td>
                    <td className="p-3 text-teal-400 font-bold">Surgeon's / Blood Knot</td>
                    <td className="p-3">90-95%</td>
                    <td className="p-3 text-emerald-400">Easy-Adv</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a1530] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
