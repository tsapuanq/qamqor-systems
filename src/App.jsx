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

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/equipment': Equipment,
  '/pricing': Pricing,
  '/cases': Cases,
  '/contacts': Contacts,
}

function getHashPath() {
  const path = window.location.hash.replace('#', '')
  return routes[path] ? path : '/'
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
