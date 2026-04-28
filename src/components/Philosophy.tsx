import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Настоящее тесто",
    description:
      "Мы используем только классический бельгийский рецепт — без консервантов и улучшителей. Тесто готовится свежим каждое утро.",
  },
  {
    title: "Тёплая атмосфера",
    description:
      "Уютный зал, где рады всей семье. Детский уголок, мягкие диваны и приветливый персонал — здесь хочется возвращаться.",
  },
  {
    title: "Доставка за 45 минут",
    description:
      "Привезём горячие вафли прямо к вашей двери. Пн–Пт с 08:00 до 20:30, Сб–Вс с 09:00 до 20:30 по всему Ярославлю.",
  },
  {
    title: "Любовь к деталям",
    description: "Каждая вафля украшается вручную. Свежие ягоды, домашние соусы, взбитые сливки — мы не экономим на радости.",
  },
]

export function Philosophy() {
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О нас</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Готовим с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/3077a0aa-95f3-4e35-927f-a46fb3582056/files/44ead0a9-d3ed-495e-a465-24e48187386e.jpg"
                alt="Свежие бельгийские вафли с ягодами"
                className="opacity-90 relative z-10 w-full rounded-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Кофейня «Вафля» — это семейное место в Ярославле, где каждый день пекутся настоящие бельгийские вафли по традиционному рецепту. Мы открыты для всех — от малышей до бабушек.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}