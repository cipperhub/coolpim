import { Bug, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Phone, Mail, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";

const LOGO_URL = "https://vibe.filesafe.space/1781031093106265359/attachments/5461d1ad-da1c-46de-9f35-c68383693d85.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Coolpim Logo" className="h-12" />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre Nós</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <BookingModal>
            <Button className="font-display font-semibold text-lg rounded-full px-6 shadow-md hover:shadow-lg transition-all bg-yellow-400 text-black hover:bg-yellow-500">
              Agendar Visita
            </Button>
          </BookingModal>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Atendemos em São Paulo
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  O jeito mais <span className="text-yellow-400">legal</span> de controlar cupins.
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Somos especialistas em descupinização. Protegemos seu patrimônio contra cupins de solo e de madeira com segurança e eficiência.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingModal>
                    <Button size="lg" className="font-display font-semibold rounded-full px-8 py-6 text-lg bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg">
                      Agendar uma Visita <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </BookingModal>
                </div>
                <div className="flex gap-6 mt-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Orçamento Gratuito
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Garantia de Serviço
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-96 h-96 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Bug className="w-48 h-48 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-xl text-gray-600">Soluções completas contra cupins para sua casa ou empresa</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Bug className="h-8 w-8 text-yellow-500" />, title: "Descupinização de Solo", desc: "Tratamento eficiente contra cupins subterrâneos que atacam as fundações da sua edificação." },
                { icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />, title: "Descupinização de Madeira", desc: "Proteção completa para móveis, estruturas e madeiras contra cupins de madeira seca." },
                { icon: <Award className="h-8 w-8 text-yellow-500" />, title: "Vistoria e Laudo Técnico", desc: "Análise profissional da situação e emissão de laudo técnico para compra e venda de imóveis." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="sobre" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">Por que escolher a Coolpim?</h2>
                <div className="space-y-4">
                  {[
                    { icon: <Star className="h-5 w-5 text-yellow-500" />, title: "Mais de 10 anos de experiência", desc: "Experiência consolidada no mercado de controle de pragas" },
                    { icon: <Clock className="h-5 w-5 text-yellow-500" />, title: "Atendimento rápido", desc: "Agendamento em até 24 horas" },
                    { icon: <ShieldCheck className="h-5 w-5 text-yellow-500" />, title: "Produtos certificados", desc: "Utilizamos apenas produtos aprovados pela ANVISA" },
                    { icon: <CheckCircle2 className="h-5 w-5 text-yellow-500" />, title: "Garantia do serviço", desc: "Todos os serviços possuem garantia escrita" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-400 rounded-3xl p-10 text-black">
                <h3 className="font-display text-3xl font-bold mb-6">Agende sua vistoria gratuita</h3>
                <p className="mb-6">Nossos especialistas avaliam sua propriedade sem custo e apresentam o melhor plano de tratamento.</p>
                <BookingModal>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full font-semibold">
                    Quero minha vistoria gratuita
                  </Button>
                </BookingModal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-display text-4xl font-bold mb-4">Entre em contato</h2>
            <p className="text-xl text-gray-600 mb-8">Estamos prontos para ajudar você a proteger seu patrimônio</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+5511999999999" className="inline-flex items-center gap-2 bg-white border rounded-full px-6 py-3 font-medium hover:shadow-md transition-shadow">
                <Phone className="h-5 w-5 text-yellow-500" /> (11) 99999-9999
              </a>
              <a href="mailto:contato@coolpim.com.br" className="inline-flex items-center gap-2 bg-white border rounded-full px-6 py-3 font-medium hover:shadow-md transition-shadow">
                <Mail className="h-5 w-5 text-yellow-500" /> contato@coolpim.com.br
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <img src={LOGO_URL} alt="Coolpim" className="h-8" />
          <p className="text-sm text-gray-500">© 2024 Coolpim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;