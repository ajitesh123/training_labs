import { buildPostJsonLd, type PostSeo } from '@/lib/blog-seo'

/** Renders BlogPosting + FAQPage JSON-LD. Use in each post's layout.tsx. */
export function PostJsonLd({ post }: { post: PostSeo }) {
  return (
    <>
      {buildPostJsonLd(post).map((schema) => (
        <script
          key={String(schema['@type'])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
