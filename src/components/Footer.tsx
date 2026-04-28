import { useState } from "react"
import { PrivacyPolicy } from "./PrivacyPolicy"

export function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false)

  return (
    <>
      <PrivacyPolicy isOpen={policyOpen} onClose={() => setPolicyOpen(false)} />

      <footer className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold tracking-tight">☕ Вафля</span>
              </a>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Семейная кофейня в Ярославле. Настоящие бельгийские вафли с доставкой на дом и в уютном зале — с 2018 года.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Навигация</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#projects" className="hover:text-foreground transition-colors">
                    Меню
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#accessibility" className="hover:text-foreground transition-colors">
                    Доступная среда
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Заказать
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+7" className="hover:text-foreground transition-colors">
                    Телефон для заказов
                  </a>
                </li>
                <li>
                  <a href="https://cafevaflya.ru" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    cafevaflya.ru
                  </a>
                </li>
                <li className="text-muted-foreground">Ярославль</li>
                <li className="text-muted-foreground">Пн–Пт: 08:00 – 20:30</li>
                <li className="text-muted-foreground">Сб–Вс: 09:00 – 20:30</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Кофейня «Вафля». Все права защищены.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setPolicyOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer"
              >
                Политика конфиденциальности
              </button>
              <a href="#accessibility" className="hover:text-foreground transition-colors">
                Доступная среда
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}