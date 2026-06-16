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
      <section className="contacts-hero">
        <h1>Свяжитесь с нами — консультация и выезд специалиста бесплатно</h1>
      </section>

      <section className="contacts-simple">
        <div className="contacts-simple__intro">
          <h2>Контакты</h2>
          <p>
            Самый быстрый способ связи — WhatsApp. В офисе можно уточнить
            наличие оборудования, адрес для выезда и детали по монтажу.
          </p>
        </div>

        <div className="contacts-simple__list">
          <article>
            <span>WhatsApp</span>
            <p>{contacts.whatsapp}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
          </article>

          <article>
            <span>Адрес</span>
            <p>{contacts.address}</p>
            <a href={contacts.twoGis} target="_blank" rel="noreferrer">
              Построить маршрут в 2ГИС
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
            <p>Карточка компании, адрес и отзывы</p>
            <a href={contacts.twoGis} target="_blank" rel="noreferrer">
              Открыть в 2ГИС
            </a>
          </article>
        </div>

        <div className="contacts-simple__hours">
          <h2>График работы офиса</h2>
          <div>
            {officeHours.map(([day, time]) => (
              <p key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </p>
            ))}
          </div>
          <p>
            Работаем по Кокшетау и области. Выезд по городу и условия выезда
            за пределы города уточняются в WhatsApp.
          </p>
        </div>
      </section>
    </section>
  )
}

export default Contacts
