'use client'

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function GAPageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return

    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname

    window.gtag("event", "page_view", {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

const GoogleAnalytics = () => {
  if (!GA_ID) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: false });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GAPageViewTracker />
      </Suspense>
    </>
  )
}

export default GoogleAnalytics