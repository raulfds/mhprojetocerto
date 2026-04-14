import { Instagram, Linkedin, Phone, Sun } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mhprojeto.certo",
    icon: Instagram
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/mhprojetocerto",
    icon: Linkedin
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5511966158342",
    icon: Phone
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">MH Projeto Certo</span>
                <span className="text-xs text-primary-foreground/60 tracking-wider uppercase">Energia Solar</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Especialistas em energia solar fotovoltaica. 
              Transformando a luz do sol em economia e sustentabilidade para sua casa ou empresa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sistemas" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Tipos de Sistemas
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} MH Projeto Certo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
