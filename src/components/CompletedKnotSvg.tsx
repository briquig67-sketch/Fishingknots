import React from 'react';

interface CompletedKnotSvgProps {
  knotId: string;
  className?: string;
  showLabels?: boolean;
}

export const CompletedKnotSvg: React.FC<CompletedKnotSvgProps> = ({
  knotId,
  className = 'w-full h-48',
  showLabels = true,
}) => {
  return (
    <div className={`relative flex items-center justify-center bg-white rounded-xl border border-slate-300 p-2 overflow-hidden shadow-inner ${className}`}>
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="knotCompletedShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
          </filter>
        </defs>

        <g filter="url(#knotCompletedShadow)">
          {/* Universal Hooks on knots requiring hooks */}
          {['palomar-knot', 'improved-clinch-knot', 'uni-knot', 'snell-knot'].includes(knotId) && (
            <g id="comp-hook">
              <circle cx="290" cy="120" r="16" fill="none" stroke="#111827" strokeWidth="10" />
              <circle cx="290" cy="120" r="8" fill="#ffffff" />
              <path d="M 306 120 L 350 120 C 375 120 385 145 385 170 C 385 195 360 215 340 200 L 335 180" fill="none" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
              <polygon points="335,180 330,195 345,188" fill="#111827" />
            </g>
          )}

          {/* 1. Palomar Knot */}
          {knotId === 'palomar-knot' && (
            <g>
              <path d="M 40 120 L 265 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 40 120 L 265 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <ellipse cx="272" cy="120" rx="14" ry="18" fill="#e06d6d" stroke="#18181b" strokeWidth="3.5" />
              <path d="M 272 108 L 290 85" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
              <path d="M 272 108 L 290 85" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
              {/* Tension red arrow */}
              <line x1="140" y1="120" x2="70" y2="120" stroke="#dc2626" strokeWidth="5" />
              <polygon points="70,120 90,110 90,130" fill="#dc2626" />
            </g>
          )}

          {/* 2. Improved Clinch Knot */}
          {knotId === 'improved-clinch-knot' && (
            <g>
              <path d="M 40 120 L 210 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 40 120 L 210 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <rect x="210" y="104" width="65" height="32" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="3.5" />
              {[218, 228, 238, 248, 258].map((x, i) => (
                <line key={i} x1={x} y1="106" x2={x+3} y2="134" stroke="#ffffff" strokeWidth="3" />
              ))}
              <path d="M 270 108 L 285 85" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
              <path d="M 270 108 L 285 85" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
            </g>
          )}

          {/* 3. Uni Knot (Exact match to reference screenshot) */}
          {knotId === 'uni-knot' && (
            <g>
              <path d="M 40 120 L 215 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 40 120 L 215 120" fill="none" stroke="#c48b58" strokeWidth="7" />
              <rect x="215" y="104" width="60" height="32" rx="8" fill="#c48b58" stroke="#18181b" strokeWidth="3.5" />
              {[223, 233, 243, 253, 263].map((x, i) => (
                <line key={i} x1={x} y1="106" x2={x+3} y2="134" stroke="#fef08a" strokeWidth="3" />
              ))}
              <path d="M 270 108 L 290 85" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
              <path d="M 270 108 L 290 85" fill="none" stroke="#c48b58" strokeWidth="5" strokeLinecap="round" />
            </g>
          )}

          {/* 4. Loop Knot */}
          {knotId === 'loop-knot' && (
            <g>
              <circle cx="330" cy="120" r="16" fill="none" stroke="#111827" strokeWidth="10" />
              <circle cx="330" cy="120" r="8" fill="#ffffff" />
              <path d="M 346 120 L 380 120" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
              <path d="M 40 120 L 165 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 40 120 L 165 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <rect x="165" y="105" width="45" height="30" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3.5" />
              <path d="M 210 114 C 255 100 300 105 318 116 M 318 124 C 300 135 255 140 210 126" fill="none" stroke="#18181b" strokeWidth="11" strokeLinecap="round" />
              <path d="M 210 114 C 255 100 300 105 318 116 M 318 124 C 300 135 255 140 210 126" fill="none" stroke="#e06d6d" strokeWidth="6" strokeLinecap="round" />
              <path d="M 180 105 L 170 85" fill="none" stroke="#18181b" strokeWidth="9" strokeLinecap="round" />
              <path d="M 180 105 L 170 85" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
            </g>
          )}

          {/* 5. FG Knot */}
          {knotId === 'fg-knot' && (
            <g>
              <path d="M 30 120 L 140 120" fill="none" stroke="#18181b" strokeWidth="10" />
              <path d="M 30 120 L 140 120" fill="none" stroke="#e06d6d" strokeWidth="6" />
              <path d="M 140 120 L 370 120" fill="none" stroke="#18181b" strokeWidth="14" strokeLinecap="round" />
              <path d="M 140 120 L 370 120" fill="none" stroke="#c48b58" strokeWidth="9" strokeLinecap="round" />
              <rect x="140" y="110" width="130" height="20" rx="10" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              {[145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255].map((x, i) => (
                <line key={i} x1={x} y1="110" x2={x+5} y2="130" stroke="#ffffff" strokeWidth="2.5" />
              ))}
            </g>
          )}

          {/* 6. Double Uni Knot */}
          {knotId === 'double-uni-knot' && (
            <g>
              <path d="M 30 120 L 170 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 30 120 L 170 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <path d="M 230 120 L 370 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 230 120 L 370 120" fill="none" stroke="#c48b58" strokeWidth="7" />
              <rect x="165" y="104" width="35" height="32" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              <rect x="200" y="104" width="35" height="32" rx="6" fill="#c48b58" stroke="#18181b" strokeWidth="3" />
            </g>
          )}

          {/* 7. Albright Knot */}
          {knotId === 'albright-knot' && (
            <g>
              <path d="M 370 110 L 170 110 C 145 110 145 130 170 130 L 370 130" fill="none" stroke="#18181b" strokeWidth="14" strokeLinecap="round" />
              <path d="M 370 110 L 170 110 C 145 110 145 130 170 130 L 370 130" fill="none" stroke="#c48b58" strokeWidth="9" strokeLinecap="round" />
              <path d="M 30 120 L 190 120" fill="none" stroke="#18181b" strokeWidth="10" />
              <path d="M 30 120 L 190 120" fill="none" stroke="#e06d6d" strokeWidth="6" />
              <rect x="180" y="102" width="85" height="36" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
            </g>
          )}

          {/* 8. Surgeon's Knot */}
          {knotId === 'surgeons-knot' && (
            <g>
              <path d="M 30 120 L 180 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 30 120 L 180 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <path d="M 220 120 L 370 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 220 120 L 370 120" fill="none" stroke="#c48b58" strokeWidth="7" />
              <ellipse cx="200" cy="120" rx="22" ry="20" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
            </g>
          )}

          {/* 9. Snell Knot */}
          {knotId === 'snell-knot' && (
            <g>
              <circle cx="80" cy="120" r="16" fill="none" stroke="#111827" strokeWidth="10" />
              <line x1="96" y1="120" x2="280" y2="120" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
              <path d="M 280 120 C 330 120 340 170 300 190" stroke="#111827" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M 30 120 L 70 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <rect x="120" y="106" width="65" height="28" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
            </g>
          )}

          {/* 10. Dropper Loop */}
          {knotId === 'dropper-loop' && (
            <g>
              <path d="M 30 150 L 370 150" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 30 150 L 370 150" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <path d="M 194 150 L 194 45 C 194 30 206 30 206 45 L 206 150" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 194 150 L 194 45 C 194 30 206 30 206 45 L 206 150" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <rect x="160" y="138" width="30" height="24" rx="4" fill="#e06d6d" stroke="#18181b" strokeWidth="2.5" />
              <rect x="210" y="138" width="30" height="24" rx="4" fill="#e06d6d" stroke="#18181b" strokeWidth="2.5" />
            </g>
          )}

          {/* 11. Arbor Knot */}
          {knotId === 'arbor-knot' && (
            <g>
              <rect x="200" y="60" width="120" height="120" rx="60" fill="#f8fafc" stroke="#111827" strokeWidth="8" />
              <circle cx="260" cy="120" r="28" fill="#e2e8f0" stroke="#111827" strokeWidth="4" />
              <path d="M 40 120 L 195 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 40 120 L 195 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <circle cx="260" cy="120" r="66" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <circle cx="196" cy="120" r="10" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              <circle cx="178" cy="120" r="9" fill="#c48b58" stroke="#18181b" strokeWidth="3" />
            </g>
          )}

          {/* 12. Blood Knot */}
          {knotId === 'blood-knot' && (
            <g>
              <path d="M 30 120 L 160 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 30 120 L 160 120" fill="none" stroke="#e06d6d" strokeWidth="7" />
              <path d="M 240 120 L 370 120" fill="none" stroke="#18181b" strokeWidth="12" />
              <path d="M 240 120 L 370 120" fill="none" stroke="#c48b58" strokeWidth="7" />
              <rect x="160" y="104" width="80" height="32" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              {[168, 178, 188].map((x, i) => (
                <line key={i} x1={x} y1="106" x2={x+3} y2="134" stroke="#ffffff" strokeWidth="3" />
              ))}
              {[208, 218, 228].map((x, i) => (
                <line key={i} x1={x} y1="106" x2={x+3} y2="134" stroke="#fef08a" strokeWidth="3" />
              ))}
            </g>
          )}
        </g>
      </svg>

      {showLabels && (
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-slate-700 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-200 shadow-sm font-semibold">
          <span className="text-emerald-700">✓ Completed Dressed Knot</span>
          <span className="text-slate-500 text-[11px]">Seated &amp; Ready</span>
        </div>
      )}
    </div>
  );
};
