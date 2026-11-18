import type { Metadata } from 'next'
import { siteName, siteUrl } from '@/lib/site'

export type FaqItem = { q: string; a: string }

export type PostSeo = {
  slug: string
  title: string
  // Under 60 characters; falls back to `title`.
  seoTitle?: string
  description: string
  // ISO date, e.g. '2026-11-18'.
  datePublished: string
  dateModified?: string
  faqs: FaqItem[]
}

/** Next.js metadata for a post: canonical, Open Graph and Twitter card. */
export function buildPostMetadata(post: PostSeo): Metadata {
  const title = post.seoTitle ?? post.title
  const url = `/blog/${post.slug}`
  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      url,
      siteName,
    },
    twitter: { card: 'summary_large_image', title, description: post.description },
  }
}

/** BlogPosting and FAQPage JSON-LD, built from the same FAQ the page renders. */
export function buildPostJsonLd(post: PostSeo): Record<string, unknown>[] {
  const org = { '@type': 'Organization', name: siteName, url: siteUrl }
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified ?? post.datePublished,
      author: org,
      publisher: org,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
}
