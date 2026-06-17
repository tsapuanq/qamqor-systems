const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

let isInitialized = false

function hasAnalyticsId() {
  return typeof measurementId === 'string' && measurementId.trim().startsWith('G-')
}

export function initAnalytics() {
  if (!hasAnalyticsId() || isInitialized || typeof window === 'undefined') {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.append(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
  })

  isInitialized = true
}

export function trackPageView(path, title) {
  if (!hasAnalyticsId() || typeof window === 'undefined') {
    return
  }

  initAnalytics()

  if (typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: path,
  })
}
