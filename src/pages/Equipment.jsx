import equipment from '../data/equipment.js'

const equipmentGroups = [
  {
    title: 'Видеонаблюдение',
    text: 'IP-камеры для улицы и помещений, видеорегистраторы, жесткие диски, блоки питания и комплектующие для записи.',
  },
  {
    title: 'Домофоны и доступ',
    text: 'Вызывные панели, мониторы, замки, кнопки выхода и оборудование для частных домов, офисов и входных групп.',
  },
  {
    title: 'Охранные системы',
    text: 'Датчики движения и открытия, сирены, панели управления и оборудование для уведомлений при срабатывании.',
  },
  {
    title: 'Кабель и монтаж',
    text: 'Кабель, провод, разъемы, коннекторы, гофра, кабель-канал и расходные материалы для аккуратной установки.',
  },
]

function Equipment() {
  return (
    <section className="page equipment-page">
      <section className="equipment-hero">
        <h1>Оборудование для систем безопасности</h1>
      </section>

      <section className="equipment-intro">
        <h2>Подбираем под задачу, а не просто по названию модели</h2>
        <div className="equipment-highlight-text">
          <p>
            Для частного дома, магазина, офиса или склада набор будет разным:
            где-то достаточно нескольких камер, а где-то нужны регистратор,
            кабельные линии, питание, домофон и охранные датчики.
          </p>
          <p>
            Учитываем улицу или помещение, дальность обзора, ночную съемку,
            удаленный доступ и условия монтажа. Можно купить оборудование
            отдельно или сразу обсудить установку под ключ.
          </p>
        </div>
      </section>

      <section className="equipment-brands">
        <h2>Какие бренды используем</h2>
        <p className="equipment-section-lead">
          Работаем с проверенными брендами для видеонаблюдения, домофонов и
          охранных систем. Ниже — основные марки, которые можно рассматривать
          для дома, магазина, офиса, склада или территории.
        </p>
        <ul className="equipment-brand-list">
          {equipment.brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </section>

      <section className="equipment-categories">
        <h2>Под задачу, объект и условия монтажа</h2>
        <p className="equipment-section-lead">
          Для улицы, помещения, кассы, ворот, склада или офиса требования будут
          разными. Ниже — основные группы оборудования, которые чаще всего
          входят в комплект.
        </p>
        <div className="equipment-text-list">
          {equipmentGroups.map((group, index) => (
            <article className="equipment-text-item" key={group.title}>
              <div className="equipment-text-item__head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Equipment
