import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как сделать заказ на доставку?",
    answer:
      "Позвоните нам или напишите в мессенджер — мы примем заказ и доставим горячие вафли за 45 минут. Принимаем заказы с 09:00 до 21:00 ежедневно. Минимальная сумма заказа — 500 рублей.",
  },
  {
    question: "Есть ли у вас безглютеновые или веганские вафли?",
    answer:
      "Да! Мы предлагаем безглютеновые вафли на рисовой муке и веганский вариант без яиц и молока. Сообщите об аллергии или диетических предпочтениях при заказе — мы всё учтём.",
  },
  {
    question: "Можно ли заказать вафли на мероприятие?",
    answer:
      "Конечно! Мы организуем вафельные столы на дни рождения, корпоративы, детские праздники и другие мероприятия. Свяжитесь с нами заранее — обсудим формат и меню.",
  },
  {
    question: "Как приобрести подарочный сертификат?",
    answer:
      "Подарочные сертификаты доступны в нашем кафе или по телефону. Выпускаем на любую сумму, действуют 6 месяцев. Можно оформить красивую открытку с доставкой.",
  },
  {
    question: "Есть ли у вас детское меню?",
    answer:
      "Да, у нас есть специальное детское меню: вафли меньшего размера с любимыми начинками — нутеллой, сгущёнкой, клубничным джемом. В зале есть детский уголок с игрушками.",
  },
  {
    question: "Каков адрес и время работы кафе?",
    answer:
      "Мы находимся в Ярославле. Кафе открыто ежедневно с 09:00 до 22:00, доставка работает с 09:00 до 21:00. Точный адрес уточняйте по телефону.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
