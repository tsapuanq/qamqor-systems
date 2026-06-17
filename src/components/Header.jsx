import logo from '../assets/qamqor-logo.png'
import twoGisIcon from '../assets/icons/2gis.png'
import instagramIcon from '../assets/icons/instagram.png'
import whatsappIcon from '../assets/icons/whatsapp.png'
import contacts from '../data/contacts.js'

const navigation = [
  { label: 'Главная', path: '/' },
  { label: 'О компании', path: '/about' },
  { label: 'Услуги', path: '/services' },
  { label: 'Оборудование', path: '/equipment' },
  { label: 'Цены', path: '/pricing' },
  { label: 'Кейсы', path: '/cases' },
  { label: 'Контакты', path: '/contacts' },
]

const whatsappUrl =
  'https://wa.me/77473806542?text=Здравствуйте!%20Пишу%20с%20сайта%20Qamqor%20Systems.%20Хочу%20получить%20консультацию.'

const contactLinks = [
  {
    label: 'Instagram Qamqor Systems',
    title: 'Instagram Qamqor Systems',
    href: contacts.instagram,
    className: 'site-contact-icon--instagram',
    icon: instagramIcon,
  },
  {
    label: 'Qamqor Systems в 2ГИС',
    title: 'Qamqor Systems в 2ГИС',
    href: contacts.twoGis,
    className: 'site-contact-icon--map',
    icon: twoGisIcon,
  },
  {
    label: 'Написать в WhatsApp',
    title: 'Написать в WhatsApp',
    href: whatsappUrl,
    className: 'site-contact-icon--whatsapp',
    icon: whatsappIcon,
  },
]

function getRouteHref(path) {
  return new URL(path.replace(/^\//, ''), window.location.origin + import.meta.env.BASE_URL)
    .pathname
}

function Header({ currentPath, onNavigate }) {
  function handleNavigate(event, path) {
    event.preventDefault()

    const nextUrl = getRouteHref(path)
    window.history.pushState({}, '', nextUrl)
    onNavigate(path)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          aria-label="Qamqor Systems — главная"
          className="site-logo"
          href={getRouteHref('/')}
          onClick={(event) => handleNavigate(event, '/')}
        >
          <img className="site-logo-image" src={logo} alt="" />
          <span className="site-logo-text">Qamqor Systems</span>
        </a>

        <nav className="site-nav" aria-label="Главное меню">
          {navigation.map((item) => (
            <a
              aria-current={currentPath === item.path ? 'page' : undefined}
              href={getRouteHref(item.path)}
              key={item.path}
              onClick={(event) => handleNavigate(event, item.path)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-contact-icons" aria-label="Быстрые контакты">
          {contactLinks.map((link) => (
            <a
              aria-label={link.label}
              className={`site-contact-icon ${link.className}`}
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
              title={link.title}
            >
              <img aria-hidden="true" src={link.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
