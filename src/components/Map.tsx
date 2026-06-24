export function Map() {
  return (
    <section id="map" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Как нас найти</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Приезжайте в наш<br />шоурум
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Вы можете приехать к нам и вживую оценить качество материалов, фурнитуры и готовых образцов кухонь.
            </p>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="text-muted-foreground/50 font-medium mt-0.5">01</span>
                <div>
                  <p className="font-medium mb-0.5">Адрес</p>
                  <p className="text-muted-foreground">г. Оренбург, ул. Шоссейная, 10</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-muted-foreground/50 font-medium mt-0.5">02</span>
                <div>
                  <p className="font-medium mb-0.5">Телефон</p>
                  <a href="tel:+79962557733" className="text-muted-foreground hover:text-foreground transition-colors">
                    +7 (996) 255-77-33
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-muted-foreground/50 font-medium mt-0.5">03</span>
                <div>
                  <p className="font-medium mb-0.5">Срок изготовления</p>
                  <p className="text-muted-foreground">от 60 рабочих дней</p>
                </div>
              </li>
            </ul>

            <a
              href="tel:+79962557733"
              className="inline-flex items-center gap-2 mt-10 bg-foreground text-white px-6 py-3 text-sm tracking-wide hover:bg-foreground/80 transition-colors duration-300"
            >
              Позвонить нам
            </a>
          </div>

          <div className="rounded-none overflow-hidden h-[400px] lg:h-[500px] border border-border">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=55.099228%2C51.768204&z=16&pt=55.099228%2C51.768204%2Cpm2rdm~55.099228%2C51.768204%2Cpm2rdm&text=%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%A8%D0%BE%D1%81%D1%81%D0%B5%D0%B9%D0%BD%D0%B0%D1%8F%2010"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта проезда — Кухни Оренбург, ул. Шоссейная 10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
