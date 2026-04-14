"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">MH Projeto Certo</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Energia Solar</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sistemas")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Tipos de Sistemas
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contato")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Solicitar Orçamento
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sistemas")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Tipos de Sistemas
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
              <Button onClick={() => scrollToSection("contato")} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
