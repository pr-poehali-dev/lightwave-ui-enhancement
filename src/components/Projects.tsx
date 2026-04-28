import { useState, useEffect, useRef } from "react"

const menuItems = [
  {
    id: 1,
    title: "Классическая",
    category: "Бельгийская вафля",
    location: "Со сливочным маслом и мёдом",
    year: "Хит",
    image: "https://cdn.poehali.dev/projects/3077a0aa-95f3-4e35-927f-a46fb3582056/files/44ead0a9-d3ed-495e-a465-24e48187386e.jpg",
  },
  {
    id: 2,
    title: "Ягодный рай",
    category: "Бельгийская вафля",
    location: "Клубника, черника, взбитые сливки",
    year: "Новинка",
    image: "https://cdn.poehali.dev/projects/3077a0aa-95f3-4e35-927f-a46fb3582056/files/94caa424-10ad-4393-a77d-6131d2b57f88.jpg",
  },
  {
    id: 3,
    title: "Шоколадный бриз",
    category: "Бельгийская вафля",
    location: "Тёмный шоколад, банан, орехи",
    year: "Фаворит",
    image: "https://cdn.poehali.dev/projects/3077a0aa-95f3-4e35-927f-a46fb3582056/files/44ead0a9-d3ed-495e-a465-24e48187386e.jpg",
  },
  {
    id: 4,
    title: "Карамельный",
    category: "Бельгийская вафля",
    location: "Солёная карамель, маскарпоне",
    year: "Топ",
    image: "https://cdn.poehali.dev/projects/3077a0aa-95f3-4e35-927f-a46fb3582056/files/94caa424-10ad-4393-a77d-6131d2b57f88.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(menuItems[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наше меню</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Популярные вафли</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group bg-orange-400 text-white! px-5 py-2.5 hover:bg-orange-500"
          >
            Заказать сейчас
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <article
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === item.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(item.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.category} · {item.location}
                  </p>
                </div>
                <span className="text-orange-500 text-sm font-medium bg-orange-50 px-2 py-1 rounded">{item.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
