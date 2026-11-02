/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { KNOTS_DATA } from './data/knotsData';
import { Knot, Difficulty, KnotPurposeCategory } from './types';
import { KnotCard } from './components/KnotCard';
import { KnotDetailModal } from './components/KnotDetailModal';
import { LineReferenceModal } from './components/LineReferenceModal';
import { AndroidApkModal } from './components/AndroidApkModal';
import { QuizModal } from './components/QuizModal';
import { WallChartModal } from './components/WallChartModal';
import { PWAInstallButton } from './components/PWAInstallButton';
import { usePWAInstall } from './hooks/usePWAInstall';
import {
  Search,
  X,
  Compass,
  Heart,
  Award,
  Layers,
  HelpCircle,
  Smartphone,
  SlidersHorizontal,
  Anchor,
  Filter,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [selectedKnot, setSelectedKnot] = useState<Knot | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all'); // 'all' | 'Easy' | 'Medium' | 'Advanced' | 'favorites'
  const [selectedPurpose, setSelectedPurpose] = useState<string>('all'); // 'all' | KnotPurposeCategory
  const [showLineGuide, setShowLineGuide] = useState(false);
  const [showApkGuide, setShowApkGuide] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWallChart, setShowWallChart] = useState(false);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fishing_knots_favorites');
      return saved ? JSON.parse(saved) : ['palomar-knot', 'uni-knot'];
    } catch {
      return ['palomar-knot', 'uni-knot'];
    }
  });

  // Mastered knots state persisted in localStorage
  const [masteredKnots, setMasteredKnots] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fishing_knots_mastered');
      return saved ? JSON.parse(saved) : ['palomar-knot'];
    } catch {
      return ['palomar-knot'];
    }
  });

  const { isInstallable, install } = usePWAInstall();

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('fishing_knots_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Save mastered to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('fishing_knots_mastered', JSON.stringify(masteredKnots));
    } catch (e) {
      console.error(e);
    }
  }, [masteredKnots]);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleMastered = (id: string) => {
    setMasteredKnots((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtered knots based on search (name + purpose), difficulty category, purpose filter
  const filteredKnots = useMemo(() => {
    return KNOTS_DATA.filter((k) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        k.name.toLowerCase().includes(q) ||
        k.purpose.toLowerCase().includes(q) ||
        (k.alternativeNames && k.alternativeNames.some((alt) => alt.toLowerCase().includes(q))) ||
        k.suitableLines.some((l) => l.toLowerCase().includes(q)) ||
        k.bestUsedFor.some((u) => u.toLowerCase().includes(q));

      if (!matchSearch) return false;

      // Category filter (Difficulty or Favorites)
      if (activeCategory === 'favorites') {
        if (!favorites.includes(k.id)) return false;
      } else if (activeCategory !== 'all') {
        if (k.difficulty !== activeCategory) return false;
      }

      // Purpose filter
      if (selectedPurpose !== 'all') {
        if (k.purposeCategory !== selectedPurpose) return false;
      }

      return true;
    });
  }, [searchQuery, activeCategory, selectedPurpose, favorites]);

  const easyCount = KNOTS_DATA.filter((k) => k.difficulty === 'Easy').length;
  const mediumCount = KNOTS_DATA.filter((k) => k.difficulty === 'Medium').length;
  const advancedCount = KNOTS_DATA.filter((k) => k.difficulty === 'Advanced').length;

  return (
    <div className="min-h-screen bg-[#070e1e] text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Top Application Header */}
      <header className="sticky top-0 z-40 bg-[#0a142c]/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-3">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 p-0.5 shadow-md shadow-teal-500/25">
              <div className="w-full h-full bg-[#0a142c] rounded-[10px] flex items-center justify-center">
                <Anchor className="w-6 h-6 text-teal-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-none">
                  Fishing Knots Guide
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Android &amp; Offline
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                12 Essential Knots • Quick-Reference Chart &amp; Animations
              </p>
            </div>
          </div>

          {/* Action Tools & Installation */}
          <div className="flex items-center gap-2">
            {/* Quick Reference Chart Poster Button */}
            <button
              onClick={() => setShowWallChart(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-xs font-bold text-white shadow-sm transition active:scale-95"
              title="Open Pro-Fisherman's Knot Chart Poster"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-200" />
              <span>Reference Chart</span>
            </button>

            <button
              onClick={() => setShowQuiz(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-xs font-semibold text-slate-200 border border-slate-700 transition"
              title="Test your knot knowledge"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Knot Quiz</span>
            </button>

            <button
              onClick={() => setShowLineGuide(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-xs font-semibold text-slate-200 border border-slate-700 transition"
              title="View Fishing Line & Knot Matrix"
            >
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Line Matrix</span>
            </button>

            <PWAInstallButton onOpenApkModal={() => setShowApkGuide(true)} />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Hero Banner / Quick Overview */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0b1836] via-[#091b3d] to-[#071329] border border-teal-900/50 p-5 sm:p-7 overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
            <Compass className="w-64 h-64 text-teal-400" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                100% Offline Angler Reference
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pro-Fisherman's Illustrated Knot Guide
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Classic Quick-Reference Chart drawings with sky-blue monofilament, high-vis yellow leader lines, and crimson action loops. Toggle between full chart progression and interactive step animator.
            </p>

            {/* Quick Chart Shortcut Button */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowWallChart(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-sky-600/25 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-sky-200" />
                <span>View Full Knot Chart Poster</span>
              </button>
            </div>

            {/* Quick Stats Counter */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                <span className="text-white font-bold">{KNOTS_DATA.length}</span> Total Knots
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">{masteredKnots.length}</span> Mastered
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500" />
                <span className="text-rose-300 font-bold">{favorites.length}</span> Favorites
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search knots by name or purpose (e.g. Palomar, Albright, Braid to Leader, Lure Action)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#0a1530] border border-slate-800 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm text-white placeholder-slate-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Action Buttons on Mobile */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => setShowWallChart(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-600 text-xs font-bold text-white shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-200" />
                Chart
              </button>
              <button
                onClick={() => setShowLineGuide(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700"
              >
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                Line Guide
              </button>
            </div>
          </div>

          {/* Difficulty & Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                  activeCategory === 'all'
                    ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20'
                    : 'bg-[#0a1530] text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                All Knots (12)
              </button>

              <button
                onClick={() => setActiveCategory('Easy')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                  activeCategory === 'Easy'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                    : 'bg-[#0a1530] text-emerald-300/90 border-slate-800 hover:bg-slate-800'
                }`}
              >
                Easy ({easyCount})
              </button>

              <button
                onClick={() => setActiveCategory('Medium')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                  activeCategory === 'Medium'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-[#0a1530] text-amber-300/90 border-slate-800 hover:bg-slate-800'
                }`}
              >
                Medium ({mediumCount})
              </button>

              <button
                onClick={() => setActiveCategory('Advanced')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                  activeCategory === 'Advanced'
                    ? 'bg-rose-500 text-slate-950 border-rose-400'
                    : 'bg-[#0a1530] text-rose-300/90 border-slate-800 hover:bg-slate-800'
                }`}
              >
                Advanced ({advancedCount})
              </button>

              <button
                onClick={() => setActiveCategory('favorites')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                  activeCategory === 'favorites'
                    ? 'bg-rose-500 text-white border-rose-400'
                    : 'bg-[#0a1530] text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${activeCategory === 'favorites' ? 'fill-white' : 'text-rose-400'}`} />
                <span>Favorites ({favorites.length})</span>
              </button>
            </div>

            {/* Purpose Category Select */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 hidden lg:inline">Purpose:</span>
              <select
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-[#0a1530] border border-slate-800 text-xs font-semibold text-slate-200 focus:outline-none focus:border-teal-500"
              >
                <option value="all">All Purposes</option>
                <option value="Terminal Tackle">Terminal Tackle</option>
                <option value="Line to Line">Line to Line</option>
                <option value="Loops & Rigging">Loops &amp; Rigging</option>
                <option value="Reel Spool">Reel Spool</option>
              </select>
            </div>
          </div>
        </div>

        {/* Knots Grid Catalog */}
        {filteredKnots.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredKnots.map((knot) => (
              <KnotCard
                key={knot.id}
                knot={knot}
                isFavorite={favorites.includes(knot.id)}
                onToggleFavorite={toggleFavorite}
                onSelectKnot={setSelectedKnot}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[#091326] border border-slate-800 space-y-3">
            <Anchor className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No fishing knots found</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
              No knots match your current search query or filter. Try clearing the search or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedPurpose('all');
              }}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#070e1e] py-6 px-4 text-center text-xs text-slate-400 space-y-2">
        <p className="font-semibold text-slate-300">
          Fishing Knots Guide • Complete Standalone Offline Teaching Application
        </p>
        <p className="text-[11px] text-slate-500">
          All 12 knot sequences, SVG vector paths, and animations run 100% locally. Works in airplane mode on Android phones and tablets.
        </p>
      </footer>

      {/* Modals */}
      {selectedKnot && (
        <KnotDetailModal
          knot={selectedKnot}
          isFavorite={favorites.includes(selectedKnot.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedKnot(null)}
          isMastered={masteredKnots.includes(selectedKnot.id)}
          onToggleMastered={toggleMastered}
        />
      )}

      {showWallChart && (
        <WallChartModal
          onClose={() => setShowWallChart(false)}
          onSelectKnot={(k) => {
            setShowWallChart(false);
            setSelectedKnot(k);
          }}
        />
      )}

      {showLineGuide && (
        <LineReferenceModal onClose={() => setShowLineGuide(false)} />
      )}

      {showApkGuide && (
        <AndroidApkModal
          onClose={() => setShowApkGuide(false)}
          isInstallable={isInstallable}
          onInstall={install}
        />
      )}

      {showQuiz && (
        <QuizModal onClose={() => setShowQuiz(false)} />
      )}
    </div>
  );
}
