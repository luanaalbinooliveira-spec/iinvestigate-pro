"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  Check,
  Zap,
  Shield,
  Eye,
  Clock,
  Star,
  Users,
  AlertTriangle,
  Unlock,
  Download,
  Infinity,
} from "lucide-react"

const premiumFeatures = [
  {
    icon: Unlock,
    title: "Acesso Imediato",
    description: "Veja todos os perfis encontrados instantaneamente",
  },
  {
    icon: Download,
    title: "Relatórios Completos",
    description: "Baixe relatórios detalhados em PDF",
  },
  {
    icon: Infinity,
    title: "Buscas Ilimitadas",
    description: "Investigue quantas pessoas quiser",
  },
  {
    icon: Shield,
    title: "100% Anônimo",
    description: "Sua identidade permanece completamente protegida",
  },
  {
    icon: Eye,
    title: "Monitoramento Contínuo",
    description: "Receba alertas sobre novas atividades",
  },
  {
    icon: Zap,
    title: "Resultados Instantâneos",
    description: "Sem tempo de espera, resultados em segundos",
  },
]

const testimonials = [
  {
    name: "Carla M.",
    location: "São Paulo",
    text: "Descobri que meu marido tinha 3 perfis ativos. O Premium me salvou de anos de mentiras.",
    rating: 5,
    verified: true,
  },
  {
    name: "Roberto L.",
    location: "Rio de Janeiro",
    text: "Investimento que valeu cada centavo. Agora tenho paz de espírito no meu relacionamento.",
    rating: 5,
    verified: true,
  },
  {
    name: "Fernanda S.",
    location: "Brasília",
    text: "Interface incrível e resultados precisos. Recomendo para qualquer pessoa com dúvidas.",
    rating: 5,
    verified: true,
  },
]

const pricingPlans = [
  {
    name: "Investigação Única",
    price: "R$ 29,90",
    period: "uma vez",
    description: "Perfeito para uma investigação específica",
    features: ["1 investigação completa", "Relatório detalhado em PDF", "Busca em 15+ plataformas", "Suporte por 24h"],
    popular: false,
  },
  {
    name: "Premium Mensal",
    price: "R$ 49,90",
    period: "por mês",
    description: "Ideal para monitoramento contínuo",
    features: [
      "Investigações ilimitadas",
      "Relatórios em tempo real",
      "Alertas automáticos",
      "Suporte prioritário",
      "Histórico completo",
      "Monitoramento 24/7",
    ],
    popular: true,
  },
  {
    name: "Premium Anual",
    price: "R$ 399,90",
    period: "por ano",
    description: "Melhor custo-benefício",
    originalPrice: "R$ 598,80",
    discount: "33% OFF",
    features: [
      "Tudo do Premium Mensal",
      "2 meses grátis",
      "Relatórios avançados",
      "Consultoria especializada",
      "Garantia de 30 dias",
    ],
    popular: false,
  },
]

export default function PremiumPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes
  const [selectedPlan, setSelectedPlan] = useState(1) // Premium Mensal selected by default

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <ProgressBar progress={100} />
          </div>

          {/* Urgency Banner */}
          <Card className="mb-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardContent className="pt-4">
              <div className="flex items-center justify-center space-x-4 text-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <div>
                  <p className="text-red-400 font-semibold">Oferta Limitada - Expira em: {formatTime(timeLeft)}</p>
                  <p className="text-sm text-muted-foreground">Desbloqueie seus resultados antes que expire</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-600 text-white border-amber-700">
              <Crown className="w-4 h-4 mr-1" />
              Acesso Premium
            </Badge>
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
              Sua Investigação Está
              <span className="block text-primary">75% Concluída</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Para revelar os perfis encontrados e acessar informações detalhadas, desbloqueie o acesso Premium.
              Descubra a verdade completa agora.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>3 perfis encontrados</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span>Atividade recente detectada</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Relatório detalhado pronto</span>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-2xl scale-105 border-primary"
                    : selectedPlan === index
                      ? "ring-2 ring-secondary border-secondary"
                      : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Mais Popular</Badge>
                  </div>
                )}

                {plan.discount && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-green-500 text-white">{plan.discount}</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                    )}
                  </div>
                  <CardDescription className="text-pretty">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    }`}
                    size="lg"
                  >
                    {selectedPlan === index ? "Plano Selecionado" : "Selecionar Plano"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">O Que Você Recebe com o Premium</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Histórias Reais de Usuários Premium
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 mr-1" />
                      ))}
                      {testimonial.verified && (
                        <Badge className="ml-2 bg-green-500/20 text-green-400 text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
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

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
            <CardContent className="pt-8 pb-8 text-center">
              <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">Finalize Sua Investigação Agora</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Não deixe as dúvidas consumirem seu relacionamento. Descubra a verdade completa em menos de 60 segundos.
              </p>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Clock className="w-5 h-5" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Eye className="w-5 h-5" />
                  <span>Totalmente Anônimo</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold pulse-glow"
              >
                <Crown className="w-5 h-5 mr-2" />
                Finalizar Minha Investigação - {pricingPlans[selectedPlan].price}
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                Garantia de 30 dias • Cancelamento a qualquer momento • Suporte 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
