import { Knot } from '../types';

export const KNOTS_DATA: Knot[] = [
  {
    id: 'palomar-knot',
    name: 'Palomar Knot',
    alternativeNames: ['Chevalier Knot'],
    purpose: 'Attaching hooks, swivels, jigs, and lures to terminal fishing line with nearly 100% breaking strength.',
    purposeCategory: 'Terminal Tackle',
    difficulty: 'Easy',
    difficultyScore: 1,
    strengthRating: '95 - 100%',
    suitableLines: ['Braided Line', 'Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Exceptional for braided superlines because it does not slip where other knots fail. Also outstanding for monofilament and fluorocarbon.',
    bestUsedFor: [
      'Braided mainline to hooks or swivels',
      'Bass jigs and drop shot hooks',
      'Heavy saltwater terminal connections',
      'High-stress trolling lures'
    ],
    proTips: [
      'When pulling the loop over the hook, make sure it clears the entire lure/hook and seats around the eye, not the hook bend.',
      'Wet the lines generously with water or saliva before pulling tight to prevent friction burn, especially with fluorocarbon.',
      'Pull both the standing line and the tag end simultaneously and evenly to cinch the knot squarely.'
    ],
    pros: [
      'Near 100% breaking strength',
      'Virtually impossible to slip, even on slick braid',
      'Can be tied quickly in the dark or on a rocking boat',
      'Very few wraps required'
    ],
    cons: [
      'Requires a large loop that must pass over the entire hook or lure (inconvenient for huge multi-hook plugs or crankbaits)',
      'Consumes slightly more line length than a clinch knot'
    ],
    completedKnotDescription: 'A compact double-wrap collar seated flush against the hook eye with the tag end trimmed to 1/8 inch. The loop encircles the line stem securely without pinching.',
    steps: [
      {
        stepNumber: 1,
        title: 'Double line & pass through hook eye',
        instruction: 'Double approximately 4 to 6 inches of line to create a bight (loop). Pass the folded loop directly through the eye of the hook or swivel.',
        tip: 'If the hook eye is small, thread the single tag end through, then double back and pass it through again in the reverse direction.',
        hardware: 'hook',
        standingLinePath: 'M 60 120 L 220 120',
        tagEndPath: 'M 220 120 L 260 200 L 400 200',
        arrowPath: 'M 250 170 L 320 200 L 305 190',
        arrowLabel: 'Pass folded bight through hook eye'
      },
      {
        stepNumber: 2,
        title: 'Tie an open overhand knot',
        instruction: 'Tie a simple, loose overhand knot using the doubled line. Let the hook hang loosely suspended at the bottom of the loop.',
        tip: 'Do NOT cinch or tighten the overhand knot yet; keep the loop nice and wide.',
        hardware: 'hook',
        standingLinePath: 'M 60 100 C 140 100 180 140 230 140 C 270 140 310 100 360 100',
        tagEndPath: 'M 360 100 C 400 100 420 160 360 200 C 310 230 250 160 270 110',
        arrowPath: 'M 340 140 C 350 180 320 190 280 160',
        arrowLabel: 'Form loose overhand loop'
      },
      {
        stepNumber: 3,
        title: 'Pass loop around the entire hook',
        instruction: 'Take the loop of the doubled bight and fold it completely down and around the entire body of the hook or lure.',
        tip: 'Ensure the loop clears all hook barbs and sits above the hook eye around the standing lines.',
        hardware: 'hook',
        standingLinePath: 'M 60 120 L 240 120',
        tagEndPath: 'M 240 120 C 300 120 380 160 380 250 C 380 340 220 340 220 250 L 240 200',
        arrowPath: 'M 350 200 C 380 280 320 330 240 320',
        arrowLabel: 'Pass loop over hook body'
      },
      {
        stepNumber: 4,
        title: 'Moisten and cinch tight',
        instruction: 'Moisten the knot with water or saliva. Pull both the standing line and the tag end steadily in opposite directions from the hook.',
        tip: 'Watch the loop slide over the hook eye and settle into a neat double collar.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 245 200',
        tagEndPath: 'M 255 190 L 330 140',
        tensionArrows: [
          { x1: 200, y1: 200, x2: 120, y2: 200, label: 'Pull standing line' },
          { x1: 260, y1: 190, x2: 320, y2: 140, label: 'Pull tag end' },
          { x1: 270, y1: 220, x2: 270, y2: 280, label: 'Hook tension' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Trim the tag end',
        instruction: 'Inspect the seated knot to verify wraps do not cross awkwardly. Trim the tag end to approximately 1/8 inch (3 mm).',
        tip: 'Leave a tiny tag margin on braided line to account for initial bedding-in under high drag.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 250 200',
        tagEndPath: 'M 252 195 L 280 170',
        arrowLabel: 'Trim tag end to 1/8"'
      }
    ]
  },
  {
    id: 'improved-clinch-knot',
    name: 'Improved Clinch Knot',
    alternativeNames: ['Fisherman Knot', 'Trilene Variant'],
    purpose: 'The universal terminal knot for tying monofilament or fluorocarbon to hooks, lures, snaps, and swivels.',
    purposeCategory: 'Terminal Tackle',
    difficulty: 'Easy',
    difficultyScore: 1,
    strengthRating: '90 - 95%',
    suitableLines: ['Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Best with monofilament and fluorocarbon up to 30 lb test. Not recommended for slippery braided superlines or heavy mono >30 lb, where it tends to slip or bind.',
    bestUsedFor: [
      'Tying hooks, snaps, and swivels to mono leader',
      'Attaching spinners, spoons, and crankbaits',
      'Freshwater trout, bass, and panfish rigs',
      'Fly fishing tippet to dry flies and nymphs'
    ],
    proTips: [
      'Use 5 wraps for medium line (10-14 lb), 4 wraps for heavy line (15-25 lb), and 6-7 wraps for ultra-light line (2-6 lb).',
      'Never skip the final tuck through the large loop; that extra tuck is what makes it "Improved" and prevents slippage.',
      'Wet thoroughly before cinching to avoid heat friction which weakens mono.'
    ],
    pros: [
      'Very quick and intuitive to tie',
      'Compact profile that does not collect weed',
      'Can be tied with large lures or bulky plugs without passing the lure through a loop'
    ],
    cons: [
      'Can slip on slick braided lines',
      'Loses strength on heavy fluorocarbon (>30 lb) because the thick coils do not seat smoothly'
    ],
    completedKnotDescription: 'A smooth spiral of neat parallel wraps stacked cleanly above the hook eye with a clipped tag end pointing slightly rearward.',
    steps: [
      {
        stepNumber: 1,
        title: 'Pass tag end through eye',
        instruction: 'Thread the tag end through the hook eye and pull approximately 5 to 6 inches of line through.',
        hardware: 'hook',
        standingLinePath: 'M 60 150 L 250 150',
        tagEndPath: 'M 250 150 C 265 180 265 210 250 220 L 380 220',
        arrowPath: 'M 240 180 L 320 220 L 305 210',
        arrowLabel: 'Thread 5-6 inches through eye'
      },
      {
        stepNumber: 2,
        title: 'Make 5 to 7 spiral wraps',
        instruction: 'Wrap the tag end around the standing line 5 to 7 times, working away from the hook eye.',
        tip: 'Keep the coils loose enough that you retain an open loop right next to the hook eye.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 245 200',
        tagEndPath: 'M 245 200 C 255 160 270 240 285 160 C 300 240 315 160 330 240 C 345 160 360 240 375 160 L 440 160',
        arrowPath: 'M 360 160 C 390 140 420 150 430 180',
        arrowLabel: 'Wrap 5 to 7 times around standing line'
      },
      {
        stepNumber: 3,
        title: 'Pass through the small eye loop',
        instruction: 'Bring the tag end back and thread it through the small initial loop formed right above the eye of the hook.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 245 200',
        tagEndPath: 'M 400 160 C 360 120 280 120 255 180 L 265 210',
        arrowPath: 'M 320 130 C 280 130 260 160 255 190',
        arrowLabel: 'Feed through loop at hook eye'
      },
      {
        stepNumber: 4,
        title: 'Tuck through the large secondary loop',
        instruction: 'Pass the tag end back through the large outside loop you just created in Step 3. Hold the tag end so it does not slip out.',
        tip: 'This extra tuck is the "improvement" that locks the knot.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 245 200',
        tagEndPath: 'M 265 210 C 280 250 330 260 360 210 L 340 160',
        arrowPath: 'M 300 250 C 340 245 355 200 345 170',
        arrowLabel: 'Tuck back through the large loop'
      },
      {
        stepNumber: 5,
        title: 'Moisten, slide tight, and trim',
        instruction: 'Moisten the wraps with water. Pull the standing line firmly while guiding the coils down to pack neatly against the hook eye. Trim the tag end to 1/8 inch.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 250 200',
        tagEndPath: 'M 255 190 L 285 170',
        tensionArrows: [
          { x1: 210, y1: 200, x2: 120, y2: 200, label: 'Pull standing line firmly' }
        ]
      }
    ]
  },
  {
    id: 'uni-knot',
    name: 'Uni Knot',
    alternativeNames: ['Duncan Loop', 'Grinner Knot'],
    purpose: 'The most versatile all-around fishing knot. Can attach terminal tackle, join lines, or spool reels with reliable strength.',
    purposeCategory: 'Terminal Tackle',
    difficulty: 'Easy',
    difficultyScore: 2,
    strengthRating: '90 - 95%',
    suitableLines: ['Monofilament', 'Fluorocarbon', 'Braided Line'],
    lineSuitabilityNotes: 'Performs reliably with all line materials. For braided line, increase the internal wraps from 5 to 7-8 to ensure maximum grip without slippage.',
    bestUsedFor: [
      'Attaching hooks, swivels, and lures in fresh & saltwater',
      'Can be left slightly loose to act as a loop knot for lures',
      'Foundation for the Double Uni line-to-line knot',
      'Spooling line onto spinning and casting reels'
    ],
    proTips: [
      'For braided lines, make 7 or 8 wraps through the loop; for mono or fluoro, 5 wraps are optimal.',
      'To make a loop knot for lure action, cinch the uni knot tight on itself but stop 1/4 inch before the hook eye.',
      'Keep finger pressure on the loop as you make each wrap so the coils do not overlap.'
    ],
    pros: [
      'Works consistently across braid, mono, and fluorocarbon',
      'Retains high tensile strength',
      'Once learned, solves 80% of all fishing connection needs'
    ],
    cons: [
      'Slightly bulkier than an improved clinch knot',
      'Requires dexterity to keep the open circle open while wrapping'
    ],
    completedKnotDescription: 'A clean cylindrical barrel of 5 to 6 coils wrapped snugly around the standing line, snugged flush against the hook eye.',
    steps: [
      {
        stepNumber: 1,
        title: 'Pass line through eye & double back',
        instruction: 'Pass the tag end through the hook eye and pull out about 6 inches. Lay the tag end parallel alongside the standing line.',
        hardware: 'hook',
        standingLinePath: 'M 60 160 L 250 160',
        tagEndPath: 'M 250 160 C 265 190 265 210 250 220 L 420 220',
        arrowPath: 'M 280 220 L 360 220 L 345 210',
        arrowLabel: 'Double back parallel to standing line'
      },
      {
        stepNumber: 2,
        title: 'Fold tag end to form an open loop',
        instruction: 'Fold the tag end back toward the hook eye, creating an open circular loop alongside the double line.',
        tip: 'Pinch the base of the loop between your left thumb and index finger.',
        hardware: 'hook',
        standingLinePath: 'M 60 170 L 250 170 L 440 170',
        tagEndPath: 'M 440 170 C 470 170 480 250 440 270 C 400 290 320 290 300 230',
        arrowPath: 'M 440 210 C 440 260 380 270 340 250',
        arrowLabel: 'Form open loop alongside double line'
      },
      {
        stepNumber: 3,
        title: 'Wrap through loop 5 to 6 times',
        instruction: 'Wrap the tag end around both the standing line and the inside of the loop 5 to 6 times (7 to 8 for braid).',
        hardware: 'hook',
        standingLinePath: 'M 60 170 L 250 170 L 440 170',
        tagEndPath: 'M 320 230 C 330 150 360 240 370 150 C 380 240 390 150 400 240 C 410 150 420 240 430 190',
        arrowPath: 'M 350 200 C 370 160 390 220 410 170',
        arrowLabel: '5-6 wraps through the loop'
      },
      {
        stepNumber: 4,
        title: 'Moisten and snug the barrel',
        instruction: 'Moisten the line with saliva or water. Pull the tag end steadily until the wraps form a neat, snug barrel around the standing line.',
        hardware: 'hook',
        standingLinePath: 'M 60 170 L 250 170 L 440 170',
        tagEndPath: 'M 340 180 L 380 130',
        tensionArrows: [
          { x1: 340, y1: 170, x2: 380, y2: 120, label: 'Snug the coils' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Slide barrel to hook eye & trim',
        instruction: 'Hold the hook and pull the standing line to slide the barrel down until it seats securely against the eye. Trim the tag end to 1/8 inch.',
        hardware: 'hook',
        standingLinePath: 'M 60 170 L 250 170',
        tagEndPath: 'M 255 160 L 280 130',
        tensionArrows: [
          { x1: 190, y1: 170, x2: 100, y2: 170, label: 'Slide knot down to eye' }
        ]
      }
    ]
  },
  {
    id: 'loop-knot',
    name: 'Loop Knot',
    alternativeNames: ['Non-Slip Mono Loop', 'Kreh Loop', 'Rapala Knot'],
    purpose: 'Provides a non-cinching open loop at the lure or fly eye, granting artificial lures maximum swimming articulation and lifelike action.',
    purposeCategory: 'Loops & Rigging',
    difficulty: 'Medium',
    difficultyScore: 2,
    strengthRating: '90 - 95%',
    suitableLines: ['Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Ideal for mono and fluoro leaders. Creates a stiff, durable loop that prevents the line from binding down on crankbaits, topwater plugs, and streamers.',
    bestUsedFor: [
      'Hard body crankbaits, jerkbaits, and poppers',
      'Walking the dog topwater lures',
      'Saltwater jigs and bucktails',
      'Fly fishing streamers and saltwater patterns'
    ],
    proTips: [
      'Tie the initial overhand knot small and as close to the hook eye as possible (about 1.5 to 2 inches) to keep the final loop small.',
      'Always enter the overhand knot on the same side it exited in step 3; crossing sides will weaken the knot.',
      'Test the loop size before final cinch to ensure it cannot hook over the front treble hook.'
    ],
    pros: [
      'Increases lure action dramatically compared to tight knots',
      'Maintains 90%+ breaking strength without slipping',
      'Does not cinch closed under heavy strike pressure'
    ],
    cons: [
      'Requires precise positioning of the initial overhand knot',
      'Not suitable for hooksets where in-line leverage is required (like punching or circle hooks)'
    ],
    completedKnotDescription: 'A clean, fixed open teardrop loop passing freely through the lure eye, terminated by a compact 4-wrap cinch barrel.',
    steps: [
      {
        stepNumber: 1,
        title: 'Tie an open overhand knot in leader',
        instruction: 'Tie a simple overhand knot in the leader approximately 3 to 4 inches from the tag end. Leave the knot open and loose.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 200 200 C 230 170 260 230 220 230 C 190 230 190 170 240 170 L 320 170',
        tagEndPath: 'M 320 170 L 420 170',
        arrowPath: 'M 210 160 C 240 150 250 190 220 220',
        arrowLabel: 'Leave overhand knot loose'
      },
      {
        stepNumber: 2,
        title: 'Pass tag end through lure eye',
        instruction: 'Feed the tag end through the eye of your lure or hook, pulling about 3 inches through.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 200 200 C 230 170 260 230 220 230 C 190 230 190 170 240 170 L 320 170',
        tagEndPath: 'M 320 170 L 390 170 C 410 190 410 210 390 220 L 330 220',
        arrowPath: 'M 360 170 L 410 190 L 360 220',
        arrowLabel: 'Thread through lure eye'
      },
      {
        stepNumber: 3,
        title: 'Thread back through overhand knot',
        instruction: 'Pass the tag end back through the center of the open overhand knot, entering from the SAME side it exited.',
        tip: 'CRITICAL: Entering the wrong side turns this into a weaker Granny knot.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 200 200 C 230 170 260 230 220 230 C 190 230 190 170 240 170 L 320 170',
        tagEndPath: 'M 330 220 L 230 210 L 210 190 L 170 140',
        arrowPath: 'M 270 220 L 215 195 L 180 150',
        arrowLabel: 'Enter same side of overhand loop'
      },
      {
        stepNumber: 4,
        title: 'Wrap 3 to 4 times around standing line',
        instruction: 'Wrap the tag end around the standing line 3 to 4 times, working back up away from the overhand knot.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 200 200',
        tagEndPath: 'M 170 140 C 150 180 130 130 110 180 C 95 130 80 180 90 220',
        arrowPath: 'M 160 140 C 130 130 100 150 90 210',
        arrowLabel: '3-4 wraps around standing line'
      },
      {
        stepNumber: 5,
        title: 'Pass back through overhand knot again',
        instruction: 'Bring the tag end back down and feed it through the center of the overhand knot once more, entering alongside the loop strand.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 200 200',
        tagEndPath: 'M 90 220 L 150 230 L 210 200 L 230 170',
        arrowPath: 'M 130 225 L 205 205 L 230 175',
        arrowLabel: 'Back through the overhand knot'
      },
      {
        stepNumber: 6,
        title: 'Moisten and pull tight to set loop',
        instruction: 'Moisten thoroughly. Hold the lure with one hand, and pull firmly on the standing line and tag end simultaneously. The knot cinches tight, preserving a permanent open loop.',
        hardware: 'hook',
        standingLinePath: 'M 60 200 L 180 200',
        tagEndPath: 'M 195 190 L 210 150',
        tensionArrows: [
          { x1: 160, y1: 200, x2: 90, y2: 200, label: 'Pull standing line' },
          { x1: 350, y1: 200, x2: 420, y2: 200, label: 'Pull lure' }
        ]
      }
    ]
  },
  {
    id: 'fg-knot',
    name: 'FG Knot',
    alternativeNames: ['Fine Gripping Knot', 'Sebile Knot Variant'],
    purpose: 'The ultimate ultra-slim line-to-line knot for connecting braided mainline to fluorocarbon or monofilament leader. Flows silently through micro rod guides.',
    purposeCategory: 'Line to Line',
    difficulty: 'Advanced',
    difficultyScore: 5,
    strengthRating: '98 - 100%',
    suitableLines: ['Braided Line', 'Fluorocarbon', 'Monofilament'],
    lineSuitabilityNotes: 'Specifically engineered for thin Braid mainline to thicker Fluorocarbon/Mono leader. Retains essentially 100% linear test strength.',
    bestUsedFor: [
      'Inshore and offshore saltwater casting rigs',
      'Bass casting rods with micro-guides',
      'Jigging and popping for GT, Tuna, and Kingfish',
      'Any setup where the knot passes through guide rings on cast'
    ],
    proTips: [
      'Keep heavy tension on the braided line (hold it in your teeth or spool between knees) while weaving the leader.',
      'You MUST pull with extreme tension during the bedding step until the fluorocarbon turns cloudy/translucent—that indicates the braid has bitten into the mono.',
      'Trim the fluorocarbon tag end very close, and mushroom the tip with a lighter flame for extra insurance.'
    ],
    pros: [
      'Slenderest knot known—no doubled leader',
      'Highest breaking strength of any braid-to-leader connection (up to 100%)',
      'Does not slap or damage ceramic rod guides'
    ],
    cons: [
      'Requires practice, hand tension, and patience to tie properly',
      'Difficult to tie in high wind or on small choppy vessels without a knot tension tool'
    ],
    completedKnotDescription: 'A long, sleek, cylindrical Chinese-finger-trap sleeve of 18-20 cross-woven braid coils locked by stacked half-hitches with a trimmed leader.',
    steps: [
      {
        stepNumber: 1,
        title: 'Tension braid & position leader',
        instruction: 'Maintain firm tension on the braided mainline. Lay the fluorocarbon leader across the braid at a 90-degree angle, about 6 inches from the leader end.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 540 200',
        tagEndPath: 'M 300 60 L 300 340',
        arrowPath: 'M 280 120 L 320 200 L 280 280',
        arrowLabel: 'Tension braid; cross leader at 90°'
      },
      {
        stepNumber: 2,
        title: 'Weave 16 to 20 alternating wraps',
        instruction: 'Wrap the braid tag over the leader from the top, then bring it under and wrap from the bottom in alternating figure-eight crisscrosses (16 to 20 total wraps).',
        tip: 'Each wrap must spiral tightly around the leader core without overlapping.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 220 200 L 400 200',
        tagEndPath: 'M 220 180 C 240 230 260 170 280 230 C 300 170 320 230 340 170 C 360 230 380 170 400 220',
        arrowPath: 'M 310 150 C 340 220 370 170 390 230',
        arrowLabel: '16-20 alternating cross-weaves'
      },
      {
        stepNumber: 3,
        title: 'Lock weave with a half hitch',
        instruction: 'Tie a half hitch with the braid tag end around BOTH the braid mainline and the fluorocarbon leader to secure the weave.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 400 200',
        tagEndPath: 'M 400 200 C 430 160 450 240 420 250 L 410 205',
        arrowPath: 'M 420 170 C 440 210 435 240 415 215',
        arrowLabel: 'Lock with half-hitch over both strands'
      },
      {
        stepNumber: 4,
        title: 'Bed and cinch the weave under heavy tension',
        instruction: 'Wrap the braid around one gloved hand and the leader around the other. Pull with heavy, steady tension until the weave compacts and the leader turns translucent.',
        tip: 'If the braid slips during this step, restart—the weave must bite into the leader.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 400 200',
        tagEndPath: 'M 410 200 L 470 160',
        tensionArrows: [
          { x1: 200, y1: 200, x2: 80, y2: 200, label: 'Heavy pull on braid' },
          { x1: 420, y1: 200, x2: 520, y2: 200, label: 'Heavy pull on leader' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Add alternating half hitches & finish',
        instruction: 'Tie 3 to 4 alternating half hitches over both lines. Trim the fluorocarbon tag end flush. Finish with 3 half hitches over the braid line only.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 380 200 L 540 200',
        tagEndPath: 'M 420 200 L 440 170',
        arrowLabel: 'Trim leader tag; finish hitches'
      }
    ]
  },
  {
    id: 'double-uni-knot',
    name: 'Double Uni Knot',
    alternativeNames: ['Uni-to-Uni Knot'],
    purpose: 'Joining two fishing lines of similar or moderately differing diameters (e.g., braid mainline to monofilament/fluorocarbon leader).',
    purposeCategory: 'Line to Line',
    difficulty: 'Medium',
    difficultyScore: 3,
    strengthRating: '90 - 95%',
    suitableLines: ['Braided Line', 'Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Excellent for joining braid to mono/fluoro. Easy to learn and dependable in all fishing conditions.',
    bestUsedFor: [
      'Braid mainline to monofilament or fluorocarbon leader',
      'Connecting line backing on reels',
      'Quick leader replacements on moving boats',
      'Freshwater and light-to-medium saltwater angling'
    ],
    proTips: [
      'Use 7-8 wraps on the braided line side and 4-5 wraps on the monofilament/fluorocarbon side.',
      'Moisten both knots thoroughly before pulling them together so they slide smoothly without friction abrasion.',
      'When pulling the standing lines to jam the two knots, watch them butt snugly together without cocking sideways.'
    ],
    pros: [
      'Much easier to learn and tie than the FG Knot',
      'Very reliable under shock loads',
      'Can be tied in windy conditions with cold fingers'
    ],
    cons: [
      'Noticeably thicker than an FG knot; can click against small rod guides',
      'Not ideal for very heavy leader connections (>50 lb)'
    ],
    completedKnotDescription: 'Two compact multi-turn uni barrels jammed firmly head-to-head against each other with clean tag ends clipped flush.',
    steps: [
      {
        stepNumber: 1,
        title: 'Overlap the two lines',
        instruction: 'Overlap the ends of the mainline and leader by about 6 to 8 inches, pointing in opposite directions.',
        hardware: 'leader',
        standingLinePath: 'M 60 170 L 520 170',
        tagEndPath: 'M 80 230 L 540 230',
        arrowPath: 'M 200 150 L 360 150',
        arrowLabel: 'Overlap lines by 6-8 inches'
      },
      {
        stepNumber: 2,
        title: 'Tie first Uni knot with Line A',
        instruction: 'Take the tag end of Line A, form an open circle over both strands, and wrap through the loop 4 to 5 times (7-8 if braid).',
        hardware: 'leader',
        standingLinePath: 'M 60 170 L 360 170',
        tagEndPath: 'M 360 170 C 400 130 460 210 400 250 C 370 230 350 160 360 200 L 380 200',
        arrowPath: 'M 420 160 C 440 200 400 240 370 210',
        arrowLabel: 'Wrap Line A through loop 4-5 times'
      },
      {
        stepNumber: 3,
        title: 'Snug the first Uni knot',
        instruction: 'Moisten and pull Line A\'s tag end to snug down the first uni knot around the standing leader.',
        hardware: 'leader',
        standingLinePath: 'M 60 170 L 360 170',
        tagEndPath: 'M 360 170 L 390 130',
        tensionArrows: [
          { x1: 360, y1: 170, x2: 390, y2: 120, label: 'Snug first knot' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Tie second Uni knot with Line B',
        instruction: 'Form a loop with Line B\'s tag end over both lines and wrap 4 to 5 times through the loop in the opposite direction.',
        hardware: 'leader',
        standingLinePath: 'M 220 230 L 540 230',
        tagEndPath: 'M 220 230 C 180 270 120 190 180 150 C 210 170 230 240 220 200 L 200 200',
        arrowPath: 'M 160 240 C 140 200 180 160 210 190',
        arrowLabel: 'Wrap Line B through loop 4-5 times'
      },
      {
        stepNumber: 5,
        title: 'Moisten, slide together, and trim',
        instruction: 'Moisten both knots thoroughly. Pull the two standing lines in opposite directions. The two uni knots will slide along the line and butt tightly together. Trim both tag ends.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 280 200',
        tagEndPath: 'M 310 200 L 540 200',
        tensionArrows: [
          { x1: 240, y1: 200, x2: 100, y2: 200, label: 'Pull standing line A' },
          { x1: 350, y1: 200, x2: 490, y2: 200, label: 'Pull standing line B' }
        ]
      }
    ]
  },
  {
    id: 'albright-knot',
    name: 'Albright Knot',
    alternativeNames: ['Albright Special'],
    purpose: 'Connecting two lines of unequal diameter, particularly heavy monofilament/fluorocarbon or wire leader to lighter braid or monofilament mainline.',
    purposeCategory: 'Line to Line',
    difficulty: 'Medium',
    difficultyScore: 3,
    strengthRating: '90 - 95%',
    suitableLines: ['Braided Line', 'Monofilament', 'Fluorocarbon', 'Wire'],
    lineSuitabilityNotes: 'Outstanding for connecting light mainline to heavy shock or bite leaders (e.g., 20 lb braid to 60-80 lb fluorocarbon or single-strand wire).',
    bestUsedFor: [
      'Saltwater big game bite leaders (Tarpon, Shark, Kingfish)',
      'Fly line to backing or fly line to heavy butt section',
      'Heavy shock leaders for surf casting',
      'Braid to wire or heavy mono/fluoro'
    ],
    proTips: [
      'Wrap the light line neatly down the loop toward the bend—do not allow the wraps to overlap or ride over each other.',
      'CRITICAL: The tag end of the light line must exit the heavy loop on the EXACT same side it entered in step 2.',
      'Work the wraps slowly toward the loop tip while pulling the standing line and tag with even tension.'
    ],
    pros: [
      'Very strong when joining vastly different line diameters',
      'Can be tied into single-strand wire loops',
      'Smooth tapered shape passes through guides reasonably well'
    ],
    cons: [
      'If light line exits the wrong side of the loop, the knot will pull free under load',
      'Requires neat spiral wrapping with steady finger tension'
    ],
    completedKnotDescription: 'A smooth cone of 10 tight spiral wraps binding a doubled bight of heavy leader line, exiting cleanly with trimmed tags.',
    steps: [
      {
        stepNumber: 1,
        title: 'Bend a loop in the heavy leader',
        instruction: 'Bend approximately 3 to 4 inches of the heavy leader into a simple loop (bight) and hold it pinched between your thumb and index finger.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 220 200 C 260 200 280 230 260 250 L 60 250',
        tagEndPath: 'M 480 225 L 340 225',
        arrowPath: 'M 180 200 C 270 200 270 250 180 250',
        arrowLabel: 'Form 3-4 inch loop in heavy line'
      },
      {
        stepNumber: 2,
        title: 'Pass light line through loop',
        instruction: 'Feed the tag end of the lighter mainline through the inside of the loop from bottom to top, pulling about 8 inches through.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 240 200 C 265 200 265 240 240 240 L 60 240',
        tagEndPath: 'M 480 220 L 250 220 L 230 160 L 260 140',
        arrowPath: 'M 350 220 L 245 220 L 235 155',
        arrowLabel: 'Feed through loop from bottom'
      },
      {
        stepNumber: 3,
        title: 'Wrap light line 10 times around loop',
        instruction: 'Wrap the lighter line tightly around both strands of the heavy loop, wrapping toward the closed end of the loop for 8 to 10 wraps.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 240 200 C 260 200 260 240 240 240 L 60 240',
        tagEndPath: 'M 220 180 C 210 260 195 180 180 260 C 165 180 150 260 135 180 C 120 260 105 180 90 260 L 70 220',
        arrowPath: 'M 210 180 C 180 160 140 160 110 180',
        arrowLabel: 'Wrap 8-10 times toward loop end'
      },
      {
        stepNumber: 4,
        title: 'Exit loop through the same side',
        instruction: 'Pass the tag end of the lighter line back through the heavy loop so that it exits on the EXACT SAME side it entered.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 240 200 C 260 200 260 240 240 240 L 60 240',
        tagEndPath: 'M 80 220 L 235 220 L 260 270',
        arrowPath: 'M 140 220 L 240 220 L 265 270',
        arrowLabel: 'Exit on SAME side as entry'
      },
      {
        stepNumber: 5,
        title: 'Moisten, slide wraps, and cinch',
        instruction: 'Moisten the wraps. Hold both heavy line strands and pull the light standing line and tag end simultaneously. Guide the wraps to slide smoothly toward the bend. Trim both tags.',
        hardware: 'leader',
        standingLinePath: 'M 60 220 L 210 220',
        tagEndPath: 'M 270 220 L 480 220',
        tensionArrows: [
          { x1: 150, y1: 220, x2: 60, y2: 220, label: 'Pull heavy strands' },
          { x1: 340, y1: 220, x2: 450, y2: 220, label: 'Pull light line' }
        ]
      }
    ]
  },
  {
    id: 'surgeons-knot',
    name: "Surgeon's Knot",
    alternativeNames: ["Triple Surgeon's Knot", "Double Surgeon's"],
    purpose: 'The quickest and simplest line-to-line knot for joining monofilament or fluorocarbon tippet to leader, even in freezing weather or dim light.',
    purposeCategory: 'Line to Line',
    difficulty: 'Easy',
    difficultyScore: 1,
    strengthRating: '90 - 95%',
    suitableLines: ['Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Best suited for monofilament and fluorocarbon lines of equal or slightly different diameters. The Triple Surgeon (3 passes) is recommended for modern fluorocarbon.',
    bestUsedFor: [
      'Fly fishing leader-to-tippet connections',
      'Adding fresh tippet to tapered fly leaders',
      'Quick line repairs while wading in streams',
      'Cold weather fishing where fine dexterity is reduced'
    ],
    proTips: [
      'Pass the lines through 3 times (Triple Surgeon) rather than 2 for fluorocarbon to prevent slippage.',
      'Wet the knot thoroughly before pulling—pulling dry mono friction-burns and severely weakens the material.',
      'Pull all four strands (standing leader, standing tippet, and both tags) simultaneously to ensure even coil distribution.'
    ],
    pros: [
      'Fastest line-to-line knot in existence',
      'Easy to tie with gloves on or cold hands',
      'Maintains over 90% strength with fluorocarbon'
    ],
    cons: [
      'Requires drawing the entire tippet spool through the loop',
      'Slightly bulkier than a blood knot'
    ],
    completedKnotDescription: 'A compact, tight spherical barrel knot with two trimmed tags pointing in opposite directions along the line axis.',
    steps: [
      {
        stepNumber: 1,
        title: 'Overlap leader and tippet',
        instruction: 'Lay the leader line and tippet line side by side, overlapping by about 6 to 8 inches, pointing in opposite directions.',
        hardware: 'leader',
        standingLinePath: 'M 60 180 L 520 180',
        tagEndPath: 'M 80 220 L 540 220',
        arrowPath: 'M 180 150 L 360 150',
        arrowLabel: 'Overlap lines by 6-8 inches'
      },
      {
        stepNumber: 2,
        title: 'Form an open circle with both lines',
        instruction: 'Treating both lines together as a single strand, form a simple open loop.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 200 200 C 230 140 370 140 400 200 L 540 200',
        tagEndPath: 'M 60 215 L 200 215 C 230 155 370 155 400 215 L 540 215',
        arrowPath: 'M 250 140 C 300 120 350 140 360 170',
        arrowLabel: 'Form open loop with both lines'
      },
      {
        stepNumber: 3,
        title: 'Pass ends through loop 2 to 3 times',
        instruction: 'Pass both the tag end of the leader and the entire tippet through the loop together 2 times (Double Surgeon) or 3 times (Triple Surgeon).',
        hardware: 'leader',
        standingLinePath: 'M 200 200 C 250 250 350 250 400 200',
        tagEndPath: 'M 240 220 C 260 260 300 260 320 220 C 330 250 360 250 370 220',
        arrowPath: 'M 260 190 C 280 250 320 250 340 200',
        arrowLabel: 'Pass ends through loop 3 times'
      },
      {
        stepNumber: 4,
        title: 'Moisten and cinch all four ends',
        instruction: 'Moisten the knot thoroughly. Hold the leader and tippet on the left, and both tag ends on the right. Pull all four ends evenly and steadily until the coils cinch into a tight barrel.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 260 200',
        tagEndPath: 'M 340 200 L 540 200',
        tensionArrows: [
          { x1: 220, y1: 200, x2: 100, y2: 200, label: 'Pull left strands' },
          { x1: 380, y1: 200, x2: 500, y2: 200, label: 'Pull right strands' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Trim both tag ends',
        instruction: 'Inspect the compact knot to ensure wraps are seated. Trim both tag ends close (approx 1/16 inch / 1.5 mm).',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 290 200',
        tagEndPath: 'M 310 200 L 540 200',
        arrowLabel: 'Trim both tags to 1/16"'
      }
    ]
  },
  {
    id: 'snell-knot',
    name: 'Snell Knot',
    alternativeNames: ['Uni Snell', 'Rankin Snell'],
    purpose: 'Attaching leader directly to the shank of eyed or spade-end hooks, providing direct in-line hookset penetration leverage.',
    purposeCategory: 'Terminal Tackle',
    difficulty: 'Medium',
    difficultyScore: 3,
    strengthRating: '95 - 100%',
    suitableLines: ['Monofilament', 'Fluorocarbon', 'Braided Line'],
    lineSuitabilityNotes: 'Works exceptionally well with heavy monofilament, fluorocarbon, and heavy braided line for live baiting and flipping/pitching heavy cover.',
    bestUsedFor: [
      'Circle hooks for saltwater live baiting (Tuna, Striped Bass, Sailfish)',
      'Heavy cover bass flipping and punching with straight-shank hooks',
      'Catfish and carp live bait rigs',
      'Spade end hooks where knot must grip the bare shank'
    ],
    proTips: [
      'ALWAYS pass the line through the hook eye from front to back (hook point side first). When pulled, this forces the hook point inward into the fish\'s jaw.',
      'Hold the wraps firmly between your thumb and forefinger while pulling the standing line to prevent coils from tumbling.',
      'Keep wraps snug and tight against each other on the shank for maximum leverage.'
    ],
    pros: [
      'Increases hook-up ratio significantly due to fulcrum leverage',
      'Direct straight-line pull on hook point',
      'Protects line from fish teeth inside the eye'
    ],
    cons: [
      'Only works with hooks (not swivels or crankbaits)',
      'Requires holding wraps under finger tension while drawing line'
    ],
    completedKnotDescription: 'A neat series of 5-7 parallel coils wrapped cleanly around the hook shank, locking the line against the steel with in-line leverage.',
    steps: [
      {
        stepNumber: 1,
        title: 'Pass line through eye from front',
        instruction: 'Pass the tag end through the hook eye entering from the front (point side). Lay 4 to 5 inches of tag along the hook shank.',
        hardware: 'hook',
        standingLinePath: 'M 60 140 L 240 140',
        tagEndPath: 'M 240 140 C 260 170 260 200 240 220 L 400 220',
        arrowPath: 'M 220 130 L 270 170 L 330 220',
        arrowLabel: 'Enter from front (point side)'
      },
      {
        stepNumber: 2,
        title: 'Form loop along hook shank',
        instruction: 'Fold the tag end back toward the hook eye to form an open loop alongside the shank.',
        hardware: 'hook',
        standingLinePath: 'M 60 140 L 240 140',
        tagEndPath: 'M 400 220 C 440 220 450 300 400 310 C 350 320 280 320 260 250',
        arrowPath: 'M 410 230 C 440 260 380 310 320 290',
        arrowLabel: 'Form loop along hook shank'
      },
      {
        stepNumber: 3,
        title: 'Wrap tag end 5 to 7 times around shank',
        instruction: 'Wrap the tag end around both the hook shank and the standing line 5 to 7 times, winding back toward the hook eye.',
        tip: 'Pinch each wrap firmly with your fingers as you make it.',
        hardware: 'hook',
        standingLinePath: 'M 60 140 L 240 140',
        tagEndPath: 'M 260 250 C 275 190 295 270 310 190 C 325 270 340 190 355 270 C 370 190 385 270 395 220',
        arrowPath: 'M 280 240 C 320 210 350 250 390 220',
        arrowLabel: 'Wrap 5-7 times around shank & line'
      },
      {
        stepNumber: 4,
        title: 'Hold wraps & pull standing line',
        instruction: 'Hold the wrapped coils firmly between your thumb and forefinger. Moisten the line, then pull the standing line steadily through the hook eye.',
        hardware: 'hook',
        standingLinePath: 'M 60 140 L 240 140',
        tagEndPath: 'M 380 230 L 420 270',
        tensionArrows: [
          { x1: 200, y1: 140, x2: 80, y2: 140, label: 'Pull standing line through eye' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Seat coils against hook eye and trim',
        instruction: 'Snug the coils tight against the hook eye so they form a clean barrel on the shank. Trim the tag end to 1/8 inch.',
        hardware: 'hook',
        standingLinePath: 'M 60 140 L 245 140',
        tagEndPath: 'M 290 220 L 320 240',
        arrowLabel: 'Seat against eye; trim tag'
      }
    ]
  },
  {
    id: 'dropper-loop',
    name: 'Dropper Loop',
    alternativeNames: ['Dropper Knot', 'Bottom Rig Loop'],
    purpose: 'Forms a standing loop projecting perpendicular to the mainline for attaching multiple hooks, jigs, or teaser flies in tandem rigs.',
    purposeCategory: 'Loops & Rigging',
    difficulty: 'Advanced',
    difficultyScore: 3,
    strengthRating: '80 - 85%',
    suitableLines: ['Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Best formed in medium to heavy monofilament or fluorocarbon (20-60 lb). The stiffness of mono helps the loop stand out away from the main line, reducing tangles.',
    bestUsedFor: [
      'Multi-hook bottom fishing rigs (Fluke, Sea Bass, Cod, Snapper)',
      'Sabiki style bait catcher rigs',
      'Fly fishing multi-nymph dropper rigs',
      'Adding teaser teasers ahead of a lead jig'
    ],
    proTips: [
      'Make 5 or 6 twists—too few twists allow the loop to pull out under heavy strike pressure.',
      'Pushing the loop through the center opening is easier if you hold the center open with a pencil or peg.',
      'Wet the twisted section heavily with water before cinching so the coils pack down smoothly without friction damage.'
    ],
    pros: [
      'Creates a 90-degree branch loop without cutting or joining lines',
      'Allows quick hook changes by pinching the loop and threading it through the hook eye',
      'Clean in-line rig with no hardware needed'
    ],
    cons: [
      'Slightly lower breaking strength (~80-85%) than inline terminal knots',
      'Requires practice to get the loop length exact'
    ],
    completedKnotDescription: 'A crisp perpendicular loop standing out at a 90-degree angle between two tightly packed spiral twist barrels.',
    steps: [
      {
        stepNumber: 1,
        title: 'Form a large loop in the standing line',
        instruction: 'Form a large open loop in the line where you want the dropper branch to be located.',
        hardware: 'dropper',
        standingLinePath: 'M 60 200 L 220 200 C 260 100 340 100 380 200 L 540 200',
        tagEndPath: 'M 220 200 C 240 280 360 280 380 200',
        arrowPath: 'M 250 160 C 300 120 350 160 360 200',
        arrowLabel: 'Form large loop at dropper position'
      },
      {
        stepNumber: 2,
        title: 'Twist the overlapping lines 5 to 6 times',
        instruction: 'Twist one side of the loop around the other 5 to 6 times, creating a twisted section with an open gap in the middle.',
        hardware: 'dropper',
        standingLinePath: 'M 60 200 L 200 200',
        tagEndPath: 'M 200 200 C 220 170 240 230 260 170 C 280 230 300 170 320 230 C 340 170 360 230 380 200 L 540 200',
        arrowPath: 'M 230 180 C 270 240 310 180 350 220',
        arrowLabel: 'Twist lines 5-6 times leaving center open'
      },
      {
        stepNumber: 3,
        title: 'Push loop bottom up through center gap',
        instruction: 'Reach down and push the bottom apex of the large loop up through the open gap in the center of the twists.',
        tip: 'Hold the newly projected loop with your teeth or fingers so it does not slip back.',
        hardware: 'dropper',
        standingLinePath: 'M 60 200 L 260 200',
        tagEndPath: 'M 300 200 C 300 110 320 80 340 80 C 360 80 360 110 360 200 L 540 200',
        arrowPath: 'M 320 240 L 330 160 L 335 90',
        arrowLabel: 'Push loop through center gap'
      },
      {
        stepNumber: 4,
        title: 'Moisten and pull standing lines',
        instruction: 'Wet the twisted twists thoroughly. Hold the projected loop steady while pulling both standing ends firmly in opposite directions.',
        hardware: 'dropper',
        standingLinePath: 'M 60 200 L 280 200',
        tagEndPath: 'M 320 200 L 540 200',
        tensionArrows: [
          { x1: 220, y1: 200, x2: 90, y2: 200, label: 'Pull left line' },
          { x1: 380, y1: 200, x2: 510, y2: 200, label: 'Pull right line' },
          { x1: 300, y1: 140, x2: 300, y2: 70, label: 'Hold loop' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Inspect the 90-degree dropper branch',
        instruction: 'Verify that the coils have packed tightly on both sides of the branch. The loop now stands rigidly at 90 degrees ready for your hook.',
        hardware: 'dropper',
        standingLinePath: 'M 60 200 L 290 200',
        tagEndPath: 'M 310 200 L 540 200',
        arrowLabel: 'Dropper loop completed'
      }
    ]
  },
  {
    id: 'arbor-knot',
    name: 'Arbor Knot',
    alternativeNames: ['Spool Knot', 'Reel Arbor Knot'],
    purpose: 'Anchoring monofilament, braided backing, or fly line backing securely to the central arbor (spool hub) of a fishing reel.',
    purposeCategory: 'Reel Spool',
    difficulty: 'Easy',
    difficultyScore: 1,
    strengthRating: '90%',
    suitableLines: ['Monofilament', 'Braided Line', 'Fluorocarbon'],
    lineSuitabilityNotes: 'For slippery braided superline, tie the arbor knot over a layer of electrical tape or monofilament backing on the spool to avoid the entire spool slipping under drag.',
    bestUsedFor: [
      'Attaching line to spinning reel spools',
      'Attaching line to baitcasting reel spools',
      'Attaching backing to fly reel arbors',
      'Conventional offshore reel spooling'
    ],
    proTips: [
      'Tie the second overhand knot right at the very tip of the tag end so it acts as an unyielding stopper.',
      'Moisten the line before sliding the first overhand knot down to the spool hub.',
      'When spooling braid on a smooth aluminum spool, a strip of electrical tape under the arbor knot prevents "braid slip".'
    ],
    pros: [
      'Simplest knot to anchor line to a reel spool',
      'Jams tight under tension—will not slip off the hub',
      'Low profile does not create an uneven bump under spool wraps'
    ],
    cons: [
      'Slick braided line without backing can spin freely on smooth metal spools',
      'Only used for spooling'
    ],
    completedKnotDescription: 'A sliding noose clamped tight around the reel arbor hub, locked irrevocably by an overhand stopper knot jammed against the collar.',
    steps: [
      {
        stepNumber: 1,
        title: 'Pass line around reel arbor',
        instruction: 'Pass the line around the reel arbor/spool hub. Leave approximately 6 to 8 inches of tag end to work with.',
        hardware: 'spool',
        standingLinePath: 'M 60 200 L 230 200 C 230 140 370 140 370 200 C 370 260 230 260 230 200',
        tagEndPath: 'M 370 200 L 460 200',
        arrowPath: 'M 220 200 C 220 130 380 130 380 200',
        arrowLabel: 'Circle line around spool hub'
      },
      {
        stepNumber: 2,
        title: 'Tie overhand knot around standing line',
        instruction: 'Tie a simple overhand knot with the tag end around the standing line, forming a slip loop.',
        hardware: 'spool',
        standingLinePath: 'M 60 200 L 400 200',
        tagEndPath: 'M 400 200 C 420 160 450 160 460 200 C 470 240 430 240 420 205',
        arrowPath: 'M 410 170 C 440 160 460 190 430 220',
        arrowLabel: 'Overhand knot around standing line'
      },
      {
        stepNumber: 3,
        title: 'Tie a second stopper knot in tag tip',
        instruction: 'Tie a second overhand knot in the very end of the tag end. This serves as a stopper knot.',
        hardware: 'spool',
        standingLinePath: 'M 60 200 L 400 200',
        tagEndPath: 'M 430 200 L 490 200 C 505 180 525 180 520 200 C 515 220 500 220 505 205',
        arrowPath: 'M 480 200 L 515 190 L 510 215',
        arrowLabel: 'Tie stopper knot in tag tip'
      },
      {
        stepNumber: 4,
        title: 'Pull standing line to slide knot to arbor',
        instruction: 'Moisten the line. Pull the standing line firmly. The first knot slides down the line until it seats flush against the spool hub.',
        hardware: 'spool',
        standingLinePath: 'M 60 200 L 260 200',
        tagEndPath: 'M 265 200 L 320 200',
        tensionArrows: [
          { x1: 220, y1: 200, x2: 100, y2: 200, label: 'Pull standing line' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Jam stopper knot tight and trim tag',
        instruction: 'Pull the standing line with steady pressure until the second stopper knot jams flush against the first knot, locking it permanently. Trim tag.',
        hardware: 'spool',
        standingLinePath: 'M 60 200 L 250 200',
        tagEndPath: 'M 255 195 L 275 180',
        arrowLabel: 'Stopper jams; trim tag'
      }
    ]
  },
  {
    id: 'blood-knot',
    name: 'Blood Knot',
    alternativeNames: ['Barrel Knot'],
    purpose: 'The classic, time-honored connection for joining two monofilament or fluorocarbon lines of equal or nearly equal diameter with exceptional smoothness.',
    purposeCategory: 'Line to Line',
    difficulty: 'Advanced',
    difficultyScore: 4,
    strengthRating: '90 - 95%',
    suitableLines: ['Monofilament', 'Fluorocarbon'],
    lineSuitabilityNotes: 'Best when both lines are within 20% diameter of each other. The premier choice of fly anglers for building handmade tapered leaders.',
    bestUsedFor: [
      'Building handmade tapered fly leaders',
      'Joining tippet to leader of similar diameter',
      'Splicing broken monofilament mainline',
      'Smooth guide transitions in traditional fly casting'
    ],
    proTips: [
      'Use 5 wraps per side for light line (under 10 lb), 4 wraps for 10-20 lb, and 3 wraps for heavy line.',
      'CRITICAL: The two tag ends must exit the center opening in OPPOSITE directions (one pointing up, one pointing down).',
      'Moisten generously and pull all 4 ends gently at first so the coils gather neatly together from both sides toward the center.'
    ],
    pros: [
      'Extremely smooth symmetrical barrel profile',
      'Flows through fly rod guides with minimal resistance',
      'Maintains clean in-line leader straightness'
    ],
    cons: [
      'Cannot be used to join lines of widely different diameters',
      'Difficult to tie in braided line',
      'Requires dexterity to hold center gap open while making reverse wraps'
    ],
    completedKnotDescription: 'A perfectly symmetrical cylindrical barrel of interlocking coils with the two tag ends trimmed flush on opposite sides.',
    steps: [
      {
        stepNumber: 1,
        title: 'Overlap ends of the two lines',
        instruction: 'Overlap the ends of the two lines to be joined by about 6 to 8 inches, running in opposite directions.',
        hardware: 'leader',
        standingLinePath: 'M 60 170 L 520 170',
        tagEndPath: 'M 80 230 L 540 230',
        arrowPath: 'M 180 150 L 360 150',
        arrowLabel: 'Overlap lines 6-8 inches'
      },
      {
        stepNumber: 2,
        title: 'Wrap Line A 5 times & tuck into center',
        instruction: 'Wrap Line A\'s tag end around Line B 5 times. Bend the tag end back and insert it through the open space between the two lines at the center.',
        hardware: 'leader',
        standingLinePath: 'M 60 170 L 300 170',
        tagEndPath: 'M 300 170 C 320 130 340 210 360 130 C 380 210 400 130 420 210 L 430 170 C 430 110 320 110 300 190 L 300 230',
        arrowPath: 'M 380 120 C 330 110 305 150 300 210',
        arrowLabel: '5 wraps, tuck tag down into center'
      },
      {
        stepNumber: 3,
        title: 'Wrap Line B 5 times in opposite direction',
        instruction: 'Wrap Line B\'s tag end around Line A 5 times in the opposite direction. Tuck Line B\'s tag back through the same center gap, exiting in the OPPOSITE direction (pointing up).',
        hardware: 'leader',
        standingLinePath: 'M 280 230 L 540 230',
        tagEndPath: 'M 280 230 C 260 270 240 190 220 270 C 200 190 180 270 160 190 L 150 230 C 150 290 260 290 280 210 L 280 150',
        arrowPath: 'M 200 280 C 250 290 275 250 280 170',
        arrowLabel: '5 wraps, tuck tag UP into center'
      },
      {
        stepNumber: 4,
        title: 'Moisten and draw coils toward center',
        instruction: 'Moisten the wraps thoroughly with water or saliva. Gently pull both standing lines in opposite directions while ensuring the coils gather neatly together from both sides.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 260 200',
        tagEndPath: 'M 340 200 L 540 200',
        tensionArrows: [
          { x1: 220, y1: 200, x2: 90, y2: 200, label: 'Pull left line' },
          { x1: 380, y1: 200, x2: 510, y2: 200, label: 'Pull right line' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Tighten firmly and trim tags',
        instruction: 'Pull both standing lines firmly to lock the barrel. The coils interlock symmetrically. Trim both tag ends close to the knot.',
        hardware: 'leader',
        standingLinePath: 'M 60 200 L 285 200',
        tagEndPath: 'M 315 200 L 540 200',
        arrowLabel: 'Tighten barrel; trim both tags'
      }
    ]
  }
];
