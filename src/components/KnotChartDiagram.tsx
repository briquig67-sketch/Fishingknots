import React from 'react';
import { Knot, KnotStep } from '../types';

interface KnotChartDiagramProps {
  knot: Knot;
  activeStepIndex: number;
  viewMode: 'chart' | 'step'; // 'chart' = complete multi-step chart like Ande poster; 'step' = focused single step animation
  isPlaying?: boolean;
  zoomLevel?: number;
}

export const KnotChartDiagram: React.FC<KnotChartDiagramProps> = ({
  knot,
  activeStepIndex,
  viewMode = 'chart',
  isPlaying = false,
  zoomLevel = 1,
}) => {
  const knotId = knot.id;

  // Colors matching the Ande Monofilament Pro-Fisherman Knot Chart:
  const blueLine = '#0284c7'; // Sky-Blue Monofilament
  const blueLineHighlight = '#38bdf8';
  const yellowLine = '#ca8a04'; // High-Vis Yellow Monofilament (for second line or tag)
  const yellowLineHighlight = '#facc15';
  const hookSteel = '#1e293b'; // Gunmetal tackle
  const arrowRed = '#e11d48'; // Magenta / Crimson action arrow

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-xl overflow-hidden select-none border border-slate-300">
      <svg
        viewBox={viewMode === 'chart' ? '0 0 680 500' : '0 0 600 360'}
        className="w-full h-full transition-transform duration-300"
        style={{ transform: `scale(${zoomLevel})` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="andeArrowHead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <polygon points="0 1, 7 4, 0 7" fill={arrowRed} />
          </marker>

          <filter id="chartSoftShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* -------------------------------------------------------------
            PALOMAR KNOT
        ------------------------------------------------------------- */}
        {knotId === 'palomar-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              /* FULL CHART VIEW (All steps simultaneously like the Ande poster) */
              <g>
                {/* Step 1: Top Left */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="310" height="215" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Double 4" line &amp; pass loop through eye.
                  </text>
                  {/* Hook */}
                  <circle cx="270" cy="115" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="270" cy="115" r="6" fill="#f8fafc" />
                  <path d="M 284 115 L 305 115 C 315 115 320 135 315 155 C 310 170 290 180 275 170" fill="none" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Doubled line passing through eye */}
                  <path d="M 45 105 L 180 105 C 220 105 250 115 270 115 L 290 115 C 295 115 295 125 290 125 L 270 115 L 180 125 L 45 125" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 45 105 L 180 105 C 220 105 250 115 270 115 L 290 115 C 295 115 295 125 290 125 L 270 115 L 180 125 L 45 125" fill="none" stroke={blueLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 190 90 L 250 105" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 2: Top Right */}
                <g opacity={activeStepIndex === 1 ? 1 : 0.85}>
                  <rect x="350" y="20" width="310" height="215" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="365" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Tie overhand knot in doubled line.
                  </text>
                  {/* Hook hanging */}
                  <circle cx="600" cy="140" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="600" cy="140" r="6" fill="#f8fafc" />
                  <path d="M 614 140 L 635 140 C 645 140 650 160 645 180" fill="none" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Overhand loop */}
                  <path d="M 375 100 L 450 100 C 490 100 510 60 460 60 C 420 60 410 140 480 140 L 600 140" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 375 100 L 450 100 C 490 100 510 60 460 60 C 420 60 410 140 480 140 L 600 140" fill="none" stroke={blueLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 600 140 L 530 170 C 470 190 440 140 470 100 L 490 100" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 600 140 L 530 170 C 470 190 440 140 470 100 L 490 100" fill="none" stroke={blueLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 450 145 C 430 175 480 190 510 165" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 3: Bottom Left */}
                <g opacity={activeStepIndex === 2 ? 1 : 0.85}>
                  <rect x="20" y="255" width="310" height="225" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="280" fill="#0f172a" fontSize="13" fontWeight="bold">
                    3. Pull loop completely over hook.
                  </text>
                  {/* Hook */}
                  <circle cx="160" cy="360" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="160" cy="360" r="6" fill="#f8fafc" />
                  <path d="M 174 360 L 220 360 C 240 360 250 380 240 405 C 230 420 205 430 185 415" fill="none" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Loop going around hook */}
                  <path d="M 45 350 L 140 350" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 140 350 C 160 300 250 295 285 360 C 300 420 220 460 170 410 L 145 365" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 140 350 C 160 300 250 295 285 360 C 300 420 220 460 170 410 L 145 365" fill="none" stroke={blueLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 260 305 C 310 360 280 445 190 435" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 4: Bottom Right */}
                <g opacity={activeStepIndex >= 3 ? 1 : 0.85}>
                  <rect x="350" y="255" width="310" height="225" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="365" y="280" fill="#0f172a" fontSize="13" fontWeight="bold">
                    4. Pull both ends to tighten. Clip close.
                  </text>
                  {/* Hook */}
                  <circle cx="560" cy="370" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="560" cy="370" r="6" fill="#f8fafc" />
                  <path d="M 574 370 L 610 370 C 625 370 635 390 630 410" fill="none" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Tightened collar and line */}
                  <path d="M 375 370 L 545 370" fill="none" stroke="#0f172a" strokeWidth="8" />
                  <path d="M 375 370 L 545 370" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <ellipse cx="548" cy="370" rx="10" ry="14" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
                  <path d="M 548 360 L 530 340" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 548 360 L 530 340" fill="none" stroke={yellowLine} strokeWidth="3.5" strokeLinecap="round" />
                  {/* Tension arrows */}
                  <line x1="470" y1="370" x2="410" y2="370" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                  <line x1="535" y1="345" x2="485" y2="320" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                  <text x="500" y="445" fill="#16a34a" fontSize="13" fontWeight="bold">✓ 100% Knot Strength</text>
                </g>
              </g>
            ) : (
              /* STEP-BY-STEP FOCUSED VIEW */
              <g>
                <circle cx="440" cy="180" r="18" fill="none" stroke={hookSteel} strokeWidth="10" />
                <circle cx="440" cy="180" r="8" fill="#ffffff" />
                <path d="M 458 180 L 510 180 C 535 180 545 210 545 240 C 545 270 515 295 480 280" fill="none" stroke={hookSteel} strokeWidth="10" strokeLinecap="round" />
                
                {activeStepIndex === 0 && (
                  <g>
                    <path d="M 60 170 L 320 170 C 370 170 420 180 440 180 L 460 180 C 470 180 470 190 460 190 L 440 180 L 320 190 L 80 190" fill="none" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 60 170 L 320 170 C 370 170 420 180 440 180 L 460 180 C 470 180 470 190 460 190 L 440 180 L 320 190 L 80 190" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                    <path d="M 330 150 L 430 170" fill="none" stroke={arrowRed} strokeWidth="4" markerEnd="url(#andeArrowHead)" />
                  </g>
                )}
                {activeStepIndex === 1 && (
                  <g>
                    <path d="M 60 140 L 220 140 C 270 140 290 80 230 80 C 180 80 170 180 260 180 L 440 180" fill="none" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 60 140 L 220 140 C 270 140 290 80 230 80 C 180 80 170 180 260 180 L 440 180" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                    <path d="M 440 180 L 350 220 C 290 250 240 190 270 140 L 300 140" fill="none" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 440 180 L 350 220 C 290 250 240 190 270 140 L 300 140" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                    <path d="M 230 190 C 210 235 270 255 310 220" fill="none" stroke={arrowRed} strokeWidth="4" markerEnd="url(#andeArrowHead)" />
                  </g>
                )}
                {activeStepIndex === 2 && (
                  <g>
                    <path d="M 60 160 L 280 160" fill="none" stroke={blueLine} strokeWidth="6" />
                    <path d="M 280 160 C 310 90 480 80 520 180 C 540 280 430 330 350 270 L 300 200" fill="none" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 280 160 C 310 90 480 80 520 180 C 540 280 430 330 350 270 L 300 200" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                    <path d="M 480 110 C 550 180 520 310 380 290" fill="none" stroke={arrowRed} strokeWidth="4" markerEnd="url(#andeArrowHead)" />
                  </g>
                )}
                {activeStepIndex >= 3 && (
                  <g>
                    <path d="M 60 180 L 415 180" fill="none" stroke="#0f172a" strokeWidth="10" />
                    <path d="M 60 180 L 415 180" fill="none" stroke={blueLine} strokeWidth="6" />
                    <ellipse cx="422" cy="180" rx="14" ry="18" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
                    <path d="M 422 170 L 390 140" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 422 170 L 390 140" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />
                    <line x1="280" y1="180" x2="160" y2="180" stroke={arrowRed} strokeWidth="4" markerEnd="url(#andeArrowHead)" />
                  </g>
                )}
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            IMPROVED CLINCH KNOT (Matches Ande Chart Bottom-Center)
        ------------------------------------------------------------- */}
        {knotId === 'improved-clinch-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Pass line through eye. Double back and make 5 wraps around lead line.
                  </text>
                  <circle cx="560" cy="100" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="560" cy="100" r="6" fill="#f8fafc" />
                  <path d="M 574 100 L 620 100" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Standing line */}
                  <path d="M 45 100 L 540 100" fill="none" stroke="#0f172a" strokeWidth="8" />
                  <path d="M 45 100 L 540 100" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  {/* Wraps */}
                  {[240, 290, 340, 390, 440].map((x, i) => (
                    <ellipse key={i} cx={x} cy="100" rx="10" ry="22" fill="none" stroke="#0f172a" strokeWidth="8" />
                  ))}
                  {[240, 290, 340, 390, 440].map((x, i) => (
                    <ellipse key={i} cx={x} cy="100" rx="10" ry="22" fill="none" stroke={yellowLine} strokeWidth="4.5" />
                  ))}
                  <path d="M 490 80 C 470 60 380 60 210 90" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 2 */}
                <g opacity={activeStepIndex === 1 ? 1 : 0.85}>
                  <rect x="20" y="180" width="640" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="205" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Thread end through first loop above eye, then through big loop.
                  </text>
                  <circle cx="560" cy="265" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="560" cy="265" r="6" fill="#f8fafc" />
                  <path d="M 574 265 L 620 265" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  <path d="M 45 265 L 540 265" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  {[260, 310, 360, 410, 460].map((x, i) => (
                    <line key={i} x1={x-10} y1="250" x2={x+10} y2="280" stroke={blueLine} strokeWidth="5" strokeLinecap="round" />
                  ))}
                  {/* Tucked into eye loop then big loop */}
                  <path d="M 515 270 C 530 330 380 340 350 280 L 370 230" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 515 270 C 530 330 380 340 350 280 L 370 230" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 450 315 C 380 325 355 295 365 240" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 3 */}
                <g opacity={activeStepIndex >= 2 ? 1 : 0.85}>
                  <rect x="20" y="350" width="640" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="375" fill="#0f172a" fontSize="13" fontWeight="bold">
                    3. Hold end &amp; lead line while pulling coils tight. Slide against eye.
                  </text>
                  <circle cx="560" cy="425" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="560" cy="425" r="6" fill="#f8fafc" />
                  <path d="M 574 425 L 620 425" stroke={hookSteel} strokeWidth="8" strokeLinecap="round" />
                  {/* Seated barrel */}
                  <path d="M 45 425 L 450 425" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <rect x="450" y="410" width="80" height="30" rx="8" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
                  {[460, 474, 488, 502, 516].map((x, i) => (
                    <line key={i} x1={x} y1="412" x2={x+3} y2="438" stroke="#ffffff" strokeWidth="3" />
                  ))}
                  <path d="M 460 410 L 440 390" fill="none" stroke={yellowLine} strokeWidth="4" strokeLinecap="round" />
                  <line x1="320" y1="425" x2="220" y2="425" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              /* FOCUSED VIEW */
              <g>
                <circle cx="480" cy="180" r="18" fill="none" stroke={hookSteel} strokeWidth="10" />
                <circle cx="480" cy="180" r="8" fill="#ffffff" />
                <path d="M 498 180 L 550 180" stroke={hookSteel} strokeWidth="10" strokeLinecap="round" />
                <path d="M 50 180 L 460 180" fill="none" stroke="#0f172a" strokeWidth="10" />
                <path d="M 50 180 L 460 180" fill="none" stroke={blueLine} strokeWidth="6" />
                {activeStepIndex === 0 && (
                  <path d="M 460 180 L 480 180 C 495 180 495 220 480 220 L 220 220" fill="none" stroke={yellowLine} strokeWidth="5.5" strokeLinecap="round" />
                )}
                {activeStepIndex === 1 && (
                  <g>
                    {[240, 280, 320, 360, 400].map((x, i) => (
                      <ellipse key={i} cx={x} cy="180" rx="12" ry="26" fill="none" stroke={yellowLine} strokeWidth="5.5" />
                    ))}
                  </g>
                )}
                {activeStepIndex >= 2 && (
                  <g>
                    <rect x="370" y="162" width="80" height="36" rx="8" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
                    {[380, 394, 408, 422, 436].map((x, i) => (
                      <line key={i} x1={x} y1="164" x2={x+4} y2="196" stroke="#ffffff" strokeWidth="3" />
                    ))}
                  </g>
                )}
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            DROPPER LOOP (Matches Ande Chart Top-Right Dropper Loop)
        ------------------------------------------------------------- */}
        {knotId === 'dropper-loop' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Form a loop in line and begin turning one end around the line. Leave twists loose.
                  </text>
                  <path d="M 45 100 L 250 100 C 270 50 370 50 390 100 L 635 100" fill="none" stroke="#0f172a" strokeWidth="8" />
                  <path d="M 45 100 L 250 100 C 270 50 370 50 390 100 L 635 100" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <circle cx="320" cy="85" r="35" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <path d="M 355 70 C 375 110 330 140 280 120" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 2 */}
                <g opacity={activeStepIndex === 1 ? 1 : 0.85}>
                  <rect x="20" y="180" width="640" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="205" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Make 8 - 10 turns, then pull bottom loop through center opening.
                  </text>
                  <path d="M 45 260 L 220 260" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <path d="M 420 260 L 635 260" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  {/* Twisted coils */}
                  {[230, 250, 270, 290, 350, 370, 390, 410].map((x, i) => (
                    <line key={i} x1={x} y1="245" x2={x+8} y2="275" stroke={blueLine} strokeWidth="5" strokeLinecap="round" />
                  ))}
                  {/* Center opening with loop drawn through */}
                  <circle cx="320" cy="260" r="16" fill="#f8fafc" stroke={arrowRed} strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 320 220 L 320 280" fill="none" stroke={arrowRed} strokeWidth="4" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 3 */}
                <g opacity={activeStepIndex >= 2 ? 1 : 0.85}>
                  <rect x="20" y="350" width="640" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="375" fill="#0f172a" fontSize="13" fontWeight="bold">
                    3. Hold loop in teeth while pulling ends tight. Pull lines tight to finish.
                  </text>
                  <path d="M 45 425 L 285 425" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <path d="M 355 425 L 635 425" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  {/* Packed coils */}
                  <rect x="285" y="415" width="25" height="20" rx="4" fill={blueLine} stroke="#0f172a" strokeWidth="2" />
                  <rect x="330" y="415" width="25" height="20" rx="4" fill={blueLine} stroke="#0f172a" strokeWidth="2" />
                  {/* Standing Dropper Loop */}
                  <path d="M 310 425 L 310 330 C 310 310 330 310 330 330 L 330 425" fill="none" stroke="#0f172a" strokeWidth="8" />
                  <path d="M 310 425 L 310 330 C 310 310 330 310 330 330 L 330 425" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  <line x1="220" y1="425" x2="130" y2="425" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                  <line x1="420" y1="425" x2="510" y2="425" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              /* FOCUSED VIEW */
              <g>
                <path d="M 50 180 L 550 180" fill="none" stroke={blueLine} strokeWidth="6" />
                <path d="M 292 180 L 292 60 C 292 40 308 40 308 60 L 308 180" fill="none" stroke="#0f172a" strokeWidth="10" />
                <path d="M 292 180 L 292 60 C 292 40 308 40 308 60 L 308 180" fill="none" stroke={blueLine} strokeWidth="6" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            SURGEONS KNOT (Matches Ande Chart Bottom-Right)
        ------------------------------------------------------------- */}
        {knotId === 'surgeons-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Put line and leader side by side, overlapping at least six inches.
                  </text>
                  <path d="M 45 75 L 550 75" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 120 90 L 635 90" fill="none" stroke={yellowLine} strokeWidth="5" />
                </g>

                {/* Step 2 & 3 */}
                <g opacity={activeStepIndex >= 1 && activeStepIndex <= 2 ? 1 : 0.85}>
                  <rect x="20" y="140" width="640" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="165" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Take both lines together, tie an overhand knot. Pull ends through loop again.
                  </text>
                  {/* Doubled overhand loops */}
                  <ellipse cx="320" cy="240" rx="65" ry="45" fill="none" stroke="#0f172a" strokeWidth="10" />
                  <ellipse cx="320" cy="240" rx="65" ry="45" fill="none" stroke={blueLine} strokeWidth="5" />
                  <ellipse cx="320" cy="240" rx="72" ry="52" fill="none" stroke={yellowLine} strokeWidth="5" />
                  <path d="M 370 200 C 420 250 320 290 280 230" fill="none" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 4 */}
                <g opacity={activeStepIndex >= 3 ? 1 : 0.85}>
                  <rect x="20" y="350" width="640" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="375" fill="#0f172a" fontSize="13" fontWeight="bold">
                    4. Hold both sides and pull knot tight. Clip ends close.
                  </text>
                  <path d="M 45 425 L 290 425" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 350 425 L 635 425" fill="none" stroke={yellowLine} strokeWidth="5" />
                  <ellipse cx="320" cy="425" rx="22" ry="18" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
                  <path d="M 310 410 L 290 395" fill="none" stroke={yellowLine} strokeWidth="4" strokeLinecap="round" />
                  <path d="M 330 440 L 350 455" fill="none" stroke={blueLine} strokeWidth="4" strokeLinecap="round" />
                  <line x1="240" y1="425" x2="140" y2="425" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                  <line x1="400" y1="425" x2="500" y2="425" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              /* FOCUSED VIEW */
              <g>
                <path d="M 50 180 L 550 180" fill="none" stroke={blueLine} strokeWidth="6" />
                <ellipse cx="300" cy="180" rx="25" ry="20" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            BLOOD KNOT (Matches Ande Chart Center-Bottom)
        ------------------------------------------------------------- */}
        {knotId === 'blood-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex <= 2 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="210" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Cross lines and wrap each line 3 to 5 times. Bring each end back through center.
                  </text>
                  {/* Left Line A (Blue) */}
                  <path d="M 45 120 L 280 120" fill="none" stroke={blueLine} strokeWidth="5" />
                  {[290, 310, 330, 350].map((x, i) => (
                    <ellipse key={i} cx={x} cy="120" rx="7" ry="22" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  ))}
                  <path d="M 360 120 L 280 120 L 280 170" fill="none" stroke={blueLine} strokeWidth="4.5" strokeLinecap="round" />

                  {/* Right Line B (Yellow) */}
                  <path d="M 635 120 L 360 120" fill="none" stroke={yellowLine} strokeWidth="5" />
                  {[210, 230, 250, 270].map((x, i) => (
                    <ellipse key={i} cx={x} cy="120" rx="7" ry="22" fill="none" stroke={yellowLine} strokeWidth="4.5" />
                  ))}
                  <path d="M 200 120 L 280 120 L 280 70" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />

                  {/* Opposing center tuck arrows */}
                  <line x1="280" y1="130" x2="280" y2="165" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                  <line x1="280" y1="110" x2="280" y2="75" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 2 */}
                <g opacity={activeStepIndex >= 3 ? 1 : 0.85}>
                  <rect x="20" y="260" width="640" height="200" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="285" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Carefully pull both long ends of lines to tighten.
                  </text>
                  <path d="M 45 370 L 260 370" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 380 370 L 635 370" fill="none" stroke={yellowLine} strokeWidth="5" />
                  {/* Symmetrical interlocked barrel */}
                  <rect x="260" y="355" width="120" height="30" rx="6" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2.5" />
                  {[268, 278, 288, 298, 308].map((x, i) => (
                    <line key={i} x1={x} y1="357" x2={x+3} y2="383" stroke={blueLine} strokeWidth="3.5" />
                  ))}
                  {[328, 338, 348, 358, 368].map((x, i) => (
                    <line key={i} x1={x} y1="357" x2={x+3} y2="383" stroke={yellowLine} strokeWidth="3.5" />
                  ))}
                  <path d="M 316 355 L 316 335" fill="none" stroke={blueLine} strokeWidth="4" strokeLinecap="round" />
                  <path d="M 320 385 L 320 405" fill="none" stroke={yellowLine} strokeWidth="4" strokeLinecap="round" />
                  <line x1="180" y1="370" x2="80" y2="370" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                  <line x1="460" y1="370" x2="560" y2="370" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              <g>
                <path d="M 50 180 L 260 180" fill="none" stroke={blueLine} strokeWidth="6" />
                <path d="M 340 180 L 550 180" fill="none" stroke={yellowLine} strokeWidth="6" />
                <rect x="260" y="165" width="80" height="30" rx="6" fill={blueLine} stroke="#0f172a" strokeWidth="2.5" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            ALBRIGHT KNOT (ALBRIGHT SPECIAL)
        ------------------------------------------------------------- */}
        {knotId === 'albright-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Double back leader a few inches; insert about 10 inches of light line.
                  </text>
                  <path d="M 635 70 L 260 70 C 220 70 220 100 260 100 L 635 100" fill="none" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 635 70 L 260 70 C 220 70 220 100 260 100 L 635 100" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                  <path d="M 45 85 L 260 85 L 280 50" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />
                </g>

                {/* Step 2 & 3 */}
                <g opacity={activeStepIndex >= 1 && activeStepIndex <= 3 ? 1 : 0.85}>
                  <rect x="20" y="140" width="640" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="165" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2 &amp; 3. Wrap light line 10 turns back toward loop and run back through.
                  </text>
                  <path d="M 635 220 L 260 220 C 220 220 220 250 260 250 L 635 250" fill="none" stroke={blueLine} strokeWidth="6" strokeLinecap="round" />
                  {[270, 290, 310, 330, 350, 370, 390, 410, 430, 450].map((x, i) => (
                    <ellipse key={i} cx={x} cy="235" rx="8" ry="26" fill="none" stroke={yellowLine} strokeWidth="4.5" />
                  ))}
                  <path d="M 450 210 L 260 210 L 240 270" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 400 200 C 320 190 260 220 245 255" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 4 */}
                <g opacity={activeStepIndex >= 4 ? 1 : 0.85}>
                  <rect x="20" y="340" width="640" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="365" fill="#0f172a" fontSize="13" fontWeight="bold">
                    4. Pull both ends of leader, slide knot to loop. Pull tight.
                  </text>
                  <path d="M 635 410 L 370 410" fill="none" stroke={blueLine} strokeWidth="6" />
                  <path d="M 45 410 L 250 410" fill="none" stroke={yellowLine} strokeWidth="4.5" />
                  <rect x="250" y="392" width="120" height="36" rx="8" fill={yellowLine} stroke="#0f172a" strokeWidth="3" />
                  <line x1="180" y1="410" x2="80" y2="410" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                  <line x1="450" y1="410" x2="550" y2="410" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              <g>
                <path d="M 50 180 L 240 180" fill="none" stroke={yellowLine} strokeWidth="5" />
                <path d="M 340 180 L 550 180" fill="none" stroke={blueLine} strokeWidth="7" />
                <rect x="240" y="162" width="100" height="36" rx="8" fill={yellowLine} stroke="#0f172a" strokeWidth="3" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            SNELL KNOT (SNELLING A HOOK)
        ------------------------------------------------------------- */}
        {knotId === 'snell-knot' && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 */}
                <g opacity={activeStepIndex === 0 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. Thread about 6 inches of leader through hook eye and form a loop.
                  </text>
                  <circle cx="120" cy="100" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <circle cx="120" cy="100" r="6" fill="#f8fafc" />
                  <line x1="134" y1="100" x2="480" y2="100" stroke={hookSteel} strokeWidth="10" strokeLinecap="round" />
                  <path d="M 480 100 C 550 100 560 140 520 160" stroke={hookSteel} strokeWidth="10" fill="none" strokeLinecap="round" />
                  {/* Line entering eye and forming loop */}
                  <path d="M 45 100 L 105 100" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 134 100 L 320 100 C 380 100 400 150 340 150 C 260 150 200 130 180 100" fill="none" stroke={blueLine} strokeWidth="5" strokeLinecap="round" />
                </g>

                {/* Step 2 */}
                <g opacity={activeStepIndex >= 1 && activeStepIndex <= 2 ? 1 : 0.85}>
                  <rect x="20" y="180" width="640" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="205" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. Make 6 wraps with line end through loop &amp; around hook shank.
                  </text>
                  <circle cx="120" cy="260" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <line x1="134" y1="260" x2="480" y2="260" stroke={hookSteel} strokeWidth="10" strokeLinecap="round" />
                  <path d="M 480 260 C 550 260 560 300 520 320" stroke={hookSteel} strokeWidth="10" fill="none" strokeLinecap="round" />
                  {[220, 245, 270, 295, 320, 345].map((x, i) => (
                    <ellipse key={i} cx={x} cy="260" rx="8" ry="24" fill="none" stroke={blueLine} strokeWidth="4.5" />
                  ))}
                  <path d="M 350 250 C 400 240 420 280 370 290" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 3 & 4 */}
                <g opacity={activeStepIndex >= 3 ? 1 : 0.85}>
                  <rect x="20" y="350" width="640" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="375" fill="#0f172a" fontSize="13" fontWeight="bold">
                    3 &amp; 4. Pull main line tight until knot seats against eye. Finished knot.
                  </text>
                  <circle cx="120" cy="425" r="14" fill="none" stroke={hookSteel} strokeWidth="8" />
                  <line x1="134" y1="425" x2="480" y2="425" stroke={hookSteel} strokeWidth="10" strokeLinecap="round" />
                  <path d="M 480 425 C 550 425 560 465 520 485" stroke={hookSteel} strokeWidth="10" fill="none" strokeLinecap="round" />
                  {/* Snugged barrel on shank */}
                  <rect x="145" y="413" width="90" height="24" rx="6" fill={blueLine} stroke="#0f172a" strokeWidth="2.5" />
                  {[155, 168, 181, 194, 207, 220].map((x, i) => (
                    <line key={i} x1={x} y1="415" x2={x+3} y2="435" stroke="#ffffff" strokeWidth="2.5" />
                  ))}
                  <line x1="100" y1="425" x2="45" y2="425" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                  <text x="260" y="440" fill="#16a34a" fontSize="13" fontWeight="bold">Direct In-line Pull Leverage</text>
                </g>
              </g>
            ) : (
              <g>
                <circle cx="120" cy="180" r="18" fill="none" stroke={hookSteel} strokeWidth="10" />
                <line x1="138" y1="180" x2="460" y2="180" stroke={hookSteel} strokeWidth="12" strokeLinecap="round" />
                <path d="M 460 180 C 520 180 540 220 500 250" stroke={hookSteel} strokeWidth="12" fill="none" strokeLinecap="round" />
                <rect x="150" y="165" width="100" height="30" rx="6" fill={blueLine} stroke="#0f172a" strokeWidth="3" />
              </g>
            )}
          </g>
        )}

        {/* -------------------------------------------------------------
            UNI KNOT / DOUBLE UNI / FG KNOT / ARBOR KNOT / LOOP KNOT
            (Consistent Ande Pro-Fisherman Chart Style for remaining knots)
        ------------------------------------------------------------- */}
        {!['palomar-knot', 'improved-clinch-knot', 'dropper-loop', 'surgeons-knot', 'blood-knot', 'albright-knot', 'snell-knot'].includes(knotId) && (
          <g filter="url(#chartSoftShadow)">
            {viewMode === 'chart' ? (
              <g>
                {/* Step 1 & 2 */}
                <g opacity={activeStepIndex <= 1 ? 1 : 0.85}>
                  <rect x="20" y="20" width="640" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="45" fill="#0f172a" fontSize="13" fontWeight="bold">
                    1. {knot.steps[0]?.instruction || 'Double line and begin tying progression.'}
                  </text>
                  <path d="M 45 100 L 520 100" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 520 100 C 560 100 560 140 500 140 L 220 140" fill="none" stroke={yellowLine} strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 380 120 L 460 120" fill="none" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 3 */}
                <g opacity={activeStepIndex === 2 ? 1 : 0.85}>
                  <rect x="20" y="180" width="640" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="205" fill="#0f172a" fontSize="13" fontWeight="bold">
                    2. {knot.steps[1]?.instruction || knot.steps[2]?.instruction || 'Form wraps and cinch.'}
                  </text>
                  <path d="M 45 260 L 580 260" fill="none" stroke={blueLine} strokeWidth="5" />
                  {[240, 275, 310, 345, 380].map((x, i) => (
                    <ellipse key={i} cx={x} cy="260" rx="9" ry="24" fill="none" stroke={yellowLine} strokeWidth="4.5" />
                  ))}
                  <line x1="320" y1="230" x2="380" y2="230" stroke={arrowRed} strokeWidth="3" markerEnd="url(#andeArrowHead)" />
                </g>

                {/* Step 4 / Finished */}
                <g opacity={activeStepIndex >= 3 ? 1 : 0.85}>
                  <rect x="20" y="350" width="640" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="35" y="375" fill="#0f172a" fontSize="13" fontWeight="bold">
                    3. Moisten wraps, pull firmly until seated tight. Clip excess close.
                  </text>
                  <path d="M 45 425 L 300 425" fill="none" stroke={blueLine} strokeWidth="5" />
                  <path d="M 400 425 L 635 425" fill="none" stroke={yellowLine} strokeWidth="5" />
                  <rect x="300" y="410" width="100" height="30" rx="6" fill={blueLine} stroke="#0f172a" strokeWidth="2.5" />
                  {[310, 324, 338, 352, 366, 380].map((x, i) => (
                    <line key={i} x1={x} y1="412" x2={x+3} y2="438" stroke="#ffffff" strokeWidth="2.5" />
                  ))}
                  <line x1="220" y1="425" x2="120" y2="425" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                  <line x1="480" y1="425" x2="580" y2="425" stroke={arrowRed} strokeWidth="3.5" markerEnd="url(#andeArrowHead)" />
                </g>
              </g>
            ) : (
              <g>
                <path d="M 50 180 L 550 180" fill="none" stroke={blueLine} strokeWidth="6" />
                <rect x="240" y="165" width="120" height="30" rx="6" fill={blueLine} stroke="#0f172a" strokeWidth="2.5" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
