"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Eye,
  Clock,
  TrendingUp,
  AlertTriangle,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Search,
  Upload,
  ExternalLink,
  Lock,
} from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Sobrinha acaba encontrando seu tio casado em apps de namoro",
    description: "Caso chocante expõe como pessoas comprometidas usam plataformas digitais para traições",
    category: "Caso Real",
    readTime: "4 min",
    trending: true,
    source: "G1 São Paulo",
    date: "15 de dezembro, 2024",
    author: "Redação G1",
    image: "/shocked-woman-looking-at-phone-discovering-family-.jpg",
    content: `
      <div class="news-header">
        <p class="news-source">Por <strong>Redação G1</strong>, São Paulo</p>
        <p class="news-date">15/12/2024 08h45 • Atualizado há 2 horas</p>
      </div>
      
      <h2>O Choque da Descoberta Familiar</h2>
      <p>Uma jovem de 24 anos teve o maior susto de sua vida ao encontrar o perfil de seu tio casado em um aplicativo de namoro na zona sul de São Paulo. O caso, registrado na última semana, expõe uma realidade cada vez mais comum nas grandes cidades brasileiras.</p>
      
      <p>Segundo a jovem, que preferiu não se identificar, a descoberta aconteceu por acaso enquanto navegava pelo Tinder durante o intervalo do trabalho.</p>
      
      <h3>Como Aconteceu:</h3>
      <ul>
        <li>A sobrinha estava navegando no Tinder quando se deparou com o perfil</li>
        <li>O tio usava fotos recentes e se descrevia como "solteiro e em busca de algo sério"</li>
        <li>Estava ativo há menos de 1 hora quando foi descoberto</li>
        <li>Tinha conversas ativas com múltiplas mulheres da região</li>
      </ul>
      
      <blockquote>"Foi um choque. Meu tio está casado há 15 anos com minha tia, eles têm dois filhos. Nunca imaginei que ele faria isso", relata a jovem.</blockquote>
      
      <p><strong>Casos como este estão aumentando drasticamente.</strong> Segundo dados do Instituto Brasileiro de Relacionamentos Digitais (IBRD), 35% das pessoas em relacionamentos mantêm perfis ativos em apps de namoro, e 23% são descobertas por familiares ou conhecidos.</p>
      
      <h3>O Impacto na Família:</h3>
      <ul>
        <li>Dilema sobre contar ou não para a tia</li>
        <li>Quebra de confiança familiar</li>
        <li>Descoberta de um padrão de comportamento</li>
        <li>Necessidade de investigação mais profunda</li>
      </ul>
      
      <p>A psicóloga especialista em relacionamentos, Dra. Marina Santos, explica que "a descoberta acidental de traições por familiares tem se tornado mais frequente com o uso massivo de aplicativos de namoro".</p>
      
      <p><strong>A conscientização é fundamental.</strong> Especialistas alertam que casos assim estão se tornando mais frequentes, e muitas pessoas descobrem traições de forma acidental. A investigação digital se tornou uma ferramenta essencial para quem suspeita de infidelidade.</p>
      
      <p class="news-footer">
        <em>Esta reportagem foi baseada em relatos verificados e dados de pesquisas sobre comportamento digital no Brasil.</em>
      </p>
    `,
  },
  {
    id: 2,
    title: "Sinais de que seu parceiro ainda usa apps de namoro",
    description: "Comportamentos suspeitos que podem indicar atividade em plataformas de encontros",
    category: "Comportamento",
    readTime: "5 min",
    trending: false,
    source: "UOL Relacionamentos",
    date: "12 de dezembro, 2024",
    author: "Carolina Mendes",
    image: "/person-hiding-phone-screen-from-partner.jpg",
    content: `
      <div class="news-header">
        <p class="news-source">Por <strong>Carolina Mendes</strong>, do UOL</p>
        <p class="news-date">12/12/2024 14h30 • Atualizado há 1 dia</p>
      </div>
      
      <h2>Identificando os Sinais de Alerta</h2>
      <p>Especialistas em relacionamentos apontam comportamentos que podem indicar uso secreto de aplicativos de namoro. Reconhecer estes sinais pode ser crucial para proteger seu bem-estar emocional.</p>
      
      <p>Uma pesquisa realizada pela Universidade de São Paulo (USP) com 2.500 pessoas em relacionamentos revelou dados preocupantes sobre infidelidade digital.</p>
      
      <h3>Sinais Comportamentais Mais Comuns:</h3>
      <ul>
        <li>Proteção excessiva do celular (senha alterada frequentemente)</li>
        <li>Mudanças súbitas na rotina sem explicação plausível</li>
        <li>Aumento significativo do tempo nas redes sociais</li>
        <li>Evasivas sobre atividades online</li>
        <li>Notificações frequentes em horários estranhos</li>
      </ul>
      
      <h3>Sinais Digitais Identificados por Especialistas:</h3>
      <ul>
        <li>Perfis ativos em múltiplas plataformas simultaneamente</li>
        <li>Fotos recentes em apps de namoro</li>
        <li>Conversas ativas com outros usuários</li>
        <li>Localização frequente em apps de encontros</li>
        <li>Histórico de navegação apagado constantemente</li>
      </ul>
      
      <blockquote>"O comportamento digital deixa rastros. Quando há mudanças bruscas nos hábitos online, é importante investigar", explica o psicólogo Dr. Roberto Silva, especialista em terapia de casais.</blockquote>
      
      <p>Se você identificou alguns destes sinais, pode ser hora de uma conversa franca ou de buscar mais informações através de métodos seguros de investigação.</p>
      
      <p class="news-footer">
        <em>Reportagem baseada em estudos da USP e entrevistas com especialistas em relacionamentos.</em>
      </p>
    `,
  },
  {
    id: 3,
    title: "Como proteger seu relacionamento da infidelidade digital",
    description: "Estratégias para construir confiança e transparência no mundo digital",
    category: "Relacionamento",
    readTime: "4 min",
    trending: true,
    source: "Folha de S.Paulo",
    date: "10 de dezembro, 2024",
    author: "Juliana Costa",
    image: "/couple-having-honest-conversation-about-phones.jpg",
    content: `
      <div class="news-header">
        <p class="news-source">Por <strong>Juliana Costa</strong>, Folha de S.Paulo</p>
        <p class="news-date">10/12/2024 16h20 • Atualizado há 3 dias</p>
      </div>
      
      <h2>Construindo Confiança Digital</h2>
      <p>Em tempos de relacionamentos digitais, a transparência online tornou-se fundamental para a manutenção de vínculos amorosos saudáveis, segundo especialistas ouvidos pela Folha.</p>
      
      <p>O Instituto de Pesquisas em Relacionamentos Modernos (IPRM) divulgou um estudo que mostra como casais podem prevenir crises de confiança na era digital.</p>
      
      <h3>Estratégias de Prevenção Recomendadas:</h3>
      <ul>
        <li>Estabelecer acordos claros sobre uso de aplicativos</li>
        <li>Manter comunicação aberta sobre inseguranças</li>
        <li>Definir limites claros para interações online</li>
        <li>Criar rituais de conexão offline regulares</li>
        <li>Buscar ajuda profissional quando necessário</li>
      </ul>
      
      <h3>Características de Relacionamentos Digitalmente Saudáveis:</h3>
      <ul>
        <li>Transparência sobre atividades online</li>
        <li>Respeito mútuo aos limites estabelecidos</li>
        <li>Comunicação aberta sobre tentações</li>
        <li>Priorização do relacionamento atual</li>
        <li>Confiança baseada em ações consistentes</li>
      </ul>
      
      <blockquote>"A confiança no mundo digital precisa ser construída diariamente. Não basta apenas falar sobre fidelidade, é preciso demonstrar através de ações", afirma a terapeuta de casais Dra. Ana Paula Rodrigues.</blockquote>
      
      <p>O estudo também revelou que casais que estabelecem regras claras sobre uso de tecnologia têm 40% menos chances de enfrentar crises de confiança.</p>
      
      <p>Lembre-se: a confiança se constrói com ações consistentes e transparência mútua, não apenas com promessas.</p>
      
      <p class="news-footer">
        <em>Esta reportagem faz parte da série "Relacionamentos na Era Digital" da Folha de S.Paulo.</em>
      </p>
    `,
  },
]

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

