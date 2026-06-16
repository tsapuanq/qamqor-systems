import contacts from '../data/contacts.js'

const whatsappUrl = 'https://wa.me/77473806542'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">{contacts.companyName}</p>
          <p className="site-footer__meta">
            {contacts.serviceArea}. {contacts.address}.
          </p>
        </div>
        <a
          className="site-footer__contact button button-secondary"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {contacts.whatsapp}
        </a>
      </div>
    </footer>
  )
}

export default Footer
