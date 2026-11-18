import { wrap } from '@/components/section-head'
import { appUrl, bookingUrl } from '@/lib/site'

// A buyer objection and the reply worth practicing, drawn as speech bubbles.
function Bubble({ text, fill, side }: { text: string; fill: string; side: 'left' | 'right' }) {
  const path =
    side === 'left'
      ? 'M14 18 Q12 8 24 8 L206 10 Q220 10 219 22 L216 78 Q215 90 203 89 L80 88 L46 112 L52 87 L26 86 Q12 86 13 74 Z'
      : 'M16 12 Q14 4 26 5 L204 8 Q218 9 217 21 L214 74 Q213 86 201 85 L182 85 L190 112 L152 86 L28 84 Q14 84 15 72 Z'
  return (
    <svg
      viewBox="0 0 230 120"
      aria-hidden
      className={`absolute hidden w-[210px] lg:block xl:w-[230px] ${side === 'left' ? 'left-6 top-16 -rotate-6 xl:left-11' : 'bottom-14 right-6 rotate-[5deg] xl:right-11'}`}
    >
      <path d={path} fill={fill} stroke="var(--color-ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <text x="116" y={side === 'left' ? 54 : 50} textAnchor="middle" className="fill-ink font-mono text-[15px] font-semibold">
        {text}
      </text>
    </svg>
  )
}

export default function CTA() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden border-b-2 border-ink py-16 text-center sm:py-24">
      <Bubble text="TOO EXPENSIVE?" fill="var(--color-peach)" side="left" />
      <Bubble text="LET’S TALK VALUE." fill="var(--color-mint)" side="right" />
      <div className={`${wrap} relative`}>
        <h2 className="mx-auto max-w-[16em] font-mono text-[28px] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Ready to Raise Your Team’s Win Rate?
        </h2>
        <p className="mx-auto mb-8 mt-5 max-w-[34em] text-base text-ink-2 sm:text-[17px]">
          Join thousands of sales professionals building sharper discovery, demos, and coaching
          habits. Start with a free trial of any course.
        </p>
        <div className="grid gap-3 sm:flex sm:justify-center sm:gap-3.5">
          <a href={appUrl} className="tl-btn tl-btn-lg bg-butter">
            Get started free →
          </a>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="tl-btn tl-btn-lg">
            Talk to enablement
          </a>
        </div>
        <p className="tl-mono mt-8 text-[11px] text-ink-2 sm:text-xs">
          ✓ No credit card required · ✓ Lifetime access · ✓ 30-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
