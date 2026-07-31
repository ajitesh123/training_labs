export type BlogPostMeta = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  featured: boolean
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'best-ai-sales-training-tools-2026',
    title: 'Best AI Sales Training Tools in 2026: A Buyer’s Guide for GTM Teams',
    excerpt:
      'Compare Tough Tongue AI, Hyperbound, Second Nature, PitchMonster, and Yoodli on builder workflows, MCP, multimodal practice, and enablement fit, with an honest pick for GTM engineers.',
    category: "Buyer's Guide",
    readTime: '14 min read',
    date: 'July 31, 2026',
    featured: true,
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
