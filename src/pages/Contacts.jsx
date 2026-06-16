import heroCamera from '../assets/hero/hero-camera.jpg'
import contacts from '../data/contacts.js'

const whatsappUrl = 'https://wa.me/77473806542'

const officeHours = [
  ['Пн — Пт', '09:00–18:00'],
  ['Суббота', '10:00–15:00'],
  ['Воскресенье', 'Выходной'],
]

function Contacts() {
  return (
    <section className="page contacts-page">
      <section
        className="contacts-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 10, 15, 0.82) 0%, rgba(5, 10, 15, 0.62) 48%, rgba(5, 10, 15, 0.42) 100%), url(${heroCamera})`,
        }}
      >
        <h1>Свяжитесь с нами — консультация и выезд специалиста бесплатно</h1>
        <p className="contacts-hero__lead">
          WhatsApp, офис, Instagram и 2ГИС — все основные контакты на одной
          странице без лишних форм.
        </p>
      </section>

      <section className="contacts-simple">
        <div className="contacts-simple__intro">
          <h2>Как с нами связаться</h2>
          <p>
            Напишите в WhatsApp, приходите в офис по адресу {contacts.address}
            или откройте карточку компании в 2ГИС.
          </p>
        </div>

        <div className="contacts-simple__grid">
          <article>
            <span>Адрес</span>
            <p>{contacts.address}</p>
            <a href={contacts.twoGis} target="_blank" rel="noreferrer">
              Построить маршрут в 2ГИС
            </a>
          </article>

          <article>
            <span>WhatsApp</span>
            <p>{contacts.whatsapp}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
          </article>

          <article>
            <span>Instagram</span>
            <p>Qamqor Systems Kokshetau</p>
            <a href={contacts.instagram} target="_blank" rel="noreferrer">
              Открыть Instagram
            </a>
          </article>

          <article>
            <span>2ГИС</span>
            <p>Карточка компании и отзывы</p>
            <a href={contacts.twoGis} target="_blank" rel="noreferrer">
              Открыть в 2ГИС
            </a>
          </article>
        </div>

        <div className="contacts-simple__hours">
          <h2>График работы офиса</h2>
          <p>
            Выезд и консультация по Кокшетау бесплатные. Условия выезда по
            области уточняются отдельно.
          </p>
          <div>
            {officeHours.map(([day, time]) => (
              <p key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </p>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contacts