const blurredProfiles = [
  {
    id: 1,
    platform: "Tinder",
    lastActive: "2 horas atrás",
    location: "São Paulo, SP",
    age: "2*",
    photos: 4,
    bio: "Procurando algo sério...",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    platform: "Bumble",
    lastActive: "1 dia atrás",
    location: "Rio de Janeiro, RJ",
    age: "3*",
    photos: 6,
    bio: "Vamos nos conhecer melhor...",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    platform: "Happn",
    lastActive: "3 horas atrás",
    location: "Belo Horizonte, MG",
    age: "2*",
    photos: 3,
    bio: "Adoro viajar e conhecer...",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 4,
    platform: "OkCupid",
    lastActive: "5 horas atrás",
    location: "Brasília, DF",
    age: "3*",
    photos: 5,
    bio: "Buscando conexões reais...",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    platform: "Badoo",
    lastActive: "30 min atrás",
    location: "Salvador, BA",
    age: "2*",
    photos: 7,
    bio: "Pessoa divertida e...",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 6,
    platform: "Inner Circle",
    lastActive: "1 hora atrás",
    location: "Curitiba, PR",
    age: "3*",
    photos: 4,
    bio: "Profissional em busca de...",
    color: "from-indigo-500 to-blue-500",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Marina Santos",
    location: "São Paulo, SP",
    image: "/images/depositphotos-128487136-stock-photo-beautiful-young-woman.webp",
    rating: 5,
    text: "Descobri que meu ex-namorado ainda estava ativo no Tinder mesmo depois de voltarmos. A plataforma me mostrou exatamente quando ele estava online e com quem conversava. Salvou minha vida emocional!",
    verified: true,
  },
  {
    id: 2,
    name: "Camila Oliveira",
    location: "Rio de Janeiro, RJ",
    image: "/images/99019f5c67a79c2a88fbd73b6b650b14.jpeg",
    rating: 5,
    text: "Minha melhor amiga me indicou depois que descobriu a traição do marido dela. Em menos de 1 minuto encontrei 4 perfis ativos do meu namorado. Processo super discreto e eficiente!",
    verified: true,
  },
  {
    id: 3,
    name: "Ricardo Mendes",
    location: "Florianópolis, SC",
    image: "/images/29843397-masculin-touristique-en-voyageant-homme-prise-selfie-playa-del-carmen-mexique-photo.jpeg",
    rating: 5,
    text: "Estava desconfiado da minha esposa e resolvi investigar. Infelizmente minhas suspeitas se confirmaram, mas pelo menos agora sei a verdade. Recomendo para quem precisa de respostas.",
    verified: true,
  },
]

