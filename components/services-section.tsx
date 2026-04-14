import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  Wrench, 
  Settings, 
  Plug, 
  ClipboardCheck, 
  RefreshCw 
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Projetos Fotovoltaicos",
    description: "Elaboração técnica completa de sistemas de energia solar dimensionados para suas necessidades específicas de consumo."
  },
  {
    icon: Wrench,
    title: "Execução e Instalação",
    description: "Montagem profissional e completa de projetos fotovoltaicos com equipamentos de alta qualidade e mão de obra especializada."
  },
  {
    icon: Settings,
    title: "Manutenção e Upgrade",
    description: "Suporte técnico contínuo e modernização de sistemas antigos para maximizar a eficiência e prolongar a vida útil."
  },
  {
    icon: Plug,
    title: "Adequação Elétrica",
    description: "Preparação completa da rede elétrica residencial ou comercial para receber o sistema fotovoltaico com segurança."
  },
  {
    icon: ClipboardCheck,
    title: "Homologação",
    description: "Gestão de toda a parte burocrática junto à concessionária (Enel), garantindo que seu sistema esteja regularizado."
  },
  {
    icon: RefreshCw,
    title: "Conversão de Sistemas",
    description: "Upgrade de sistemas On-Grid para sistemas Híbridos (rede + baterias) ou Off-Grid (apenas baterias)."
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Soluções Completas em Energia Solar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Da elaboração do projeto até a homologação, cuidamos de tudo para você aproveitar todos os benefícios da energia solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
