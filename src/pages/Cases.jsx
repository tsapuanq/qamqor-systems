import cases from '../data/cases.js'
import dostyqSchoolImage from '../assets/cases/dostyq-school.svg'

const whatsappUrl = 'https://wa.me/77473806542'

const visibleCases = cases.filter((caseItem) => caseItem.title !== 'Домофон для частного дома')

const caseDetails = [
  {
    title: 'Dostyq School',
    lead:
      'Для школы установили систему домофонии HiWatch, чтобы вход работал через вызовные панели, монитор и магнитный замок.',
    details:
      'Поставили две вызывные панели и один монитор. Оборудование подключено к магнитному замку, чтобы посетителя можно было принять и открыть дверь изнутри.',
    result:
      'Вход стал понятнее и безопаснее: сотрудник видит вызов, общается с посетителем и управляет открытием двери.',
    image: dostyqSchoolImage,
    imageAlt: 'Dostyq School',
  },
  {
    title: 'Магазин',
    lead:
      'Для магазина камеры помогают контролировать вход, торговый зал, кассу и спорные ситуации.',
    details:
      'Продумываем расположение камер так, чтобы были видны покупатели, кассовая зона, склад или служебный вход. Настраиваем запись и удаленный просмотр для владельца.',
    result:
      'Система помогает быстрее разбирать конфликтные ситуации и держать объект под контролем вне магазина.',
  },
  {
    title: 'Офис',
    lead:
      'Для офиса часто нужна связка видеонаблюдения, контроля входа и охранных датчиков.',
    details:
      'Можно установить камеры на вход, в коридоры и рабочие зоны, добавить домофон или охранную систему. Решение подбирается под планировку и режим работы офиса.',
    result:
      'Руководитель видит ключевые зоны, а сотрудники понимают, как пользоваться системой без лишней сложности.',
  },
  {
    title: 'Склад',
    lead:
      'На складе важно видеть вход, зоны погрузки, стеллажи и территорию вокруг объекта.',
    details:
      'Для таких объектов считаем количество камер, длину кабеля, места установки и условия прокладки. При необходимости добавляются охранные датчики и отдельные зоны контроля.',
    result:
      'Система помогает контролировать сотрудников, движение товара и возможные инциденты на объекте.',
  },
]

function Cases() {
  return (
    <section className="page cases-page">
      <section className="cases-hero">
        <h1>Наши проекты видеонаблюдения и безопасность под ключ</h1>
      </section>

      <section className="cases-showcase">
        <div className="cases-showcase__intro">
          <h2>Кейсы и примеры работ</h2>
          <p>
            Показываем типовые задачи, с которыми обращаются владельцы домов,
            магазинов, офисов и складов. Реальные фото объектов можно будет
            добавить отдельно, когда они будут подготовлены для сайта.
          </p>
        </div>

        <div className="cases-showcase__grid">
          {visibleCases.map((caseItem, index) => {
            const detail = caseDetails[index] ?? caseDetails[0]

            return (
              <article className="cases-feature" key={caseItem.title}>
                {detail.image ? (
                  <figure className="cases-feature__media">
                    <img src={detail.image} alt={detail.imageAlt ?? detail.title} />
                  </figure>
                ) : (
                  <div className="cases-feature__visual" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{detail.title}</strong>
                  </div>
                )}

                <h3>{detail.title}</h3>
                <p>{detail.lead}</p>
                <p>
                  <strong>Что делаем:</strong> {detail.details}
                </p>
                <p>
                  <strong>Результат:</strong> {detail.result}
                </p>
                <p className="cases-feature__price">
                  <strong>Расчет стоимости:</strong> после уточнения объекта,
                  количества оборудования и условий монтажа.
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="cases-final">
        <div>
          <h2>Хотите похожее решение?</h2>
          <p>
            Напишите в WhatsApp — уточним объект, задачу и подскажем, какой
            комплект оборудования подойдет.
          </p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Обсудить объект в WhatsApp
        </a>
      </section>
    </section>
  )
}

export default Cases
