import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит кухня на заказ?",
    answer:
      "Стоимость зависит от размера, материалов фасадов, фурнитуры и наполнения. После бесплатного замера и согласования дизайн-проекта мы назовём точную цену без скрытых доплат. Рассчитать примерную стоимость можно уже на консультации.",
  },
  {
    question: "Сколько времени занимает изготовление кухни?",
    answer:
      "Срок изготовления — от 60 рабочих дней. Точный срок зависит от сложности проекта и выбранных материалов. Мы всегда называем реальные сроки и соблюдаем договорённости.",
  },
  {
    question: "Замер действительно бесплатный?",
    answer:
      "Да, замер и выезд дизайнера абсолютно бесплатны и ни к чему вас не обязывают. Специалист снимет точные размеры, обсудит ваши пожелания и поможет подобрать оптимальную планировку.",
  },
  {
    question: "Какую гарантию вы даёте?",
    answer:
      "Мы предоставляем гарантию на корпус и фурнитуру. Используем надёжную фурнитуру Blum и влагостойкие материалы, поэтому уверены в долговечности наших кухонь. По гарантийным вопросам всегда на связи.",
  },
  {
    question: "Вы работаете только в Оренбурге?",
    answer:
      "Наш цех находится в Оренбурге, мы работаем по городу и Оренбургской области. Доставку и монтаж в пределах региона выполняем сами. По дальним адресам уточняйте условия у менеджера.",
  },
  {
    question: "Что входит в установку?",
    answer:
      "Установка под ключ: сборка и монтаж кухни, навеска фасадов, врезка мойки и варочной панели, подключение техники. После работы мы убираем за собой, чтобы вы сразу начали пользоваться новой кухней.",
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