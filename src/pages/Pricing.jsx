const priceRows = [
  ['Монтаж IP камеры в помещение на высоте до 3 м.', '15 000 ₸'],
  ['Монтаж IP камеры в помещение на высоте от 3 м.', '20 000 ₸'],
  ['Монтаж IP камеры на улице на высоте до 3 м.', '20 000 ₸'],
  ['Монтаж IP камеры на улице на высоте от 3 м.', '25 000 ₸'],
  ['Монтаж Wi‑Fi камеры', '18 000 ₸'],
  ['Монтаж PTZ камеры', '25 000 ₸'],
  ['Демонтаж HD камер', '5 000 ₸'],
  ['Установка видеорегистратора с подключением к интернету', '10 000 ₸'],
  ['Прокладка UTP/FTP кабеля открытым способом', '200 ₸/м'],
  ['Прокладка UTP/FTP кабеля в гофре', '250 ₸/м'],
  ['Прокладка UTP/FTP кабеля в кабель-канале', '300 ₸/м'],
  ['Настройка удалённого просмотра', '5 000 ₸'],
  ['Монтаж IP домофона под ключ', 'от 200 000 ₸'],
  ['Сброс пароля Hikvision', 'от 8 000 ₸'],
  ['Выезд и осмотр объекта', 'Бесплатно'],
  ['Выезд и осмотр объекта за пределами г. Кокшетау', 'от 10 000 ₸'],
]

const whatsappUrl = 'https://wa.me/77473806542'

function Pricing() {
  return (
    <section className="page pricing-page">
      <section className="pricing-hero">
        <h1>Актуальные цены на установку видеонаблюдения</h1>
      </section>

      <section className="pricing-table-section" aria-label="Прайс-лист">
        <p className="pricing-table__lead">
          Ниже — ориентиры по монтажным работам. Финальная сумма зависит от
          оборудования, кабеля, высоты установки и условий на объекте.
        </p>
        <div className="pricing-table">
          {priceRows.map(([title, price]) => (
            <div className="pricing-table__row" key={title}>
              <span>{title}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
        <p className="pricing-table__note">
          Точная стоимость зависит от объекта, количества оборудования, длины
          кабеля и сложности монтажа.
        </p>
      </section>

      <section className="inner-page-cta">
        <h2>Хотите понять стоимость по вашему объекту?</h2>
        <p>
          Напишите в WhatsApp — уточним задачу и подскажем, какие работы нужны.
        </p>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Получить расчет в WhatsApp
        </a>
      </section>
    </section>
  )
}

export default Pricing
