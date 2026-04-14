"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MH Projeto Certo"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sistemas")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Tipos de Sistemas
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contato")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
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
              <Button onClick={() => scrollToSection("contato")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
