import heroCamera from '../assets/hero/hero-camera.jpg'

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

function Pricing() {
  return (
    <section className="page pricing-page">
      <section
        className="pricing-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 10, 15, 0.82) 0%, rgba(5, 10, 15, 0.62) 48%, rgba(5, 10, 15, 0.42) 100%), url(${heroCamera})`,
        }}
      >
        <h1>Актуальные цены на установку видеонаблюдения</h1>
      </section>

      <section className="pricing-table-section" aria-label="Прайс-лист">
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
    </section>
  )
}

export default Pricing
