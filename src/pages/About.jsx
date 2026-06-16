import contacts from '../data/contacts.js'
import services from '../data/services.js'

function About() {
  return (
    <section className="page about-page">
      <section className="about-hero">
        <h1>Надёжные решения безопасности с опытом</h1>
      </section>

      <section className="about-who">
        <h2>Кто мы</h2>
        <div className="about-highlight-text">
          <p>
            Qamqor Systems — локальная компания в Кокшетау, которая занимается
            видеонаблюдением, домофонами, охранными системами, электромонтажом
            и оборудованием для объектов разного масштаба.
          </p>
          <p>
            За годы работы мы сталкивались с частными домами, магазинами,
            офисами, складами и производственными объектами. Поэтому сначала
            разбираемся в задаче, а уже потом предлагаем комплект оборудования.
          </p>
        </div>
      </section>

      <section className="about-experience">
        <h2>Почему нам доверяют</h2>
        <div className="about-text-list">
          <article className="about-text-item">
            <h3>Опыт на разных объектах</h3>
            <p>
              Работаем не только с типовыми квартирами и домами. Подбираем
              решения для бизнеса, складов, территорий и объектов по области.
            </p>
          </article>
          <article className="about-text-item">
            <h3>Офис и оборудование</h3>
            <p>
              Есть офис в Кокшетау по адресу: {contacts.address}. Можно
              уточнить наличие, обсудить задачу и подобрать оборудование перед
              установкой.
            </p>
          </article>
          <article className="about-text-item">
            <h3>Монтаж под ключ</h3>
            <p>
              Подбираем камеры, регистраторы, домофоны, кабель и комплектующие,
              выполняем монтаж, настраиваем доступ с телефона и объясняем, как
              пользоваться системой.
            </p>
          </article>
        </div>
      </section>

      <section className="about-services">
        <h2>Чем занимаемся</h2>
        <p className="about-section-lead">
          Основные направления закрывают типичные задачи по безопасности:
          наблюдение, контроль доступа, охрана, электромонтаж и материалы.
        </p>
        <div className="about-text-list">
          {services.map((service) => (
            <article className="about-text-item" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default About
