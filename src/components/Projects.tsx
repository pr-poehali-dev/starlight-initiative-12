import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Скандинавский минимализм",
    category: "Прямая кухня",
    location: "Оренбург",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/e555fc93-0ba8-4e27-9e35-f0386638daea.jpg",
  },
  {
    id: 2,
    title: "Классика с островом",
    category: "Кухня с островом",
    location: "Оренбург",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/5e6d952b-1a4e-4131-9d63-2e3f4239aa78.jpg",
  },
  {
    id: 3,
    title: "Изумрудный модерн",
    category: "Угловая кухня",
    location: "Оренбург",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/1a0ac954-1800-4d31-a8f8-53c116bcbd1b.jpg",
  },
  {
    id: 4,
    title: "Уютная компактная",
    category: "Кухня для квартиры",
    location: "Оренбург",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/39d746ea-8475-4155-bb04-3b307cdd2560.jpg",
  },
  {
    id: 5,
    title: "Белый глянец",
    category: "Кухня с островом",
    location: "Оренбург",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/839e2759-765a-40c9-aac9-af17157c162f.jpg",
  },
  {
    id: 6,
    title: "Лофт из ореха",
    category: "Прямая кухня",
    location: "Оренбург",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/2c7f055c-faed-44ec-bed6-02e6b7155e17.jpg",
  },
  {
    id: 7,
    title: "Синяя классика",
    category: "Угловая кухня",
    location: "Оренбург",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/b654dfe4-001c-4853-b079-096418f6a7f2.jpg",
  },
  {
    id: 8,
    title: "Прованс в шалфее",
    category: "Прямая кухня",
    location: "Оренбург",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/aa291e06-f0d2-4c31-9dca-f3185ba147d5/files/f516b814-e4a1-4e5e-aa46-75db4d55c303.jpg",
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
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
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
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Готовые кухни</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
Смотреть все кухни
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}