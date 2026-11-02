export type Difficulty = 'Easy' | 'Medium' | 'Advanced';

export type KnotPurposeCategory = 'Terminal Tackle' | 'Line to Line' | 'Loops & Rigging' | 'Reel Spool';

export type LineType = 'Monofilament' | 'Fluorocarbon' | 'Braided Line' | 'Wire';

export interface KnotStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
  // SVG drawing configuration for this step
  svgViewBox?: string;
  standingLinePath: string;
  tagEndPath: string;
  secondaryLinePath?: string; // e.g. Leader B, Hook, or Spool
  hardware?: 'hook' | 'swivel' | 'spool' | 'leader' | 'dropper' | 'none';
  arrowPath?: string; // Directional movement arrow showing tag end motion
  arrowLabel?: string;
  loopAnnotation?: string;
  tensionArrows?: { x1: number; y1: number; x2: number; y2: number; label: string }[];
}

export interface Knot {
  id: string;
  name: string;
  alternativeNames?: string[];
  purpose: string;
  purposeCategory: KnotPurposeCategory;
  difficulty: Difficulty;
  difficultyScore: number; // 1 to 5
  strengthRating: string; // e.g., "95-100%", "90-95%"
  suitableLines: LineType[];
  lineSuitabilityNotes: string;
  bestUsedFor: string[];
  steps: KnotStep[];
  completedKnotDescription: string;
  proTips: string[];
  pros: string[];
  cons: string[];
}
