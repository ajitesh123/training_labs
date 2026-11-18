'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { calLink } from '@/lib/site'

const NAMESPACE = 'founder'

/** cal.com month view, inline, in the site's ink colour. */
export function BookingEmbed() {
  useEffect(() => {
    void getCalApi({ namespace: NAMESPACE }).then((cal) => {
      cal('ui', {
        theme: 'light',
        layout: 'month_view',
        hideEventTypeDetails: false,
        cssVarsPerTheme: { light: { 'cal-brand': '#1c1b19' }, dark: { 'cal-brand': '#1c1b19' } },
      })
    })
  }, [])

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      config={{ layout: 'month_view', theme: 'light' }}
      style={{ width: '100%', height: '100%', minHeight: 620, overflow: 'auto' }}
    />
  )
}
