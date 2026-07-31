import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Training Labs — Sales Training & Coaching',
  description:
    'Buyer’s guides and deep dives on sales training, coaching platforms, and GTM enablement systems.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
