import type { ReactNode } from 'react'
import { PostJsonLd } from '@/components/blog/post-json-ld'
import { buildPostMetadata } from '@/lib/blog-seo'
import { post } from './content'

export const metadata = buildPostMetadata(post)

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PostJsonLd post={post} />
      {children}
    </>
  )
}
