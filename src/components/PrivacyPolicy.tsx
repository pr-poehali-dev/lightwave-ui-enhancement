import { useState } from "react"
import { X } from "lucide-react"

interface PrivacyPolicyProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full md:max-w-2xl md:rounded-2xl max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Политика конфиденциальности</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h3 className="font-semibold text-foreground mb-2">1. Общие положения</h3>
            <p>
              Настоящая Политика конфиденциальности регулирует порядок обработки персональных данных пользователей сайта кофейни «Вафля» (далее — Кофейня). Используя наш сайт, вы соглашаетесь с условиями настоящей политики.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">2. Какие данные мы собираем</h3>
            <p>При оформлении заказа или обращении мы можем собирать:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Имя и контактный телефон</li>
              <li>Адрес доставки</li>
              <li>Электронный адрес (при указании)</li>
              <li>Данные о заказах и предпочтениях</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">3. Цели обработки данных</h3>
            <p>Ваши персональные данные используются для:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Обработки и доставки заказов</li>
              <li>Связи с вами по вопросам заказа</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования об акциях (при согласии)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">4. Хранение и защита данных</h3>
            <p>
              Мы применяем технические и организационные меры для защиты ваших данных от несанкционированного доступа. Данные хранятся только в течение времени, необходимого для выполнения заказа и соблюдения законодательных требований.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">5. Передача данных третьим лицам</h3>
            <p>
              Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Российской Федерации, или при необходимости доставки вашего заказа.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">6. Ваши права</h3>
            <p>Вы имеете право:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Запросить доступ к своим данным</li>
              <li>Исправить неточные данные</li>
              <li>Потребовать удаления своих данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">7. Использование cookies</h3>
            <p>
              Наш сайт использует файлы cookies для обеспечения корректной работы и улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера, однако это может повлиять на работу сайта.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">8. Контакты</h3>
            <p>
              По всем вопросам, связанным с обработкой персональных данных, обращайтесь к нам по телефону или через форму обратной связи на сайте. Ярославль, кофейня «Вафля».
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs">Последнее обновление: апрель 2025 года. Кофейня «Вафля», Ярославль.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
