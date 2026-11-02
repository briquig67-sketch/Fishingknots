import React, { useState, useEffect, useRef } from 'react';
import { Knot, KnotStep } from '../types';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Gauge,
  CheckCircle2,
  Eye,
  Maximize2,
  Tv,
  Weight,
  Layers,
  BookOpen
} from 'lucide-react';
import { CompletedKnotSvg } from './CompletedKnotSvg';
import { KnotChartDiagram } from './KnotChartDiagram';

interface KnotSvgPlayerProps {
  knot: Knot;
  initialStep?: number;
  onStepChange?: (stepIndex: number) => void;
}

export const KnotSvgPlayer: React.FC<KnotSvgPlayerProps> = ({
  knot,
  initialStep = 0,
  onStepChange,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<0.5 | 1 | 1.5>(1); // 0.5x is slow motion
  const [displayMode, setDisplayMode] = useState<'chart' | 'animator' | 'completed'>('chart');
  const [animationProgress, setAnimationProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const totalSteps = knot.steps.length;
  const currentStep: KnotStep = knot.steps[currentStepIndex] || knot.steps[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync when initialStep changes from outside
  useEffect(() => {
    if (initialStep >= 0 && initialStep < totalSteps) {
      setCurrentStepIndex(initialStep);
    }
  }, [initialStep, totalSteps]);

  // Notify parent on step change
  useEffect(() => {
    onStepChange?.(currentStepIndex);
  }, [currentStepIndex, onStepChange]);

  // Step duration based on speed
  const stepDuration = Math.round(3500 / speed);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || displayMode === 'completed') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalTime = 50;
    const stepIncrement = intervalTime / stepDuration;

    timerRef.current = setInterval(() => {
      setAnimationProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 1) {
          setCurrentStepIndex((cur) => {
            if (cur >= totalSteps - 1) {
              setIsPlaying(false);
              return cur;
            }
            return cur + 1;
          });
          return 0;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, displayMode, stepDuration, totalSteps]);

  const handlePlayPause = () => {
    if (displayMode !== 'animator') {
      setDisplayMode('animator');
    }
    if (currentStepIndex >= totalSteps - 1 && !isPlaying) {
      setCurrentStepIndex(0);
      setAnimationProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setAnimationProgress(0);
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    setIsPlaying(false);
    setAnimationProgress(0);
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setIsPlaying(false);
    setAnimationProgress(0);
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleJumpToStep = (index: number) => {
    setIsPlaying(false);
    setAnimationProgress(0);
    setCurrentStepIndex(index);
    if (displayMode === 'completed') {
      setDisplayMode('animator');
    }
  };

  const toggleSpeed = () => {
    if (speed === 1) setSpeed(0.5);
    else if (speed === 0.5) setSpeed(1.5);
    else setSpeed(1);
  };

  const toggleZoom = () => {
    setZoomLevel((z) => (z === 1 ? 1.25 : 1));
  };

  return (
    <div className="flex flex-col rounded-2xl bg-white border border-slate-300 shadow-2xl overflow-hidden text-slate-800">
      {/* Mode Switcher Tabs (Pro Chart Mode vs Animator Mode vs Finished Knot) */}
      <div className="px-3 sm:px-4 py-2.5 bg-[#f1f5f9] border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl">
          <button
            onClick={() => {
              setDisplayMode('chart');
              setIsPlaying(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              displayMode === 'chart'
                ? 'bg-white text-teal-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Full Chart View</span>
          </button>

          <button
            onClick={() => {
              setDisplayMode('animator');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              displayMode === 'animator'
                ? 'bg-white text-teal-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Step Animator</span>
          </button>

          <button
            onClick={() => {
              setDisplayMode('completed');
              setIsPlaying(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              displayMode === 'completed'
                ? 'bg-white text-teal-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Finished Knot</span>
          </button>
        </div>

        {/* Speed / Zoom Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleSpeed}
            title="Toggle Slow-Motion (0.5x)"
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
              speed === 0.5
                ? 'bg-amber-100 text-amber-800 border-amber-300'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Gauge className="w-3.5 h-3.5 inline mr-1" />
            <span>{speed === 0.5 ? 'Slow-Mo (0.5x)' : '1.0x'}</span>
          </button>

          <button
            onClick={toggleZoom}
            title="Toggle zoom"
            className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Drawing Viewport */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[480px] bg-white flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden">
        {displayMode === 'completed' ? (
          <CompletedKnotSvg knotId={knot.id} className="w-full h-full border-0 shadow-none" showLabels={true} />
        ) : (
          <KnotChartDiagram
            knot={knot}
            activeStepIndex={currentStepIndex}
            viewMode={displayMode === 'chart' ? 'chart' : 'step'}
            isPlaying={isPlaying}
            zoomLevel={zoomLevel}
          />
        )}

        {/* Floating Active Step Callout when in animator mode */}
        {displayMode === 'animator' && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3.5 py-2.5 bg-black/75 backdrop-blur-sm rounded-lg text-white shadow-lg pointer-events-auto">
            <p className="text-xs sm:text-sm font-medium line-clamp-1 flex-1">
              <strong className="text-amber-300 font-bold mr-1.5">Step {currentStep.stepNumber}:</strong>
              {currentStep.instruction}
            </p>
            <span className="text-xs text-slate-300 font-bold shrink-0">
              {currentStepIndex + 1}/{totalSteps}
            </span>
          </div>
        )}

        {/* Auto-play progress line */}
        {isPlaying && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
            <div
              className="h-full bg-teal-500 transition-all duration-75"
              style={{ width: `${Math.round(animationProgress * 100)}%` }}
            />
          </div>
        )}
      </div>

      {/* Attributes Strip (Mono, Braid, Fluoro, Breaking Strength) */}
      <div className="px-4 py-2.5 bg-[#f8fafc] border-t border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider">Suitable Lines:</span>
          {knot.suitableLines.map((line) => (
            <span
              key={line}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-800"
            >
              {line}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
          <Weight className="w-3.5 h-3.5 text-slate-500" />
          <span>Strength: {knot.strengthRating}</span>
        </div>
      </div>

      {/* Big Action Button (Exact green button from screenshot) */}
      <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-2">
        <button
          onClick={handlePlayPause}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm tracking-wide uppercase transition shadow-md active:scale-[0.99] flex items-center justify-center gap-2 text-white ${
            isPlaying
              ? 'bg-amber-600 hover:bg-amber-500'
              : 'bg-[#2e7d32] hover:bg-[#256829]'
          }`}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{isPlaying ? 'PAUSE ANIMATION' : 'PLAY STEP-BY-STEP ANIMATION'}</span>
        </button>

        <button
          onClick={() => {
            setDisplayMode(displayMode === 'chart' ? 'animator' : 'chart');
          }}
          className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition border border-slate-300"
        >
          {displayMode === 'chart' ? 'Switch to Step Mode' : 'Switch to Chart Mode'}
        </button>
      </div>

      {/* Bottom Step Controller */}
      <div className="px-4 py-3 bg-white flex items-center justify-between gap-3">
        <div className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight min-w-[50px]">
          {currentStepIndex + 1}/{totalSteps}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            aria-label="Previous step"
            className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={handleRestart}
            aria-label="Restart"
            className="p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-500 transition hidden sm:inline-flex"
            title="Restart sequence"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-md active:scale-95 transition"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNextStep}
            disabled={currentStepIndex === totalSteps - 1}
            aria-label="Next step"
            className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Step indicator scrubber pills */}
        <div className="flex items-center gap-1">
          {knot.steps.map((st, i) => (
            <button
              key={st.stepNumber}
              onClick={() => handleJumpToStep(i)}
              className={`w-6 h-6 rounded-md text-[11px] font-bold transition flex items-center justify-center ${
                i === currentStepIndex
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st.stepNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
