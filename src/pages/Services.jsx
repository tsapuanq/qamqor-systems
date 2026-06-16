import services from '../data/services.js'

const whatsappUrl = 'https://wa.me/77473806542'

const serviceNotes = {
  Видеонаблюдение:
    'Помогает видеть, что происходит на объекте, проверять записи и контролировать важные зоны с телефона.',
  'Охранные системы':
    'Подходит, когда нужно быстро получать сигнал о движении, открытии двери или попытке доступа.',
  Домофоны:
    'Удобное решение для ворот, калитки, входной группы, офиса или частного дома.',
  'Автоматизация инженерных систем':
    'Связывает оборудование в понятные сценарии: управление, уведомления и контроль отдельных систем.',
  'Электромонтажные работы':
    'Нужны, когда объект нужно подготовить к установке камер, домофона или охранного оборудования.',
  'Кабель и провод':
    'Подбираем материалы под монтаж, ремонт или самостоятельную установку оборудования.',
}

function Services() {
  return (
    <section className="page services-page">
      <section className="services-hero">
        <h1>Мы предлагаем не просто камеры, а полноценные решения безопасности</h1>
      </section>

      <section className="services-intro">
        <h2>Что можно заказать</h2>
        <div className="services-highlight-text">
          <p>
            Можно обратиться с конкретной задачей: установить камеры, заменить
            домофон, подготовить кабельные линии или подобрать оборудование.
          </p>
          <p>
            Если задача пока не сформулирована, мы уточним объект, зоны
            контроля и подскажем, с чего лучше начать.
          </p>
        </div>
        <div className="services-proof-line">
          <span>Подбор</span>
          <span>Монтаж</span>
          <span>Настройка</span>
          <span>Поддержка</span>
        </div>
      </section>

      <section className="services-list">
        <h2>Основные направления работы</h2>
        <div className="services-text-list">
          {services.map((service, index) => (
            <article className="services-text-item" key={service.title}>
              <div className="services-text-item__head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
              </div>
              <div className="services-text-item__body">
                <p>{service.shortDescription}</p>
                <p>{serviceNotes[service.title]}</p>
                <p>
                  <strong>Для кого:</strong> {service.forWhom}
                </p>
                <p>
                  <strong>Что делаем:</strong> {service.includes.join(', ')}.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-page-cta">
        <h2>Не знаете, с какой услуги начать?</h2>
        <p>
          Напишите в WhatsApp — уточним объект, задачу и подскажем, какое
          решение подойдет.
        </p>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Написать в WhatsApp
        </a>
      </section>
    </section>
  )
}

export default Services
