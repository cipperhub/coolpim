import { Bug, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://vibe.filesafe.space/1781031093106265359/attachments/5461d1ad-da1c-46de-9f35-c68383693d85.png" 
              alt="Coolpim Logo" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre Nós</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <BookingModal>
            <Button className="font-display font-semibold text-lg rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Agendar Visita
            </Button>
          </BookingModal>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary-foreground border-primary/20">
                    <MapPin className="mr-2 h-4 w-4" />
                    Atendemos em São Paulo
                  </div>
                  <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                    O jeito mais <span className="text-primary">legal</span> de controlar cupins.
                  </h1>
                  <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                    Somos especialistas em descupinização. Protegemos seu patrimônio contra cupins de solo e de madeira com segurança e eficiência.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingModal>
                    <Button size="lg" className="font-display text-xl h-14 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                      Agendar uma Visita
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </BookingModal>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Orçamento Gratuito</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Garantia de Serviço</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[500px] lg:max-w-none items-center justify-center">
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white">
                  <img
                    src="https://vibe.filesafe.space/1781031093106265359/attachments/55b9754c-1e98-4580-9261-713868de2e50.jpg"
                    alt="Pessoa incomodada com cupins"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Nossas Especialidades</h2>
              <p className="text-lg text-muted-foreground">
                Identificamos e eliminamos a raiz do problema. Cada tipo de cupim exige um tratamento específico.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow flex flex-col">
                <div className="w-full bg-muted/30 flex items-center justify-center p-8 md:p-12">
                  <img 
                    src="https://vibe.filesafe.space/1781031093106265359/attachments/460f7036-10dc-48f6-896e-2b7731a3eacb.png" 
                    alt="Cupim de Madeira" 
                    className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="font-display text-2xl font-bold mb-4">Cupim de Madeira Seca</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Atacam móveis, portas, janelas e estruturas de telhado. O tratamento é feito através de injeção e pulverização de calda cupinicida diretamente nas galerias criadas pelos insetos, preservando a peça.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Injeção localizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Pulverização protetora</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Preservação do móvel</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow flex flex-col">
                <div className="w-full bg-muted/30 flex items-center justify-center p-8 md:p-12">
                  <img 
                    src="https://vibe.filesafe.space/1781031093106265359/attachments/c62a2745-6544-43f8-bd19-29e980588f89.png" 
                    alt="Cupim de Solo" 
                    className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="font-display text-2xl font-bold mb-4">Cupim de Solo (Subterrâneo)</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Altamente destrutivos, vêm do solo e podem comprometer a estrutura do imóvel. Criamos uma barreira química no perímetro da edificação, impedindo a invasão e eliminando a colônia.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Barreira química perimetral</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Tratamento de fundações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Proteção de longo prazo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locais Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold">O que tratamos</h2>
              <p className="text-lg text-muted-foreground">
                Realizamos a descupinização em diversos tipos de móveis e estruturas para proteger seu patrimônio.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { src: "https://vibe.filesafe.space/1781031093106265359/attachments/8f99a523-9c16-40cf-8a9d-cdc7c2f4c50e.png", alt: "Aparadores" },
                { src: "https://vibe.filesafe.space/1781031093106265359/attachments/781525c9-cb8c-4c6c-b0af-fbfec1bab91c.png", alt: "Armários" },
                { src: "https://vibe.filesafe.space/1781031093106265359/attachments/399bd246-49aa-428a-99ae-1203efaf84f5.png", alt: "Assentos" },
                { src: "https://vibe.filesafe.space/1781031093106265359/attachments/d3473f9e-cf70-47da-b245-f1e387e9f81e.png", alt: "Camas" },
                { src: "https://vibe.filesafe.space/1781031093106265359/attachments/bc888e59-3a8f-433d-9381-2d25b1b56ec9.png", alt: "Estantes" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-3xl border hover:shadow-md transition-all hover:-translate-y-1">
                  <img src={item.src} alt={item.alt} className="w-full max-w-[120px] h-auto object-contain drop-shadow-sm" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Section */}
        <section id="sobre" className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <img 
                src="https://vibe.filesafe.space/1781031093106265359/attachments/2bbf7e62-e0de-4fad-9e70-09745de6f106.png" 
                alt="Selo de Garantia Coolpim" 
                className="w-40 h-40 md:w-48 md:h-48 drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center md:text-left max-w-xl space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold">Garantia de até 5 anos</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Confiamos tanto em nosso trabalho que oferecemos uma garantia estendida para nossos serviços de descupinização. Seu imóvel protegido e você tranquilo por muito mais tempo!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-24 relative overflow-hidden bg-muted/50">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center md:text-left">
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  Problemas com cupins em São Paulo?
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground">
                    Não deixe para depois. Proteja seu patrimônio com a equipe mais legal e eficiente da cidade.
                  </p>
                  <div className="flex flex-col gap-3 bg-background p-6 rounded-2xl border shadow-sm">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-lg">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span>Visita técnica <strong className="text-foreground">100% gratuita</strong></span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-lg">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span>Chegamos até você em <strong className="text-foreground">até 24 horas</strong></span>
                    </div>
                  </div>
                </div>
                <BookingModal>
                  <Button size="lg" className="font-display text-xl h-16 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto">
                    Agendar Avaliação Agora
                  </Button>
                </BookingModal>
              </div>
              <div className="mx-auto flex w-full max-w-[500px] items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://vibe.filesafe.space/1781031093106265359/attachments/e3c1a9b3-125a-494c-aec8-bb6dd07224f7.jpg" 
                  alt="Moto de atendimento Coolpim" 
                  className="relative w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 items-center">
            <div>
              <img 
                src="https://vibe.filesafe.space/1781031093106265359/attachments/5461d1ad-da1c-46de-9f35-c68383693d85.png" 
                alt="Coolpim Logo" 
                className="h-12 bg-white/10 rounded-xl p-2"
              />
              <p className="mt-4 text-background/70">
                O jeito mais legal de controlar cupins.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display font-bold text-lg mb-2">Contato</h4>
              <p className="text-background/70">São Paulo, SP</p>
              <p className="text-background/70">Atendimento Especializado</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display font-bold text-lg mb-2">Serviços</h4>
              <p className="text-background/70">Descupinização de Madeira</p>
              <p className="text-background/70">Controle de Cupim de Solo</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Coolpim. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

