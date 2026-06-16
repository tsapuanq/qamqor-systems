import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Equipment from './pages/Equipment.jsx'
import Pricing from './pages/Pricing.jsx'
import Cases from './pages/Cases.jsx'
import Contacts from './pages/Contacts.jsx'
import contacts from './data/contacts.js'
import { getPageSeo, siteSeo } from './data/seo.js'

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/equipment': Equipment,
  '/pricing': Pricing,
  '/cases': Cases,
  '/contacts': Contacts,
}

function getSiteRootUrl() {
  return new URL(import.meta.env.BASE_URL, window.location.origin).href
}

function getPublicAssetUrl(assetName) {
  return new URL(assetName, getSiteRootUrl()).href
}

function getRouteUrl(currentPath) {
  return `${getSiteRootUrl()}#${currentPath}`
}

function getHashPath() {
  const path = window.location.hash.replace('#', '')
  return routes[path] ? path : '/'
}

function setMetaAttribute(selector, attribute, value) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')

    if (selector.startsWith('meta[name=')) {
      element.setAttribute('name', selector.match(/"([^"]+)"/)?.[1] ?? '')
    }

    if (selector.startsWith('meta[property=')) {
      element.setAttribute('property', selector.match(/"([^"]+)"/)?.[1] ?? '')
    }

    document.head.append(element)
  }

  element.setAttribute(attribute, value)
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.append(canonical)
  }

  canonical.setAttribute('href', url)
}

function setStructuredData(currentPath) {
  const siteRootUrl = getSiteRootUrl()
  const routeUrl = getRouteUrl(currentPath)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteRootUrl}#qamqor-systems`,
    name: contacts.companyName,
    url: routeUrl,
    image: getPublicAssetUrl('qamqor-logo.png'),
    telephone: contacts.whatsapp,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Проспект Абылай хана, 6',
      addressLocality: contacts.city,
      addressRegion: contacts.region,
      addressCountry: 'KZ',
    },
    areaServed: [contacts.city, contacts.region],
    sameAs: [contacts.instagram, contacts.twoGis],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    makesOffer: [
      'Установка видеонаблюдения',
      'Охранные системы',
      'Домофоны',
      'Электромонтажные работы',
      'Оборудование для систем безопасности',
    ],
  }

  let script = document.querySelector('script[data-seo="local-business"]')

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = 'local-business'
    document.head.append(script)
  }

  script.textContent = JSON.stringify(data)
}

function App() {
  const [currentPath, setCurrentPath] = useState(getHashPath)
  const Page = routes[currentPath]

  useEffect(() => {
    const handleHashChange = () => {
      const nextPath = getHashPath()
      setCurrentPath(nextPath)

      if (window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0, left: 0 })
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    if (!window.location.hash) {
      window.location.hash = '/'
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0 })
      })
    }
  }, [currentPath])

  useEffect(() => {
    const seo = getPageSeo(currentPath)
    const routeUrl = getRouteUrl(currentPath)
    const logoUrl = getPublicAssetUrl('qamqor-logo.png')

    document.title = seo.title
    setMetaAttribute('meta[name="description"]', 'content', seo.description)
    setMetaAttribute('meta[name="keywords"]', 'content', siteSeo.keywords)
    setMetaAttribute('meta[property="og:title"]', 'content', seo.title)
    setMetaAttribute('meta[property="og:description"]', 'content', seo.description)
    setMetaAttribute('meta[property="og:url"]', 'content', routeUrl)
    setMetaAttribute('meta[property="og:type"]', 'content', 'website')
    setMetaAttribute('meta[property="og:site_name"]', 'content', siteSeo.siteName)
    setMetaAttribute('meta[property="og:locale"]', 'content', 'ru_KZ')
    setMetaAttribute('meta[property="og:image"]', 'content', logoUrl)
    setMetaAttribute('meta[name="twitter:card"]', 'content', 'summary')
    setMetaAttribute('meta[name="twitter:title"]', 'content', seo.title)
    setMetaAttribute('meta[name="twitter:description"]', 'content', seo.description)
    setCanonical(routeUrl)
    setStructuredData(currentPath)
  }, [currentPath])

  return (
    <div className="app">
      <Header currentPath={currentPath} />
      <main className="page-shell">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
