import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const accessibilityFeatures = [
  {
    icon: "Volume2",
    title: "Для слабослышащих",
    description:
      "Меню доступно в печатном виде и на экране. Персонал готов общаться письменно. QR-код для заказа через телефон — без необходимости говорить вслух.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: "VolumeX",
    title: "Для глухих",
    description:
      "Принимаем заказы через мессенджеры и форму на сайте. Персонал обучен базовому жестовому языку. Визуальные уведомления о готовности заказа.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    icon: "Eye",
    title: "Для слабовидящих",
    description:
      "Меню с крупным шрифтом доступно по запросу. Сайт адаптирован для скринридеров. Персонал всегда поможет ознакомиться с меню и сделать заказ.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-500",
  },
]

export function Accessibility() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="accessibility" className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Доступная среда</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance">
            Мы рады каждому гостю
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Кофейня «Вафля» создана для всех. Мы заботимся о том, чтобы каждый гость чувствовал себя комфортно — независимо от особенностей здоровья.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {accessibilityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`rounded-2xl border p-8 transition-all duration-700 ${feature.color} ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`mb-4 ${feature.iconColor}`}>
                <Icon name={feature.icon} size={40} fallback="Star" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-xl border border-border text-sm text-muted-foreground max-w-2xl">
          <p>
            <strong>Нужна помощь?</strong> Если вам требуется особая помощь при визите или заказе — сообщите нам заранее по телефону или в мессенджер. Мы сделаем всё возможное, чтобы ваш визит был приятным.
          </p>
        </div>
      </div>
    </section>
  )
}
