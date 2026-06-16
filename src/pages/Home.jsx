import { useState } from 'react'

import heroCamera from '../assets/hero/hero-camera.jpg'
import faq from '../data/faq.js'
import contacts from '../data/contacts.js'
import reviews, { reviewsSummary } from '../data/reviews.js'

const whatsappUrl = 'https://wa.me/77473806542'

const serviceShowcase = [
  {
    title: 'Видеонаблюдение с доступом с телефона',
    subtitle: 'Контроль объекта, когда вы дома, в дороге или на работе',
    text:
      'Подбираем камеры под задачу, устанавливаем оборудование, настраиваем запись и просмотр через приложение. Можно контролировать двор, вход, кассу, склад или офис в реальном времени.',
  },
  {
    title: 'Домофоны и контроль входа',
    subtitle: 'Понятный доступ для дома, офиса и входной группы',
    text:
      'Устанавливаем вызывные панели, мониторы, замки и кабельные линии. Помогаем выбрать комплект, чтобы удобно открывать дверь и видеть, кто пришел.',
  },
  {
    title: 'Охранные системы и электромонтаж',
    subtitle: 'Датчики, кабель, питание и подключение под ключ',
    text:
      'Собираем систему под объект: датчики движения и открытия, сирены, блоки питания, кабель и дополнительные электромонтажные работы. Настраиваем так, чтобы все работало как единое решение.',
  },
]

const calculatorGroups = [
  {
    key: 'objectType',
    title: 'Тип объекта',
    options: ['Частный дом', 'Квартира', 'Магазин', 'Офис', 'Склад', 'Производственный объект'],
  },
  {
    key: 'service',
    title: 'Что нужно',
    options: [
      'Видеонаблюдение',
      'Домофон',
      'Охранная система',
      'Электромонтаж',
      'Купить оборудование',
      'Комплексное решение',
    ],
  },
  {
    key: 'points',
    title: 'Количество камер или точек',
    options: ['1–2', '3–4', '5–8', '9+', 'Пока не знаю'],
  },
  {
    key: 'remoteAccess',
    title: 'Удаленный доступ',
    options: ['Нужен просмотр с телефона', 'Не нужен', 'Не знаю'],
  },
  {
    key: 'location',
    title: 'Где объект',
    options: ['Кокшетау', 'Область'],
  },
]

const calculatorInitialState = {
  objectType: 'Частный дом',
  service: 'Видеонаблюдение',
  points: '3–4',
  remoteAccess: 'Нужен просмотр с телефона',
  location: 'Кокшетау',
}

function getEstimateType(calculator) {
  if (
    calculator.points === '9+' ||
    calculator.objectType === 'Склад' ||
    calculator.objectType === 'Производственный объект' ||
    calculator.service === 'Комплексное решение'
  ) {
    return 'Нужен расчет под объект'
  }

  if (calculator.points === '1–2') {
    return 'Быстрый предварительный расчет'
  }

  return 'Нужен предварительный расчет'
}

