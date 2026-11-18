# Training Labs blog playbook

TL;DR: every post is a folder under `app/blog/<slug>/` built from the shared post blocks and the
animated figure kit. Copy the reference post's structure:
`app/blog/how-much-does-sales-training-cost/`. Pass the quality gate before merging.

## Positioning

- Training Labs is editorial on sales training, sales coaching and role-play training, including
  niche verticals (healthcare, teachers, insurance, BPO, hospitality, admissions).
- Position Tough Tongue AI as the practice layer: AI buyers, patients, parents or customers that
  people rehearse with, scored against your rubric. Here we lead with roleplay and practice (Ajitesh,
  18 Nov 2026), even though toughtongueai.com leads with AI sales agents.
- Mention Tough Tongue AI one or two times per post, where it genuinely fits, plus the CTA.
  Never make it the winner of every table. Any post that names it carries `<Disclosure />`.
- Product facts only from `https://www.toughtongueai.com/pricing/` and the ttai-context skill.

## Voice

- Plain, direct, calm. Short and medium sentences. Paragraphs carry the ideas; lists are for
  steps, options and checklists.
- No em dashes or en dashes anywhere (copy, metadata, FAQ, captions). Use commas, periods, colons.
- No hype: revolutionary, game-changing, seamless, unlock, supercharge, leverage, cutting-edge.
- Teach with contrast: a weak approach, then a stronger one. At least two concrete examples.
- Open with the answer: a two or three sentence `Callout label="Quick answer"` a search engine can
  quote. Question-style h2s where they match how people search.
- Typographic apostrophes and quotes (’ “ ”) in JSX text; no `&apos;` needed.

## Facts

- Every price, statistic or claim about a named company comes from a page opened in this run,
  stated with its month and year. Third-party figures name the source. Unverifiable: leave it out.
- No invented statistics, quotes, customers or case studies. Example inputs in figures are labeled
  as examples in the caption.
- Do not repeat famous ROI or forgetting-curve statistics unless you opened the underlying study.

## Post anatomy

| File | Holds |
| --- | --- |
| `content.ts` | `post: PostSeo` (slug, title, seoTitle under 60 chars, 140 to 160 char description, ISO date, 5 or 6 FAQs), `meta`, `toc`, shared constants for figures |
| `layout.tsx` | `buildPostMetadata(post)` and `<PostJsonLd post={post} />` (BlogPosting + FAQPage) |
| `page.tsx` | Server component: `PostShell`, `PostHeader`, hero figure, `Section`s, `FaqSection`, `CtaBlock`, `RelatedReading` |
| `figures-*.tsx` | `'use client'` post-specific figures, each under 300 lines |

Required in every post: a dark animated hero figure built in code (no images), the quick-answer
callout, at least one `DataTable`, 4 to 6 animated figures, FAQ (same array as JSON-LD), a
conclusion with a clear recommendation, `CtaBlock` with a post-specific headline, Related reading
(up to four existing posts), and links to every source with `ExtLink`.
Length: 1,800 to 2,800 words.

## Figure kit (`components/blog/figures/`)

| Export | Use for |
| --- | --- |
| `Figure` | Frame: title says what to look at; caption says what is example vs data; source line |
| `useInView` | Start motion when scrolled into view; reduced-motion users get the final state |
| `AnimatedBars` | Benchmarks and comparisons; server-safe (named `format`: `usd`, `usd2`, `int`, `pct`) |
| `StackedBar` | Cost or time broken into parts; pass `scaleMax` to compare two bars honestly |
| `CountUp` | Numbers that count to their value and animate between slider results |
| `Segmented`, `SliderField` | Toggles and inputs for interactive figures and calculators |

CSS motion utilities in `app/globals.css`: `blog-fade-up`, `blog-float`, `blog-pulse-ring`,
`blog-shimmer` (all disabled under reduced motion). Colors: `--blog-accent-*`, `--blog-ink`.

What makes a figure worth adding:
- It explains one idea faster than a paragraph: a staircase of prices, an iceberg of hidden cost,
  a before and after, a timeline of a conversation, a scored rubric filling in, a calculator.
- Interactive where the reader has a real choice (team size, scenario, length, vertical).
- Every number shown appears in the post or its cited source.
- Server pages pass only serializable props to client figures (no function props).
- No two figures back to back; each sits under the paragraph it explains.

## Quality gate

1. `pnpm exec tsc --noEmit -p .` exits 0 and `pnpm build` passes (the build skips type checks,
   so tsc is the real check).
2. `grep -rn "—\|–" app/blog/<slug>` prints nothing.
3. Primary keyword is not targeted by a sister site (see `docs/blog-roadmap.md`).
4. On the Vercel preview: the post and `/blog` return 200, render at desktop and 375 px width with
   no horizontal scroll, figures animate and their controls respond, TOC links land on sections,
   FAQ JSON-LD parses and matches the visible FAQ.
5. Editor pass: title, h1, first paragraph, slug and meta description carry the keyword naturally;
   no claim without a source from this run; no repetition of another post.

## Key Files

- `docs/blog-roadmap.md`: topic queue and sister-site keyword list
- `components/blog/figures/`: animated figure kit
- `components/blog/post/`: post shell, header, callout, FAQ, CTA, related reading, prose helpers
- `lib/blog-seo.ts`, `components/blog/post-json-ld.tsx`: metadata and JSON-LD
- `lib/blog-posts.ts`, `app/sitemap.ts`: index and sitemap (sitemap reads the index)
