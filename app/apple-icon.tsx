import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const INK = '#1c1b19'
const BUTTER = '#ffe15a'
const PAPER = '#f4efe8'

// Same mark as app/icon.svg, on paper so iOS gets an opaque tile.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: PAPER }}>
        <div style={{ position: 'relative', width: 126, height: 126, display: 'flex' }}>
          <div style={{ position: 'absolute', left: 14, top: 14, width: 112, height: 112, background: INK }} />
          <div style={{ position: 'absolute', left: 0, top: 0, width: 112, height: 112, background: INK }} />
          <div style={{ position: 'absolute', left: 9, top: 9, width: 94, height: 94, background: BUTTER }} />
          <div style={{ position: 'absolute', left: 29, top: 29, width: 54, height: 15, background: INK }} />
          <div style={{ position: 'absolute', left: 48, top: 29, width: 16, height: 54, background: INK }} />
        </div>
      </div>
    ),
    size,
  )
}
