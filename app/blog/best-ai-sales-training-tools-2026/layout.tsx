import type { Metadata } from 'next'

const title =
  'Best AI Sales Training Tools in 2026: A Buyer’s Guide for GTM Teams'
const description =
  'Compare Tough Tongue AI, Hyperbound, Second Nature, PitchMonster, and Yoodli on MCP, multimodal practice, builder workflows, and enablement fit for GTM engineers and sales leaders.'
const slug = 'best-ai-sales-training-tools-2026'
const publishedDate = '2026-07-31'
const siteUrl = 'https://traininglabs.ai'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `/blog/${slug}`,
  },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishedDate,
    url: `/blog/${slug}`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description,
            datePublished: publishedDate,
            dateModified: publishedDate,
            author: {
              '@type': 'Organization',
              name: 'Training Labs',
              url: siteUrl,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Training Labs',
              url: siteUrl,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/blog/${slug}`,
            },
          }),
        }}
      />
      {children}
    </>
  )
}