function Home() {
  const [calculator, setCalculator] = useState(calculatorInitialState)

  function handleHeroLeadSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const messageLines = [
      'Здравствуйте! Хочу рассчитать стоимость установки видеонаблюдения/систем безопасности.',
    ]

    if (name) {
      messageLines.push(`Имя: ${name}`)
    }

    if (phone) {
      messageLines.push(`Телефон: ${phone}`)
    }

    const message = encodeURIComponent(messageLines.join('\n'))
    window.open(`${whatsappUrl}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  function updateCalculator(key, value) {
    setCalculator((current) => ({
      ...current,
      [key]: value,
    }))
  }

  function handleCalculatorSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const comment = String(formData.get('comment') || '').trim()
    const estimateType = getEstimateType(calculator)
    const messageLines = [
      'Здравствуйте! Хочу получить предварительный расчет.',
      '',
      `Тип объекта: ${calculator.objectType}`,
      `Нужно: ${calculator.service}`,
      `Количество камер или точек: ${calculator.points}`,
      `Удаленный доступ: ${calculator.remoteAccess}`,
      `Локация: ${calculator.location}`,
      `Ориентир заявки: ${estimateType}`,
    ]

    if (name) {
      messageLines.push(`Имя: ${name}`)
    }

    if (phone) {
      messageLines.push(`Телефон: ${phone}`)
    }

    if (comment) {
      messageLines.push(`Комментарий: ${comment}`)
    }

    const message = encodeURIComponent(messageLines.join('\n'))
    window.open(`${whatsappUrl}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  function handleContactSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const messageLines = [
      'Здравствуйте! Хочу обсудить установку видеонаблюдения или системы безопасности.',
    ]

    if (name) {
      messageLines.push(`Имя: ${name}`)
    }

    if (phone) {
      messageLines.push(`Телефон: ${phone}`)
    }

    const message = encodeURIComponent(messageLines.join('\n'))
    window.open(`${whatsappUrl}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="page home-page">
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 10, 15, 0.88) 0%, rgba(5, 10, 15, 0.68) 45%, rgba(5, 10, 15, 0.45) 100%), url(${heroCamera})`,
        }}
      >
        <div className="home-hero__content">
          <p className="home-hero__kicker">Qamqor Systems</p>
          <h1>Установка видеонаблюдения под ключ в Кокшетау</h1>
          <p className="home-hero__line">Надёжно. Быстро. Под ключ.</p>
          <p className="home-hero__lead">
            Для дома, бизнеса и промышленных объектов
          </p>
          <p>Монтаж, настройка, поддержка</p>
          <div className="cta-row">
            <a className="button button-primary" href="#calculator">
              Рассчитать стоимость
            </a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
          </div>
        </div>

        <form className="home-hero__estimate-card home-lead-form" onSubmit={handleHeroLeadSubmit}>
          <h2>Оставьте заявку на расчет</h2>
          <p>
            Укажите имя и телефон — мы свяжемся и подскажем, какое решение
            подойдет вашему объекту.
          </p>
          <input
            aria-label="Ваше имя"
            autoComplete="name"
            className="home-lead-form__input"
            name="name"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            aria-label="Телефон"
            autoComplete="tel"
            className="home-lead-form__input"
            inputMode="tel"
            name="phone"
            placeholder="+7 (000) 000-00-00"
            type="tel"
          />
          <button className="button button-primary" type="submit">
            Отправить в WhatsApp
          </button>
          <a className="home-lead-form__direct-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            или напишите нам напрямую в WhatsApp
          </a>
        </form>
      </section>

      <section className="home-trust">
        <h2>Надёжность, которую видно в работе</h2>
        <p className="home-trust__lead">
          Без лишних обещаний: подберём оборудование, установим систему и
          покажем, как пользоваться ей каждый день.
        </p>
        <div className="home-trust-metrics">
          <article>
            <div className="home-trust-ring">
              <span>{reviewsSummary.rating}</span>
            </div>
            <h3>Рейтинг в 2ГИС</h3>
            <p>Оценка компании по данным карточки Qamqor Systems.</p>
          </article>
          <article>
            <div className="home-trust-ring">
              <span>19</span>
            </div>
            <h3>Оценок</h3>
            <p>Клиенты оценивают магазин, консультацию и работу специалистов.</p>
          </article>
          <article>
            <div className="home-trust-ring">
              <span>16</span>
            </div>
            <h3>Отзывов</h3>
            <p>Отзывы можно проверить напрямую в карточке компании в 2ГИС.</p>
          </article>
        </div>
      </section>

      <section className="home-calculator-placeholder" id="calculator">
        <div className="home-calculator-intro">
          <h2>Калькулятор-заявка</h2>
          <p className="home-readable-text">
            Оставьте контакт и коротко опишите объект. Заявка уйдет в
            WhatsApp, а мы уточним детали и подскажем по оборудованию,
            монтажу и примерной стоимости.
          </p>
        </div>
        <form className="home-calculator-form" onSubmit={handleCalculatorSubmit}>
          <div className="home-calculator-fields">
            {calculatorGroups.map((group) => (
              <fieldset className="home-calculator-group" key={group.key}>
                <legend>{group.title}</legend>
                <div className="home-calculator-options">
                  {group.options.map((option) => (
                    <button
                      aria-pressed={calculator[group.key] === option}
                      className="home-calculator-option"
                      key={option}
                      onClick={() => updateCalculator(group.key, option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <aside className="home-calculator-result">
            <p className="home-calculator-result__label">Ваш ориентир</p>
            <h3>{getEstimateType(calculator)}</h3>
            <p>
              Выберите примерные параметры слева и оставьте контакт. Заявка
              уйдет в WhatsApp, а мы уточним детали и подскажем, какой комплект
              подойдет под ваш объект.
            </p>
            <input
              aria-label="Ваше имя"
              autoComplete="name"
              className="home-calculator-input"
              name="name"
              placeholder="Ваше имя"
              type="text"
            />
            <input
              aria-label="Телефон"
              autoComplete="tel"
              className="home-calculator-input"
              inputMode="tel"
              name="phone"
              placeholder="+7 (000) 000-00-00"
              type="tel"
            />
            <textarea
              aria-label="Комментарий"
              className="home-calculator-input home-calculator-input--textarea"
              name="comment"
              placeholder="Комментарий: адрес, сроки, особенности объекта"
            />
            <button className="button button-primary" type="submit">
              Отправить заявку в WhatsApp
            </button>
          </aside>
        </form>
      </section>

      <section className="home-services">
        <div className="home-services__head">
          <h2>Мы предлагаем не просто камеры, а полноценные решения безопасности</h2>
          <p>
            Подбираем оборудование, выполняем монтаж, настраиваем удаленный
            доступ и объясняем, как пользоваться системой после установки.
          </p>
        </div>

        <div className="home-service-showcase">
          {serviceShowcase.map((service, index) => (
            <article className="home-service-line" key={service.title}>
              <p className="home-service-line__number">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="home-service-line__content">
                <h3>{service.title}</h3>
                <p className="home-service-feature__subtitle">{service.subtitle}</p>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-faq">
        <h2>Ответы на частые вопросы</h2>
        <p className="home-faq__lead">
          Мы постарались ответить на вопросы, которые чаще всего задают перед
          установкой видеонаблюдения и систем безопасности.
        </p>
        <div className="home-faq-simple">
          {faq.slice(0, 6).map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-reviews">
        <h2>Отзывы наших клиентов</h2>
        <div className="home-reviews__summary">
          <div>
            <p className="home-reviews__score">{reviewsSummary.rating}</p>
            <p className="home-reviews__rating">
              {reviewsSummary.ratingsCount} · {reviewsSummary.reviewsCount} в{' '}
              {reviewsSummary.source}
            </p>
          </div>
          <a href={contacts.twoGis} target="_blank" rel="noreferrer">
            Открыть отзывы в 2ГИС
          </a>
        </div>
        <div className="home-reviews__list">
          {reviews.map((review) => (
            <article key={`${review.author}-${review.date}`}>
              <div className="home-reviews__author">
                <span>{review.author.slice(0, 2).toUpperCase()}</span>
                <div>
                  <h3>{review.author}</h3>
                  <p>{review.authorMeta}</p>
                </div>
              </div>
              <p className="home-reviews__stars">
                {'★'.repeat(review.rating)}
                <span>{review.date}</span>
              </p>
              <p>{review.text}</p>
              {review.verified ? (
                <p className="home-reviews__verified">{review.verified}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="home-contact-cta">
        <div className="home-contact-cta__head">
          <h2>Обсудим ваш объект?</h2>
          <p>
            Свяжитесь с нами удобным способом — подскажем по видеонаблюдению,
            оборудованию и монтажу.
          </p>
        </div>

        <div className="home-contact-cta__body">
          <div className="home-contact-cta__details">
            <p>{contacts.address}</p>
            <a href={`${whatsappUrl}`} target="_blank" rel="noreferrer">
              {contacts.whatsapp}
            </a>
            <div className="home-contact-cta__links">
              <a href={contacts.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={contacts.twoGis} target="_blank" rel="noreferrer">
                2ГИС
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <form className="home-contact-cta__form" onSubmit={handleContactSubmit}>
            <input
              aria-label="Ваше имя"
              autoComplete="name"
              name="name"
              placeholder="Ваше имя"
              type="text"
            />
            <input
              aria-label="Телефон"
              autoComplete="tel"
              inputMode="tel"
              name="phone"
              placeholder="+7 (000) 000-00-00"
              type="tel"
            />
            <button className="button button-primary" type="submit">
              Отправить
            </button>
            <p>Ваши данные уйдут только в WhatsApp Qamqor Systems.</p>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Home
