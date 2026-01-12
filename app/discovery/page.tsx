"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Search, Loader2, Eye, MapPin, Calendar, Lock, Zap } from "lucide-react"
import Link from "next/link"

interface ProfileResult {
  id: number
  platform: string
  name: string
  age: number
  location: string
  lastActive: string
  photos: number
  verified: boolean
  premium: boolean
}

const mockResults: ProfileResult[] = [
  {
    id: 1,
    platform: "Tinder",
    name: "João S.",
    age: 28,
    location: "São Paulo, SP",
    lastActive: "2 horas atrás",
    photos: 6,
    verified: true,
    premium: false,
  },
  {
    id: 2,
    platform: "Bumble",
    name: "João Silva",
    age: 28,
    location: "São Paulo, SP",
    lastActive: "1 dia atrás",
    photos: 4,
    verified: false,
    premium: true,
  },
  {
    id: 3,
    platform: "Happn",
    name: "J. Silva",
    age: 29,
    location: "São Paulo, SP",
    lastActive: "3 horas atrás",
    photos: 8,
    verified: true,
    premium: false,
  },
]

export default function DiscoveryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchProgress, setSearchProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [searchComplete, setSearchComplete] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setSearchProgress(0)
    setShowResults(false)
    setSearchComplete(false)

    // Simulate search progress
    const progressInterval = setInterval(() => {
      setSearchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsSearching(false)
          setShowResults(true)
          setTimeout(() => setSearchComplete(true), 1000)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  const platforms = [
    { name: "Tinder", status: "Verificando...", completed: searchProgress > 20 },
    { name: "Bumble", status: "Analisando...", completed: searchProgress > 40 },
    { name: "Happn", status: "Buscando...", completed: searchProgress > 60 },
    { name: "Badoo", status: "Processando...", completed: searchProgress > 80 },
    { name: "OkCupid", status: "Finalizando...", completed: searchProgress > 95 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <ProgressBar progress={75} />
          </div>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Simulação de Descoberta</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Investigação Avançada</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Insira os dados da pessoa que deseja investigar. Nossa IA fará uma busca completa em múltiplas plataformas
              de namoro.
            </p>
          </div>

          {/* Search Form */}
          <Card className="mb-8 border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-primary" />
                <span>Dados para Investigação</span>
              </CardTitle>
              <CardDescription>Quanto mais informações você fornecer, mais precisa será a busca</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="search-query">Nome, apelido ou email</Label>
                <Input
                  id="search-query"
                  placeholder="Ex: João Silva, joao.silva@email.com"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mt-1"
                  disabled={isSearching}
                />
              </div>

              <Button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isSearching}
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Investigando...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Iniciar Investigação
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Search Progress */}
          {isSearching && (
            <Card className="mb-8 border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    <Search className="w-6 h-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Buscando perfis...</h3>
                  <p className="text-muted-foreground">Analisando {platforms.length} plataformas de namoro</p>
                </div>

                <div className="space-y-3">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            platform.completed ? "bg-green-500" : "bg-primary animate-pulse"
                          }`}
                        />
                        <span className="font-medium text-foreground">{platform.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {platform.completed ? "Concluído" : platform.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Progresso da busca</span>
                    <span>{Math.round(searchProgress)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 pulse-glow"
                      style={{ width: `${searchProgress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Blurred Results */}
          {showResults && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
                  {mockResults.length} perfis encontrados
                </Badge>
                <h2 className="text-2xl font-bold text-foreground mb-2">Resultados da Investigação</h2>
                <p className="text-muted-foreground">Encontramos atividade em múltiplas plataformas</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockResults.map((result, index) => (
                  <Card key={result.id} className="relative border-border overflow-hidden">
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">Conteúdo Bloqueado</p>
                        <p className="text-xs text-muted-foreground">Premium necessário</p>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {result.platform}
                        </Badge>
                        {result.verified && <Badge className="bg-blue-500/20 text-blue-400 text-xs">Verificado</Badge>}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{result.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{result.name}</h3>
                          <p className="text-sm text-muted-foreground">{result.age} anos</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{result.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Ativo {result.lastActive}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Eye className="w-4 h-4" />
                          <span>{result.photos} fotos</span>
                        </div>
                      </div>

                      {result.premium && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">
                          <Zap className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {searchComplete && (
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mt-8">
                  <CardContent className="pt-6 text-center">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Investigação 75% Concluída</h3>
                    <p className="text-muted-foreground mb-6 text-pretty">
                      Para revelar os perfis encontrados e acessar informações detalhadas, desbloqueie o acesso Premium.
                    </p>
                    <Link href="/premium">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <Lock className="w-4 h-4 mr-2" />
                        Desbloquear Resultados
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
