"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Eye, ArrowRight, CheckCircle, Clock, Users } from "lucide-react"
import Link from "next/link"

const platformFeatures = [
  {
    icon: Zap,
    title: "Rápido",
    description: "Resultados em menos de 60 segundos",
    details: [
      "Busca instantânea em múltiplas plataformas",
      "Algoritmos otimizados para velocidade",
      "Interface responsiva e intuitiva",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Anônimo",
    description: "100% privado e confidencial",
    details: ["Sem rastros digitais deixados", "Dados criptografados end-to-end", "Nenhum registro de atividade"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Eye,
    title: "Sigiloso",
    description: "Investigação completamente discreta",
    details: ["Método não invasivo de busca", "Sem notificações para o alvo", "Relatórios confidenciais"],
    color: "from-blue-500 to-purple-500",
  },
]

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo",
    text: "Descobri que meu namorado ainda tinha perfil ativo. Melhor saber a verdade.",
    rating: 5,
  },
  {
    name: "João P.",
    location: "Rio de Janeiro",
    text: "Ferramenta incrível! Me deu a paz de espírito que eu precisava.",
    rating: 5,
  },
  {
    name: "Ana L.",
    location: "Belo Horizonte",
    text: "Rápido, discreto e eficiente. Recomendo para quem tem dúvidas.",
    rating: 5,
  },
]

export default function PlatformPage() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <ProgressBar progress={50} />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Plataforma Investigativa</Badge>
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Descubra a Verdade
              <span className="block text-primary">Em Segundos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Nossa tecnologia avançada permite investigar perfis em apps de namoro de forma completamente anônima e
              discreta. Tenha certeza sobre seu relacionamento.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Mais de 10.000 investigações</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Resultados em 60s</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span>98% de precisão</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isSelected = selectedFeature === index

              return (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-border ${
                    isSelected ? "ring-2 ring-primary shadow-2xl" : "hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedFeature(isSelected ? null : index)}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-lg">{feature.description}</CardDescription>
                  </CardHeader>

                  {isSelected && (
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Como Funciona</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Insira os dados", desc: "Nome, apelido ou email da pessoa" },
                { step: "2", title: "Busca automática", desc: "Varredura em múltiplas plataformas" },
                { step: "3", title: "Análise dos resultados", desc: "IA processa e organiza os dados" },
                { step: "4", title: "Relatório completo", desc: "Receba informações detalhadas" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
                  {index < 3 && <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto mt-4 hidden md:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">O Que Nossos Usuários Dizem</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-500 rounded-full mr-1" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic text-pretty">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{testimonial.name}</span>
                      <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          {showCTA && (
            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para Descobrir a Verdade?</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Comece sua investigação agora e tenha respostas em menos de 60 segundos.
                  </p>
                  <Link href="/discovery">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                      Iniciar Investigação
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
