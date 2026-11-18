export type LoopStage = 'playbook' | 'practice' | 'scorecard' | 'coach' | 'live'

type Node = { stage: LoopStage; title: string; note: string; x: number; y: number; fill: string }

const NODES: Node[] = [
  { stage: 'playbook', title: 'PLAYBOOK', note: 'Your pitch, objections, rubric', x: 20, y: 16, fill: 'var(--color-butter)' },
  { stage: 'practice', title: 'PRACTICE', note: 'Reps rehearse with an AI buyer', x: 290, y: 96, fill: 'var(--color-sky)' },
  { stage: 'scorecard', title: 'SCORECARD', note: 'Scored on your rubric', x: 20, y: 186, fill: 'var(--color-mint)' },
  { stage: 'coach', title: 'COACH REVIEW', note: 'Managers review key moments', x: 290, y: 266, fill: 'var(--color-peach)' },
  { stage: 'live', title: 'LIVE CALL', note: 'Skills show up on real calls', x: 20, y: 350, fill: 'var(--color-sheet)' },
]

const PIPES = [
  { d: 'M230 45 C 265 45, 255 125, 290 125', color: 'var(--color-signal)', delay: '0s' },
  { d: 'M290 140 C 255 140, 265 215, 230 215', color: 'var(--color-stamp-green)', delay: '0.4s' },
  { d: 'M230 215 C 265 215, 255 295, 290 295', color: 'var(--color-flame)', delay: '0.8s' },
  { d: 'M290 310 C 255 310, 265 379, 230 379', color: 'var(--color-ink)', delay: '1.2s' },
]

const TOKEN_PATH =
  'M230 45 C 265 45, 255 125, 290 125 L 290 140 C 255 140, 265 215, 230 215 C 265 215, 255 295, 290 295 L 290 310 C 255 310, 265 379, 230 379'

/** The practice loop drawn as labelled blocks joined by pipes; `active` gets the offset shadow. */
export function PracticeLoop({ active }: { active: LoopStage }) {
  return (
    <div className="tl-loop border-2 border-ink bg-sheet p-4 sm:p-5" data-active={active}>
      <svg
        viewBox="0 0 530 430"
        className="block h-auto w-full"
        role="img"
        aria-label="The practice loop: playbook, practice, scorecard, coach review, live call. Practice and scorecard repeat."
      >
        {PIPES.map((p) => (
          <path key={p.d} className="tl-pipe" d={p.d} stroke={p.color} style={{ animationDelay: p.delay }} />
        ))}
        <path d="M500 295 C 522 255, 522 165, 500 125" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeDasharray="6 6" />
        <text x="516" y="214" transform="rotate(90 516 214)" textAnchor="middle" className="fill-ink-2 font-mono text-[11px]">
          REPEAT
        </text>
        {NODES.map((n) => (
          <g key={n.stage} data-stage={n.stage}>
            <rect className="tl-node-shadow" x={n.x + 6} y={n.y + 6} width="210" height="58" />
            <rect x={n.x} y={n.y} width="210" height="58" fill={n.fill} stroke="var(--color-ink)" strokeWidth="2" />
            <text x={n.x + 16} y={n.y + 24} className="fill-ink font-mono text-[15px] font-semibold tracking-wide">
              {n.title}
            </text>
            <text x={n.x + 16} y={n.y + 44} className="fill-ink-2 text-[11.5px]">
              {n.note}
            </text>
          </g>
        ))}
        <rect x="-6" y="-6" width="12" height="12" fill="var(--color-ink)">
          <animateMotion dur="6s" repeatCount="indefinite" path={TOKEN_PATH} />
        </rect>
      </svg>
      <p className="tl-mono mt-3 text-[11px] text-ink-2">Open a feature to light its stage</p>
    </div>
  )
}