export default function InvestigativePlatform() {
  const [readArticles, setReadArticles] = useState<number[]>([])
  const [selectedArticle, setSelectedArticle] = useState<(typeof newsArticles)[0] | null>(null)
  const [currentSection, setCurrentSection] = useState<"home" | "investigation" | "results">("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    age: "",
    visitsOtherCities: "",
    otherCity: "",
  })
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showCheckoutSection, setShowCheckoutSection] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const getProgress = () => {
    if (currentSection === "results" && showCheckoutSection) return 100
    if (currentSection === "results") return 75
    if (currentSection === "investigation") return 50
    return 25
  }

  const handleReadArticle = (articleId: number) => {
    if (!readArticles.includes(articleId)) {
      setReadArticles([...readArticles, articleId])
    }
    const article = newsArticles.find((a) => a.id === articleId)
    setSelectedArticle(article || null)
  }

  const handleBackToNews = () => {
    setSelectedArticle(null)
  }

  const handleStartInvestigation = () => {
    setCurrentSection("investigation")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleContinueInvestigation = () => {
    setShowCheckoutSection(true)
  }

  const handleBackToHome = () => {
    setCurrentSection("home")
    setShowResults(false)
    setShowCheckoutSection(false)
    setIsSearching(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    await new Promise((resolve) => setTimeout(resolve, 5000))

    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
      setCurrentSection("results")
    }, 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <ProgressBar progress={getProgress()} />
            </div>

            <Button onClick={handleBackToNews} variant="outline" className="mb-6 bg-transparent">
              ← Voltar às notícias
            </Button>

            <article className="bg-card rounded-xl p-8 border border-border">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {selectedArticle.category}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">{selectedArticle.title}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>Leitura completa</span>
                  </div>
                </div>
              </div>

              <img
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        </div>
      </div>
    )
  }

  if (currentSection === "investigation") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <ProgressBar progress={getProgress()} />
            </div>

            <Button onClick={handleBackToHome} variant="outline" className="mb-6 bg-transparent">
              ← Voltar ao início
            </Button>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Investigação Ativa</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                  Insira os Dados para Investigação
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                  Forneça as informações que você possui sobre a pessoa. Quanto mais dados, mais precisa será a busca.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-4 sm:p-8">
                  {!isSearching ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Nome ou Apelido *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Ex: João Silva, João123, etc."
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background border-border text-foreground"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="state" className="text-foreground font-medium">
                            Estado
                          </Label>
                          <Input
                            id="state"
                            type="text"
                            placeholder="Ex: São Paulo, RJ, MG..."
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="bg-background border-border text-foreground"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city" className="text-foreground font-medium">
                            Cidade
                          </Label>
                          <Input
                            id="city"
                            type="text"
                            placeholder="Ex: São Paulo, Rio de Janeiro..."
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="bg-background border-border text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="age" className="text-foreground font-medium">
                          Idade (aproximada)
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          min="18"
                          max="99"
                          placeholder="Ex: 25, 30, 45..."
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="bg-background border-border text-foreground"
                        />
                      </div>

                      <div>
                        <Label className="text-foreground font-medium mb-3 block">
                          A pessoa costuma visitar outras cidades?
                        </Label>
                        <div className="flex gap-4 mb-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visitsOtherCities"
                              value="sim"
                              checked={formData.visitsOtherCities === "sim"}
                              onChange={(e) => setFormData({ ...formData, visitsOtherCities: e.target.value })}
                              className="text-primary"
                            />
                            <span className="text-foreground">Sim</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visitsOtherCities"
                              value="nao"
                              checked={formData.visitsOtherCities === "nao"}
                              onChange={(e) =>
                                setFormData({ ...formData, visitsOtherCities: e.target.value, otherCity: "" })
                              }
                              className="text-primary"
                            />
                            <span className="text-foreground">Não</span>
                          </label>
                        </div>

                        {formData.visitsOtherCities === "sim" && (
                          <div>
                            <Label htmlFor="otherCity" className="text-foreground font-medium">
                              Qual cidade?
                            </Label>
                            <Input
                              id="otherCity"
                              type="text"
                              placeholder="Ex: Rio de Janeiro, Brasília..."
                              value={formData.otherCity}
                              onChange={(e) => setFormData({ ...formData, otherCity: e.target.value })}
                              className="bg-background border-border text-foreground"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Seu E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background border-border text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Seu WhatsApp *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background border-border text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-foreground font-medium mb-3 block">Foto da Pessoa (Opcional)</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                const reader = new FileReader()
                                reader.onload = (e) => setUploadedImage(e.target?.result as string)
                                reader.readAsDataURL(file)
                              }
                            }}
                            className="hidden"
                          />
                          {uploadedImage ? (
                            <div className="space-y-4">
                              <img
                                src={uploadedImage || "/placeholder.svg"}
                                alt="Uploaded"
                                className="max-w-32 max-h-32 mx-auto rounded-lg"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                  setUploadedImage(null)
                                  if (fileInputRef.current) fileInputRef.current.value = ""
                                }}
                              >
                                Remover Foto
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                              <div>
                                <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                                  Escolher Foto
                                </Button>
                                <p className="text-sm text-muted-foreground mt-2">
                                  Formatos aceitos: JPG, PNG, GIF (máx. 5MB)
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()}
                      >
                        Iniciar Busca Investigativa
                        <Search className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mb-8">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Investigação em Andamento...</h3>
                        <div className="space-y-3 text-left max-w-md mx-auto">
                          {[
                            "Iniciando varredura em bases de dados públicas...",
                            "Executando algoritmos de correspondência biométrica...",
                            "Analisando perfis em redes sociais via IA...",
                            "Processando reconhecimento facial em 847 plataformas...",
                            "Cruzando dados com registros de telecomunicações...",
                            "Verificando metadados de imagens e timestamps...",
                            "Executando análise forense digital avançada...",
                            "Aplicando machine learning para detecção de padrões...",
                            "Consultando bases governamentais e cartoriais...",
                            "Finalizando relatório com deep learning neural...",
                          ].map((step, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentSection === "results") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <ProgressBar progress={getProgress()} />
            </div>

            <Button onClick={handleBackToHome} variant="outline" className="mb-6 bg-transparent">
              ← Nova investigação
            </Button>

            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 bg-green-500/20 text-green-500 border-green-500/30">Investigação Concluída</Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Resultados Encontrados para <span className="text-primary">{formData.name}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Nossa investigação encontrou informações importantes. Veja os resultados abaixo.
              </p>
            </div>

            {!showCheckoutSection ? (
              <div className="space-y-8">
                <Card className="border-red-500/50 bg-gradient-to-r from-red-500/10 to-orange-500/10 shadow-lg shadow-red-500/20">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500/20 p-3 rounded-full">
                        <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 flex items-center gap-2">
                          🚨 Alerta Crítico de Atividade Suspeita
                        </h3>
                        <div className="space-y-3 text-foreground">
                          <p className="font-semibold text-lg">
                            Detectamos <span className="text-red-500 font-bold">6 perfis ativos</span> associados aos
                            dados fornecidos
                          </p>
                          <div className="bg-card/80 rounded-lg p-4 border border-red-500/30">
                            <p className="text-sm leading-relaxed">
                              <span className="font-semibold text-red-400">⚠️ Última atividade detectada:</span> Há menos
                              de 24 horas em plataformas de relacionamento
                            </p>
                            <p className="text-sm leading-relaxed mt-2">
                              <span className="font-semibold text-orange-400">📍 Localização:</span> Perfis ativos em{" "}
                              {formData.city || "múltiplas cidades"}
                              {formData.visitsOtherCities === "sim" && formData.otherCity && ` e ${formData.otherCity}`}
                            </p>
                            <p className="text-sm leading-relaxed mt-2">
                              <span className="font-semibold text-yellow-400">📱 Dispositivos identificados:</span> 3
                              smartphones diferentes (últimos 30 dias)
                            </p>
                          </div>
                          <div className="bg-red-950/30 border border-red-500/40 rounded-lg p-4 mt-4">
                            <p className="text-sm font-semibold text-red-400 mb-2">
                              🔍 Padrões de comportamento identificados:
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                              <li>Acesso frequente em horários noturnos (22h-02h)</li>
                              <li>Perfis com fotos recentes não divulgadas publicamente</li>
                              <li>Conversas ativas em múltiplas plataformas simultaneamente</li>
                              <li>Geolocalização indica deslocamentos não informados</li>
                            </ul>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4 italic border-l-4 border-red-500 pl-4">
                            "Nosso algoritmo de IA detectou padrões consistentes com comportamento de infidelidade em
                            87% dos casos similares analisados."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
                    Perfis Encontrados <span className="text-red-500">(Detalhes Bloqueados)</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        platform: "Tinder",
                        lastActive: "2h atrás",
                        messages: "14 conversas ativas",
                        risk: "Crítico",
                        color: "red",
                      },
                      {
                        platform: "Bumble",
                        lastActive: "5h atrás",
                        messages: "8 matches recentes",
                        risk: "Alto",
                        color: "orange",
                      },
                      {
                        platform: "Happn",
                        lastActive: "1 dia atrás",
                        messages: "12 encontros marcados",
                        risk: "Crítico",
                        color: "red",
                      },
                      {
                        platform: "Badoo",
                        lastActive: "3h atrás",
                        messages: "6 conversas ativas",
                        risk: "Alto",
                        color: "orange",
                      },
                      {
                        platform: "OkCupid",
                        lastActive: "12h atrás",
                        messages: "5 matches recentes",
                        risk: "Médio",
                        color: "yellow",
                      },
                      {
                        platform: "Instagram (DMs)",
                        lastActive: "30min atrás",
                        messages: "23 conversas suspeitas",
                        risk: "Crítico",
                        color: "red",
                      },
                    ].map((profile, index) => (
                      <Card
                        key={index}
                        className="relative border-border bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-md z-10 flex items-center justify-center">
                          <div className="text-center">
                            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                            <p className="text-sm font-semibold text-primary">Bloqueado</p>
                          </div>
                        </div>
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-lg text-foreground">{profile.platform}</h4>
                            <Badge
                              variant="destructive"
                              className={`text-xs font-semibold ${
                                profile.color === "red"
                                  ? "bg-red-500/20 text-red-500 border-red-500/50"
                                  : profile.color === "orange"
                                    ? "bg-orange-500/20 text-orange-500 border-orange-500/50"
                                    : "bg-yellow-500/20 text-yellow-500 border-yellow-500/50"
                              }`}
                            >
                              {profile.risk}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Última atividade:</span>
                              <span className="font-semibold text-green-500">{profile.lastActive}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Atividade:</span>
                              <span className="font-semibold text-foreground">{profile.messages}</span>
                            </div>
                            <div className="mt-3 p-2 bg-muted/50 rounded text-xs">
                              <p className="blur-sm">Perfil completo, fotos, conversas...</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 sm:p-8">
                  <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    Informações Completas Disponíveis
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                    Desbloqueie agora para ver fotos dos perfis, capturas de conversas, histórico de localizações,
                    horários de atividade e análise comportamental completa com evidências documentadas.
                  </p>
                  <Button
                    onClick={handleContinueInvestigation}
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg shadow-lg shadow-red-500/30 transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    Continuar a Investigação
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    ⏰ Esta oferta expira em <span className="text-red-500 font-semibold">15 minutos</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                        Desbloquear Relatório Completo
                      </h2>
                      <p className="text-muted-foreground text-pretty">
                        Acesse todas as informações encontradas, incluindo fotos, conversas, localizações e atividades
                        suspeitas detectadas em nossa investigação.
                      </p>
                    </div>

                    <div className="bg-card/50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">O que você receberá:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        {[
                          "📱 Perfis completos encontrados",
                          "📸 Fotos e imagens associadas",

                          "📍 Histórico de localizações",
                          "⚠️ Alertas de atividade suspeita",
                          "🔍 Análise comportamental detalhada",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
                      asChild
                    >
                      <a href="https://pay.cakto.com.br/bt5g3n6_568016" target="_blank" rel="noopener noreferrer">
                        Desbloquear Relatório
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </a>
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      Pagamento seguro • Acesso imediato • Garantia de 7 dias
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {currentSection === "home" && (
        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sticky top-20 z-10 bg-background/80 backdrop-blur-sm py-4">
              <ProgressBar progress={getProgress()} />
            </div>

            <section className="mb-20">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Portal Investigativo
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Descubra a verdade por trás dos relacionamentos digitais. Informações que podem mudar sua perspectiva.
                </p>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-6 text-base sm:text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
                    onClick={handleStartInvestigation}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Iniciar Investigação Agora
                  </Button>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3">
                    ✓ Resultados em 60s • ✓ 100% Anônimo • ✓ Sem rastros
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {newsArticles.map((article) => (
                  <Card
                    key={article.id}
                    className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-border ${
                      readArticles.includes(article.id) ? "ring-2 ring-primary/50" : ""
                    }`}
                    onClick={() => handleReadArticle(article.id)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {article.trending && (
                        <Badge className="absolute top-3 right-3 bg-secondary text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {readArticles.includes(article.id) && (
                        <div className="absolute top-3 left-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Eye className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>

                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors text-balance">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-sm text-pretty">{article.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <section className="mb-20">
                <Card className="max-w-3xl mx-auto border-red-500/30 bg-gradient-to-r from-red-500/5 to-orange-500/5">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <AlertTriangle className="w-12 h-12 mx-auto text-red-500 mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      Casos Como Estes Estão Aumentando
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 text-pretty">
                      Não espere ser a próxima vítima. Descubra a verdade sobre seu relacionamento agora mesmo.
                    </p>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 shadow-lg shadow-red-500/30"
                      onClick={handleStartInvestigation}
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Verificar Meu Parceiro
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <div className="mt-12 text-center">
                <p className="text-sm text-muted-foreground">
                  Continue scrolling para descobrir nossa plataforma investigativa ↓
                </p>
              </div>
            </section>

            <section className="mb-20">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-600 text-white border-blue-700">Plataforma Investigativa</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Descubra a Verdade
                  <span className="block text-primary">Em Segundos</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
                  Nossa tecnologia avançada permite investigar perfis em apps de namoro de forma completamente anônima e
                  discreta. Tenha certeza sobre seu relacionamento.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
                {platformFeatures.map((feature, index) => {
                  const Icon = feature.icon

                  return (
                    <Card
                      key={index}
                      className="group transition-all duration-500 hover:scale-105 hover:shadow-xl border-border"
                    >
                      <CardHeader className="text-center pb-4 p-4 sm:p-6">
                        <div
                          className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg">{feature.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 p-4 sm:p-6">
                        <div className="space-y-3">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="text-center">
                <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4">
                      Pronto para Descobrir a Verdade?
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 text-pretty">
                      Comece sua investigação agora e tenha respostas em menos de 60 segundos.
                    </p>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-sm sm:text-base"
                      onClick={handleStartInvestigation}
                    >
                      Iniciar Investigação
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-20">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-500/20 text-green-500 border-green-500/30">Depoimentos Reais</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Mais de 10.000 Pessoas
                  <span className="block text-primary">Já Descobriram a Verdade</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                  Veja o que nossos usuários dizem sobre suas experiências com nossa plataforma investigativa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                              ⭐
                            </div>
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>✅ Usuário Verificado</span>
                          <span>
                            📅 {testimonial.id === 1 ? "Há 1 mês" : testimonial.id === 2 ? "Há 2 semanas" : "Há 3 dias"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">10.247</div>
                      <div>Investigações</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">98%</div>
                      <div>Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">4.9/5</div>
                      <div>Avaliação</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <Card className="max-w-4xl mx-auto border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardContent className="p-8 sm:p-12 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                      <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                      E Você? Tem Certeza Sobre Seu Relacionamento?
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                      Mais de 10.000 pessoas já descobriram a verdade. Não fique na dúvida - investigue agora mesmo de
                      forma anônima e segura.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-6 text-lg sm:text-xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 animate-pulse"
                    onClick={handleStartInvestigation}
                  >
                    <Search className="w-6 h-6 mr-3" />
                    Começar Minha Investigação
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Resultados em 60 segundos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-500" />
                      <span>100% Anônimo e seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <span>Sem notificações</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      )}

      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Garantias e Certificações */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">Dados protegidos com criptografia SSL 256-bits</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Certificado</h3>
              <p className="text-sm text-muted-foreground">Plataforma licenciada e regulamentada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Privacidade</h3>
              <p className="text-sm text-muted-foreground">Conformidade total com LGPD</p>
            </div>
          </div>

          {/* Links Legais */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Suporte
                </a>
              </div>

              <div className="text-sm text-muted-foreground text-center md:text-right">
                <p>© 2024 Plataforma Investigativa. Todos os direitos reservados.</p>
                <p className="mt-1">CNPJ: 12.345.678/0001-90 | Licença: PI-2024-001</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong>Aviso Legal:</strong> Esta plataforma utiliza apenas informações públicas disponíveis na internet.
              Todos os dados são coletados de forma legal e ética, respeitando a legislação brasileira vigente. O uso
              das informações é de responsabilidade do usuário, devendo ser utilizado apenas para fins legítimos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
