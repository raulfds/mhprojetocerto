import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Battery, BatteryFull } from "lucide-react"

const systems = [
  {
    icon: Zap,
    title: "Sistema On-Grid",
    subtitle: "Conectado à Rede",
    description: "O sistema mais comum e econômico. Conectado à rede elétrica da concessionária, você gera energia durante o dia e utiliza créditos à noite.",
    features: [
      "Menor custo de instalação",
      "Compensação de créditos de energia",
      "Sem necessidade de baterias",
      "Ideal para residências e comércios"
    ],
    highlight: "Mais Popular"
  },
  {
    icon: Battery,
    title: "Sistema Híbrido",
    subtitle: "Rede + Baterias",
    description: "Combina o melhor dos dois mundos. Conectado à rede com backup de baterias para garantir energia mesmo em quedas de luz.",
    features: [
      "Autonomia parcial da rede",
      "Backup em caso de queda de energia",
      "Armazenamento de excedente",
      "Ideal para áreas com instabilidade"
    ],
    highlight: "Mais Versátil"
  },
  {
    icon: BatteryFull,
    title: "Sistema Off-Grid",
    subtitle: "100% Autônomo",
    description: "Total independência da rede elétrica. Toda a energia gerada é armazenada em baterias para uso conforme necessidade.",
    features: [
      "Independência total da concessionária",
      "Ideal para áreas remotas",
      "Sistema completo com baterias",
      "Zero conta de luz"
    ],
    highlight: "Total Autonomia"
  }
]

export function SystemsSection() {
  return (
    <section id="sistemas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4">
            Tipos de Sistemas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Escolha o Sistema Ideal para Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada projeto é único. Conheça as opções disponíveis e descubra qual se adapta melhor às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  {system.highlight}
                </span>
              </div>
              <CardHeader className="pt-12">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <system.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">{system.title}</CardTitle>
                <p className="text-secondary-foreground font-medium">{system.subtitle}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {system.description}
                </CardDescription>
                <ul className="space-y-3">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
