"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Leaf, TrendingDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 mb-6">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Energia Limpa e Renovável</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Transforme o Sol em <span className="text-amber-300">Economia</span> para sua Casa ou Empresa
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto text-pretty">
            Reduza até 95% da sua conta de luz com energia solar fotovoltaica. 
            Projetos personalizados, instalação profissional e suporte completo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-400 text-amber-950 hover:bg-amber-300 text-lg px-8 font-semibold"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 text-lg px-8 bg-white/5"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15">
                <TrendingDown className="w-6 h-6 text-amber-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-sm text-white/70">de economia</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">25 anos</p>
                <p className="text-sm text-white/70">de garantia</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15">
                <Leaf className="w-6 h-6 text-amber-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-white/70">sustentável</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
