import React from 'react';
import { KnotStep } from '../types';

interface KnotStepDiagramProps {
  knotId: string;
  stepIndex: number;
  step: KnotStep;
  isPlaying: boolean;
  zoomLevel?: number;
}

export const KnotStepDiagram: React.FC<KnotStepDiagramProps> = ({
  knotId,
  stepIndex,
  step,
  isPlaying,
  zoomLevel = 1,
}) => {
  // Styles matching the uploaded Android Fishing Knots reference:
  // Hook: Solid black metal (#111827)
  // Cord 1: Warm Rose/Coral with dark outline and top highlight (3D cord look)
  // Cord 2 (for line-to-line): Caramel/Tan or Ocean Blue with dark outline
  // Arrows: Solid vibrant red (#dc2626) with dark red stroke (#991b1b)

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-inner select-none">
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full transition-transform duration-300"
        style={{ transform: `scale(${zoomLevel})` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Filters for 3D cord & arrow drop shadow */}
          <filter id="cordShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18" />
          </filter>
          <filter id="arrowShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#7f1d1d" floodOpacity="0.3" />
          </filter>

          {/* Red 3D Arrowhead marker */}
          <marker
            id="redArrowHead"
            markerWidth="10"
            markerHeight="10"
            refX="7"
            refY="5"
            orient="auto"
          >
            <polygon points="0 1, 9 5, 0 9" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          </marker>
        </defs>

        {/* -------------------------------------------------------------
            1. PALOMAR KNOT
        ------------------------------------------------------------- */}
        {knotId === 'palomar-knot' && (
          <g filter="url(#cordShadow)">
            {/* Hook: Horizontal black hook on right */}
            <g id="hook-palomar">
              <circle cx="360" cy="180" r="20" fill="none" stroke="#111827" strokeWidth="12" />
              <circle cx="360" cy="180" r="10" fill="#ffffff" />
              <path d="M 380 180 L 450 180 C 490 180 510 215 510 250 C 510 290 470 320 420 300 L 410 270" fill="none" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
              <polygon points="410,270 400,290 425,280" fill="#111827" />
            </g>

            {stepIndex === 0 && (
              /* Step 1: Doubled bight entering hook eye */
              <g>
                {/* Outlines */}
                <path d="M 60 165 L 260 165 C 310 165 350 175 360 180 C 370 185 390 185 410 180 C 430 175 430 195 410 195 L 360 180 L 260 195 L 100 195" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                {/* Core */}
                <path d="M 60 165 L 260 165 C 310 165 350 175 360 180 C 370 185 390 185 410 180 C 430 175 430 195 410 195 L 360 180 L 260 195 L 100 195" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                {/* Highlight */}
                <path d="M 60 163 L 260 163 C 310 163 350 173 360 178" fill="none" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />

                {/* Red Direction Arrow */}
                <path d="M 280 140 L 370 165" fill="none" stroke="#dc2626" strokeWidth="5" markerEnd="url(#redArrowHead)" />
                <polygon points="370,165 350,155 355,175" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 1 && (
              /* Step 2: Overhand knot formed above hook */
              <g>
                {/* Doubled loop overhand circle */}
                <path d="M 60 140 L 180 140 C 230 140 250 80 190 80 C 140 80 140 180 230 180 L 360 180" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 60 140 L 180 140 C 230 140 250 80 190 80 C 140 80 140 180 230 180 L 360 180" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
                
                <path d="M 360 180 L 260 220 C 200 250 170 190 200 140 L 230 140" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 360 180 L 260 220 C 200 250 170 190 200 140 L 230 140" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />

                {/* Curved Red Arrow showing looping through */}
                <path d="M 180 195 C 160 235 220 255 250 220" fill="none" stroke="#dc2626" strokeWidth="5" />
                <polygon points="250,220 230,225 240,240" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 2 && (
              /* Step 3: Loop passing over entire hook */
              <g>
                <path d="M 60 160 L 260 160" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 60 160 L 260 160" fill="none" stroke="#e06d6d" strokeWidth="7" />
                
                {/* Big loop encompassing hook */}
                <path d="M 260 160 C 290 80 470 70 510 180 C 530 290 400 350 320 280 L 270 210" fill="none" stroke="#18181b" strokeWidth="13" strokeLinecap="round" />
                <path d="M 260 160 C 290 80 470 70 510 180 C 530 290 400 350 320 280 L 270 210" fill="none" stroke="#e06d6d" strokeWidth="8" strokeLinecap="round" />
                
                {/* Curved red arrow around hook bend */}
                <path d="M 470 95 C 550 180 500 330 350 310" fill="none" stroke="#dc2626" strokeWidth="5" />
                <polygon points="350,310 375,305 365,325" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 3 && (
              /* Step 4: Cinch tight - opposing red tension arrows */
              <g>
                <path d="M 60 180 L 335 180" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 60 180 L 335 180" fill="none" stroke="#e06d6d" strokeWidth="7" />
                
                <ellipse cx="340" cy="180" rx="16" ry="22" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <path d="M 340 168 L 260 120" fill="none" stroke="#18181b" strokeWidth="11" strokeLinecap="round" />
                <path d="M 340 168 L 260 120" fill="none" stroke="#e06d6d" strokeWidth="6" strokeLinecap="round" />

                {/* Straight Red Tension Arrows */}
                <g filter="url(#arrowShadow)">
                  <line x1="220" y1="180" x2="110" y2="180" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="110,180 135,168 135,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />

                  <line x1="280" y1="130" x2="200" y2="85" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="200,85 224,80 212,102" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />

                  <line x1="420" y1="210" x2="490" y2="230" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="490,230 466,218 474,242" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                </g>
              </g>
            )}

            {stepIndex === 4 && (
              /* Step 5: Completed knot dressed against eye */
              <g>
                <path d="M 60 180 L 335 180" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 60 180 L 335 180" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <ellipse cx="340" cy="180" rx="16" ry="22" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                {/* Trimmed tag */}
                <path d="M 340 168 L 325 145" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
                <path d="M 340 168 L 325 145" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
                <line x1="335" y1="140" x2="310" y2="130" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 2" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            2. IMPROVED CLINCH KNOT (Exact match to middle reference image)
        ------------------------------------------------------------- */}
        {knotId === 'improved-clinch-knot' && (
          <g filter="url(#cordShadow)">
            {/* Hook: Horizontal black hook on left or right */}
            <g id="hook-clinch">
              <circle cx="440" cy="180" r="20" fill="none" stroke="#111827" strokeWidth="12" />
              <circle cx="440" cy="180" r="10" fill="#ffffff" />
              <path d="M 460 180 L 520 180 C 550 180 570 215 570 250" fill="none" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
            </g>

            {/* Standing line horizontal */}
            <path d="M 50 180 L 420 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 50 180 L 420 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex === 0 && (
              /* Step 1: Thread through eye, pull tag end */
              <g>
                <path d="M 420 180 L 440 180 C 455 180 455 220 440 220 L 180 220" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 420 180 L 440 180 C 455 180 455 220 440 220 L 180 220" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
                <line x1="300" y1="205" x2="200" y2="205" stroke="#dc2626" strokeWidth="5" />
                <polygon points="200,205 220,195 220,215" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 1 && (
              /* Step 2: 5-7 spiral wraps - EXACT visual from screenshot 2! */
              <g>
                {/* Diagonal helical twist wraps exactly like middle phone screen */}
                {[200, 240, 280, 320, 360].map((x, i) => (
                  <g key={i}>
                    {/* Back strand */}
                    <path d={`M ${x-15} 180 C ${x-15} 225 ${x+15} 225 ${x+15} 180`} fill="none" stroke="#18181b" strokeWidth="12" />
                    <path d={`M ${x-15} 180 C ${x-15} 225 ${x+15} 225 ${x+15} 180`} fill="none" stroke="#e06d6d" strokeWidth="7" />
                    {/* Front strand */}
                    <path d={`M ${x+15} 180 C ${x+15} 135 ${x+30} 135 ${x+30} 180`} fill="none" stroke="#18181b" strokeWidth="12" />
                    <path d={`M ${x+15} 180 C ${x+15} 135 ${x+30} 135 ${x+30} 180`} fill="none" stroke="#e06d6d" strokeWidth="7" />
                  </g>
                ))}
                {/* Curved Red Arrow swooping around just like screenshot 2 */}
                <path d="M 180 140 C 130 180 150 250 210 230" fill="none" stroke="#dc2626" strokeWidth="6" />
                <polygon points="210,230 185,225 195,245" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 2 && (
              /* Step 3: Tuck through initial loop next to hook eye */
              <g>
                {[200, 240, 280, 320, 360].map((x, i) => (
                  <path key={i} d={`M ${x-15} 160 L ${x+15} 200`} fill="none" stroke="#e06d6d" strokeWidth="8" strokeLinecap="round" />
                ))}
                {/* Long tag returning into small eye loop */}
                <path d="M 170 170 C 160 100 360 90 400 170 L 405 195" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 170 170 C 160 100 360 90 400 170 L 405 195" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <line x1="330" y1="105" x2="395" y2="155" stroke="#dc2626" strokeWidth="5" />
                <polygon points="395,155 375,145 385,165" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 3 && (
              /* Step 4: Tuck back through large loop (Screen 3 style) */
              <g>
                {[200, 240, 280, 320, 360].map((x, i) => (
                  <path key={i} d={`M ${x-15} 160 L ${x+15} 200`} fill="none" stroke="#e06d6d" strokeWidth="8" strokeLinecap="round" />
                ))}
                {/* Big outer belly loop exactly like right screenshot */}
                <path d="M 405 195 C 420 280 260 300 230 220 L 245 130" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 405 195 C 420 280 260 300 230 220 L 245 130" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
                
                {/* Red directional arrows indicating pull */}
                <line x1="120" y1="180" x2="60" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="60,180 85,168 85,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <line x1="240" y1="140" x2="280" y2="100" stroke="#dc2626" strokeWidth="6" />
                <polygon points="280,100 256,105 270,122" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 4 && (
              /* Step 5: Finished Clinch Knot tight against eye */
              <g>
                {/* Tightly packed barrel of 5 coils right against hook */}
                <rect x="340" y="160" width="75" height="40" rx="10" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                {[350, 364, 378, 392, 406].map((x, i) => (
                  <line key={i} x1={x} y1="162" x2={x+4} y2="198" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                ))}
                <path d="M 345 160 L 330 135" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
                <path d="M 345 160 L 330 135" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
                {/* Red pull arrow */}
                <line x1="220" y1="180" x2="110" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="110,180 135,168 135,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            3. UNI KNOT (Exact match to left reference screenshot!)
        ------------------------------------------------------------- */}
        {knotId === 'uni-knot' && (
          <g filter="url(#cordShadow)">
            {/* Hook: Horizontal black hook on left or right */}
            <circle cx="100" cy="180" r="20" fill="none" stroke="#111827" strokeWidth="12" />
            <circle cx="100" cy="180" r="10" fill="#ffffff" />
            <path d="M 80 180 L 50 180 C 30 180 20 210 20 240 C 20 270 45 290 70 275" fill="none" stroke="#111827" strokeWidth="12" strokeLinecap="round" />

            {/* Standing line running to right */}
            <path d="M 120 180 L 540 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 120 180 L 540 180" fill="none" stroke="#c48b58" strokeWidth="7" />

            {stepIndex === 0 && (
              /* Step 1: Line through eye and doubled back */
              <g>
                <path d="M 120 180 C 120 220 140 220 160 220 L 460 220" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 120 180 C 120 220 140 220 160 220 L 460 220" fill="none" stroke="#c48b58" strokeWidth="7" strokeLinecap="round" />
                <line x1="300" y1="205" x2="420" y2="205" stroke="#dc2626" strokeWidth="5" />
                <polygon points="420,205 395,195 395,215" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 1 && (
              /* Step 2: Open loop formed alongside double line */
              <g>
                <path d="M 460 220 C 490 220 500 290 420 300 C 280 310 220 260 250 180" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 460 220 C 490 220 500 290 420 300 C 280 310 220 260 250 180" fill="none" stroke="#c48b58" strokeWidth="7" strokeLinecap="round" />
                {/* Red loop arrow */}
                <path d="M 450 230 C 480 250 460 290 380 290" fill="none" stroke="#dc2626" strokeWidth="5" />
                <polygon points="380,290 405,280 400,300" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 2 && (
              /* Step 3: 5 wraps through the loop - EXACT match to screenshot 1! */
              <g>
                {/* Loop belly underneath */}
                <path d="M 180 180 C 180 280 440 280 440 180" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 180 180 C 180 280 440 280 440 180" fill="none" stroke="#c48b58" strokeWidth="7" />

                {/* 5 clean loops wrapping over both strands */}
                {[220, 260, 300, 340, 380].map((x, i) => (
                  <g key={i}>
                    <ellipse cx={x} cy="180" rx="14" ry="34" fill="none" stroke="#18181b" strokeWidth="12" />
                    <ellipse cx={x} cy="180" rx="14" ry="34" fill="none" stroke="#c48b58" strokeWidth="7" />
                    {/* Top 3D highlight */}
                    <path d={`M ${x-10} 150 C ${x} 145 ${x+10} 150 ${x+10} 160`} fill="none" stroke="#fef08a" strokeWidth="2.5" />
                  </g>
                ))}

                {/* Tag end exiting right */}
                <path d="M 395 180 L 480 180" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 395 180 L 480 180" fill="none" stroke="#c48b58" strokeWidth="7" strokeLinecap="round" />

                <line x1="420" y1="160" x2="490" y2="160" stroke="#dc2626" strokeWidth="5" />
                <polygon points="490,160 465,150 465,170" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 3 && (
              /* Step 4: Snug the barrel coils */
              <g>
                <rect x="280" y="160" width="70" height="40" rx="10" fill="#c48b58" stroke="#18181b" strokeWidth="4" />
                {[290, 304, 318, 332, 346].map((x, i) => (
                  <line key={i} x1={x} y1="162" x2={x+3} y2="198" stroke="#fef08a" strokeWidth="3" />
                ))}
                <path d="M 350 170 L 400 130" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
                <path d="M 350 170 L 400 130" fill="none" stroke="#c48b58" strokeWidth="6" strokeLinecap="round" />
                <line x1="360" y1="145" x2="420" y2="110" stroke="#dc2626" strokeWidth="5" />
                <polygon points="420,110 395,110 405,128" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 4 && (
              /* Step 5: Slide barrel to hook eye */
              <g>
                <rect x="130" y="160" width="70" height="40" rx="10" fill="#c48b58" stroke="#18181b" strokeWidth="4" />
                {[140, 154, 168, 182, 196].map((x, i) => (
                  <line key={i} x1={x} y1="162" x2={x+3} y2="198" stroke="#fef08a" strokeWidth="3" />
                ))}
                <path d="M 195 168 L 220 140" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
                <path d="M 195 168 L 220 140" fill="none" stroke="#c48b58" strokeWidth="5" strokeLinecap="round" />
                <line x1="280" y1="180" x2="380" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="380,180 355,168 355,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            4. LOOP KNOT (NON-SLIP MONO LOOP)
        ------------------------------------------------------------- */}
        {knotId === 'loop-knot' && (
          <g filter="url(#cordShadow)">
            <circle cx="480" cy="180" r="18" fill="none" stroke="#111827" strokeWidth="12" />
            <circle cx="480" cy="180" r="9" fill="#ffffff" />
            <path d="M 498 180 L 550 180" stroke="#111827" strokeWidth="12" strokeLinecap="round" />

            <path d="M 50 180 L 220 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 50 180 L 220 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex === 0 && (
              <g>
                <circle cx="260" cy="180" r="32" fill="none" stroke="#18181b" strokeWidth="12" />
                <circle cx="260" cy="180" r="32" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <path d="M 292 180 L 410 180" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 292 180 L 410 180" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
              </g>
            )}

            {stepIndex === 1 && (
              <g>
                <circle cx="260" cy="180" r="30" fill="none" stroke="#18181b" strokeWidth="12" />
                <circle cx="260" cy="180" r="30" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <path d="M 290 180 L 460 180 C 475 180 475 220 460 220 L 340 220" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 290 180 L 460 180 C 475 180 475 220 460 220 L 340 220" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
              </g>
            )}

            {stepIndex >= 2 && stepIndex <= 4 && (
              <g>
                <circle cx="260" cy="180" r="28" fill="none" stroke="#18181b" strokeWidth="12" />
                <circle cx="260" cy="180" r="28" fill="none" stroke="#e06d6d" strokeWidth="7" />
                {[150, 175, 200].map((x, i) => (
                  <ellipse key={i} cx={x} cy="180" rx="9" ry="22" fill="none" stroke="#e06d6d" strokeWidth="7" />
                ))}
                <path d="M 140 180 C 150 250 250 250 260 195 L 280 140" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 140 180 C 150 250 250 250 260 195 L 280 140" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
                <line x1="260" y1="210" x2="280" y2="150" stroke="#dc2626" strokeWidth="5" />
                <polygon points="280,150 265,165 285,170" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 5 && (
              /* Step 6: Finished loop knot with open teardrop */
              <g>
                <rect x="220" y="160" width="50" height="40" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                {/* Open loop */}
                <path d="M 270 172 C 340 135 440 145 460 176 M 460 184 C 440 215 340 225 270 188" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 270 172 C 340 135 440 145 460 176 M 460 184 C 440 215 340 225 270 188" fill="none" stroke="#e06d6d" strokeWidth="7" strokeLinecap="round" />
                {/* Tag */}
                <path d="M 235 160 L 220 135" fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
                <path d="M 235 160 L 220 135" fill="none" stroke="#e06d6d" strokeWidth="5" strokeLinecap="round" />
                {/* Red pull arrows */}
                <line x1="160" y1="180" x2="80" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="80,180 105,168 105,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            5. FG KNOT (Braid + Leader)
        ------------------------------------------------------------- */}
        {knotId === 'fg-knot' && (
          <g filter="url(#cordShadow)">
            {/* Braid line (Rose/coral, thin) */}
            <path d="M 40 180 L 180 180" fill="none" stroke="#18181b" strokeWidth="10" />
            <path d="M 40 180 L 180 180" fill="none" stroke="#e06d6d" strokeWidth="6" />

            {/* Fluorocarbon Leader (Thick Caramel cord) */}
            <path d="M 180 180 L 550 180" fill="none" stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
            <path d="M 180 180 L 550 180" fill="none" stroke="#c48b58" strokeWidth="10" strokeLinecap="round" />

            {stepIndex === 0 && (
              /* Cross leader */
              <g>
                <path d="M 300 50 L 300 310" fill="none" stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
                <path d="M 300 50 L 300 310" fill="none" stroke="#c48b58" strokeWidth="10" strokeLinecap="round" />
                <line x1="260" y1="120" x2="340" y2="120" stroke="#dc2626" strokeWidth="5" />
                <polygon points="340,120 320,110 320,130" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex >= 1 && stepIndex <= 3 && (
              /* Weave coils */
              <g>
                <rect x="180" y="165" width="180" height="30" rx="15" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                {[190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="165" x2={x+8} y2="195" stroke="#ffffff" strokeWidth="3" />
                    <line x1={x+8} y1="165" x2={x} y2="195" stroke="#991b1b" strokeWidth="2.5" />
                  </g>
                ))}
                {/* Tension red arrows */}
                <line x1="140" y1="180" x2="60" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="60,180 85,168 85,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <line x1="400" y1="180" x2="480" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="480,180 455,168 455,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 4 && (
              /* Step 5: Finished FG knot */
              <g>
                <rect x="180" y="166" width="180" height="28" rx="14" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <circle cx="365" cy="180" r="6" fill="#c48b58" stroke="#18181b" strokeWidth="2" />
                <rect x="372" y="170" width="35" height="20" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            6. DOUBLE UNI KNOT
        ------------------------------------------------------------- */}
        {knotId === 'double-uni-knot' && (
          <g filter="url(#cordShadow)">
            {/* Line A (Rose cord, left) */}
            <path d="M 50 180 L 240 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 50 180 L 240 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {/* Line B (Caramel cord, right) */}
            <path d="M 280 180 L 550 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 280 180 L 550 180" fill="none" stroke="#c48b58" strokeWidth="7" />

            {stepIndex === 0 && (
              <g>
                <path d="M 160 215 L 440 215" fill="none" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />
                <path d="M 160 215 L 440 215" fill="none" stroke="#c48b58" strokeWidth="7" strokeLinecap="round" />
                <line x1="240" y1="150" x2="360" y2="150" stroke="#dc2626" strokeWidth="5" />
                <polygon points="360,150 335,140 335,160" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex === 1 && (
              <g>
                <ellipse cx="360" cy="180" rx="22" ry="40" fill="none" stroke="#18181b" strokeWidth="12" />
                <ellipse cx="360" cy="180" rx="22" ry="40" fill="none" stroke="#e06d6d" strokeWidth="7" />
              </g>
            )}

            {stepIndex === 2 && (
              <g>
                <rect x="340" y="160" width="45" height="40" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
              </g>
            )}

            {stepIndex === 3 && (
              <g>
                <rect x="340" y="160" width="45" height="40" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <ellipse cx="200" cy="180" rx="22" ry="40" fill="none" stroke="#18181b" strokeWidth="12" />
                <ellipse cx="200" cy="180" rx="22" ry="40" fill="none" stroke="#c48b58" strokeWidth="7" />
              </g>
            )}

            {stepIndex === 4 && (
              <g>
                <rect x="250" y="160" width="50" height="40" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <rect x="300" y="160" width="50" height="40" rx="8" fill="#c48b58" stroke="#18181b" strokeWidth="4" />
                <line x1="180" y1="180" x2="80" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="80,180 105,168 105,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <line x1="420" y1="180" x2="520" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="520,180 495,168 495,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            7. ALBRIGHT KNOT
        ------------------------------------------------------------- */}
        {knotId === 'albright-knot' && (
          <g filter="url(#cordShadow)">
            {/* Heavy leader loop (Caramel, right to left) */}
            <path d="M 520 155 L 220 155 C 175 155 175 205 220 205 L 520 205" fill="none" stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
            <path d="M 520 155 L 220 155 C 175 155 175 205 220 205 L 520 205" fill="none" stroke="#c48b58" strokeWidth="10" strokeLinecap="round" />

            {/* Light line (Rose) */}
            <path d="M 40 180 L 220 180" fill="none" stroke="#18181b" strokeWidth="11" />
            <path d="M 40 180 L 220 180" fill="none" stroke="#e06d6d" strokeWidth="6" />

            {stepIndex >= 2 && stepIndex <= 3 && (
              <g>
                {[220, 245, 270, 295, 320, 345, 370].map((x, i) => (
                  <ellipse key={i} cx={x} cy="180" rx="9" ry="32" fill="none" stroke="#e06d6d" strokeWidth="6" />
                ))}
              </g>
            )}

            {stepIndex === 4 && (
              <g>
                <rect x="215" y="150" width="120" height="60" rx="10" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <line x1="140" y1="180" x2="60" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="60,180 85,168 85,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            8. SURGEON'S KNOT
        ------------------------------------------------------------- */}
        {knotId === 'surgeons-knot' && (
          <g filter="url(#cordShadow)">
            <path d="M 50 180 L 550 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 50 180 L 550 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex === 0 && (
              <path d="M 160 215 L 440 215" fill="none" stroke="#c48b58" strokeWidth="7" strokeLinecap="round" />
            )}

            {stepIndex >= 1 && stepIndex <= 2 && (
              <g>
                <ellipse cx="300" cy="180" rx="65" ry="50" fill="none" stroke="#18181b" strokeWidth="12" />
                <ellipse cx="300" cy="180" rx="65" ry="50" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <path d="M 330 180 C 350 240 260 240 280 180" fill="none" stroke="#dc2626" strokeWidth="5" />
                <polygon points="280,180 265,195 285,195" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}

            {stepIndex >= 3 && (
              <g>
                <ellipse cx="300" cy="180" rx="30" ry="24" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <line x1="220" y1="180" x2="100" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="100,180 125,168 125,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <line x1="380" y1="180" x2="500" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="500,180 475,168 475,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            9. SNELL KNOT
        ------------------------------------------------------------- */}
        {knotId === 'snell-knot' && (
          <g filter="url(#cordShadow)">
            {/* Hook Shank laying horizontal: Eye at (120, 180) */}
            <circle cx="120" cy="180" r="20" fill="none" stroke="#111827" strokeWidth="12" />
            <circle cx="120" cy="180" r="10" fill="#ffffff" />
            <line x1="140" y1="180" x2="420" y2="180" stroke="#111827" strokeWidth="14" strokeLinecap="round" />
            <path d="M 420 180 C 490 180 500 240 450 270" stroke="#111827" strokeWidth="14" fill="none" strokeLinecap="round" />

            <path d="M 40 180 L 100 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 40 180 L 100 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex >= 2 && stepIndex <= 3 && (
              <g>
                {[200, 225, 250, 275, 300].map((x, i) => (
                  <ellipse key={i} cx={x} cy="180" rx="9" ry="26" fill="none" stroke="#e06d6d" strokeWidth="6" />
                ))}
              </g>
            )}

            {stepIndex === 4 && (
              <g>
                <rect x="145" y="162" width="110" height="36" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <line x1="90" y1="180" x2="30" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="30,180 55,168 55,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            10. DROPPER LOOP
        ------------------------------------------------------------- */}
        {knotId === 'dropper-loop' && (
          <g filter="url(#cordShadow)">
            <path d="M 40 180 L 550 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 40 180 L 550 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex >= 1 && stepIndex <= 2 && (
              <g>
                {[240, 260, 280, 320, 340, 360].map((x, i) => (
                  <line key={i} x1={x} y1="165" x2={x+8} y2="195" stroke="#e06d6d" strokeWidth="6" strokeLinecap="round" />
                ))}
              </g>
            )}

            {stepIndex >= 3 && (
              <g>
                {/* 90 degree standout dropper loop */}
                <path d="M 292 180 L 292 60 C 292 35 308 35 308 60 L 308 180" fill="none" stroke="#18181b" strokeWidth="12" />
                <path d="M 292 180 L 292 60 C 292 35 308 35 308 60 L 308 180" fill="none" stroke="#e06d6d" strokeWidth="7" />
                <rect x="250" y="165" width="40" height="30" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
                <rect x="310" y="165" width="40" height="30" rx="6" fill="#e06d6d" stroke="#18181b" strokeWidth="3" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            11. ARBOR KNOT
        ------------------------------------------------------------- */}
        {knotId === 'arbor-knot' && (
          <g filter="url(#cordShadow)">
            {/* Reel Spool Hub at center */}
            <rect x="240" y="80" width="160" height="200" rx="80" fill="#f8fafc" stroke="#111827" strokeWidth="10" />
            <circle cx="320" cy="180" r="40" fill="#e2e8f0" stroke="#111827" strokeWidth="6" />

            <path d="M 40 180 L 230 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 40 180 L 230 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            <circle cx="320" cy="180" r="85" fill="none" stroke="#18181b" strokeWidth="12" />
            <circle cx="320" cy="180" r="85" fill="none" stroke="#e06d6d" strokeWidth="7" />

            {stepIndex >= 2 && (
              <g>
                <circle cx="235" cy="180" r="16" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <circle cx="195" cy="180" r="12" fill="#c48b58" stroke="#18181b" strokeWidth="3" />
                <line x1="140" y1="180" x2="60" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="60,180 85,168 85,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            12. BLOOD KNOT
        ------------------------------------------------------------- */}
        {knotId === 'blood-knot' && (
          <g filter="url(#cordShadow)">
            <path d="M 40 180 L 260 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 40 180 L 260 180" fill="none" stroke="#e06d6d" strokeWidth="7" />

            <path d="M 340 180 L 550 180" fill="none" stroke="#18181b" strokeWidth="12" />
            <path d="M 340 180 L 550 180" fill="none" stroke="#c48b58" strokeWidth="7" />

            {stepIndex >= 1 && stepIndex <= 3 && (
              <g>
                {[300, 320, 340, 360].map((x, i) => (
                  <ellipse key={i} cx={x} cy="180" rx="8" ry="30" fill="none" stroke="#e06d6d" strokeWidth="6" />
                ))}
                {[240, 260, 280].map((x, i) => (
                  <ellipse key={i} cx={x} cy="180" rx="8" ry="30" fill="none" stroke="#c48b58" strokeWidth="6" />
                ))}
              </g>
            )}

            {stepIndex === 4 && (
              <g>
                <rect x="250" y="160" width="100" height="40" rx="8" fill="#e06d6d" stroke="#18181b" strokeWidth="4" />
                <line x1="180" y1="180" x2="80" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="80,180 105,168 105,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <line x1="420" y1="180" x2="520" y2="180" stroke="#dc2626" strokeWidth="6" />
                <polygon points="520,180 495,168 495,192" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
