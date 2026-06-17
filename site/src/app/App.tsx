import { useState } from "react";
import { Menu, X, Phone, MapPin, MessageCircle, ChevronRight, Star, Trophy, Users, Calendar } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Contato", href: "#contato" },
];

const PRODUCTS = [
  {
    name: "Mesas de Sinuca",
    desc: "Mesas de bilhar e sinuca profissionais para residências e salões",
    img: "https://images.unsplash.com/photo-1762086091607-1dfd5fa60a67?w=600&h=400&fit=crop&auto=format",
    tag: "MAIS VENDIDO",
  },
  {
    name: "Ping Pong",
    desc: "Mesas e raquetes de tênis de mesa para competição e lazer",
    img: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&h=400&fit=crop&auto=format",
    tag: null,
  },
  {
    name: "Pebolim",
    desc: "Mesas de totó passante e fixo, ideais para festas e eventos",
    img: "https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=600&h=400&fit=crop&auto=format",
    tag: null,
  },
  {
    name: "Air Hockey",
    desc: "Mesas de air hockey para diversão garantida em família",
    img: "https://images.unsplash.com/photo-1693214893231-22d3fc4be5ed?w=600&h=400&fit=crop&auto=format",
    tag: "NOVIDADE",
  },
  {
    name: "Mesa de Carteado",
    desc: "Mesas de baralho e jogos de cartas com feltro premium",
    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop&auto=format",
    tag: null,
  },
  {
    name: "Tacos e Acessórios",
    desc: "Tacos profissionais, bolas de sinuca, triângulos e muito mais",
    img: "https://images.unsplash.com/photo-1694888409336-dd51291e99b1?w=600&h=400&fit=crop&auto=format",
    tag: null,
  },
];

const OFFERS = [
  {
    name: "Aero Hockey Klopf",
    original: "R$ 4.680",
    cash: "R$ 4.000",
    saving: "Economize R$ 680",
    desc: "Mesa de air hockey profissional com motor silencioso",
  },
  {
    name: "Pebolim Passante",
    original: "R$ 2.998",
    cash: "R$ 2.680",
    saving: "Economize R$ 318",
    desc: "Pebolim com hastes passantes, estrutura reforçada em MDF",
  },
  {
    name: "Sinuca 2,20m",
    original: "R$ 3.200",
    cash: "R$ 2.750",
    saving: "Economize R$ 450",
    desc: "Mesa de sinuca tamanho oficial com feltro importado verde",
  },
];

const SERVICES = [
  {
    icon: <Users size={28} />,
    title: "Festas Particulares",
    desc: "Alugamos mesas de sinuca, pebolim e ping pong para aniversários, churrascos e confraternizações.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Eventos Corporativos",
    desc: "Estrutura completa para team buildings, convenções e eventos empresariais em São Paulo e Grande SP.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Entrega e Instalação",
    desc: "Realizamos entrega, montagem e desmontagem com equipe própria. Atendemos todo o estado de SP.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [newsletter, setNewsletter] = useState({ name: "", email: "" });
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSent(true);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col leading-none">
            <span
              className="text-2xl font-black tracking-tight text-primary"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              CAPELO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Bilhares & Jogos
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5511991766817"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            style={{ borderRadius: "2px" }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* BG image */}
        <div className="absolute inset-0 bg-background">
          <img
            src="https://images.unsplash.com/photo-1770802938506-4ff457fb59c4?w=1600&h=900&fit=crop&auto=format"
            alt="Mesa de bilhar verde com luminárias"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-24">
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                Desde 1985 — São Paulo
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-[0.9] text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mestres
              <br />
              <em className="text-primary not-italic">do Bilhar</em>
              <br />
              em SP.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Mesas de sinuca, ping pong, pebolim, air hockey e muito mais.
              Vendas, aluguel para eventos e acessórios profissionais.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}
              >
                Ver Produtos
                <ChevronRight size={18} />
              </a>
              <a
                href="#contato"
                className="flex items-center gap-2 border border-primary text-primary px-8 py-4 font-semibold tracking-wide hover:bg-primary/10 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Fale Conosco
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              {[
                { n: "+40", label: "Anos de mercado" },
                { n: "500+", label: "Clientes atendidos" },
                { n: "100%", label: "Satisfação garantida" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-black text-primary"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image card */}
          <div className="hidden md:block relative">
            <div
              className="relative overflow-hidden bg-secondary"
              style={{ borderRadius: "4px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1738411186017-bbd1bf636c8b?w=700&h=800&fit=crop&auto=format"
                alt="Jogador com taco de sinuca"
                className="w-full h-[520px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c8982a" stroke="none" />
                  ))}
                </div>
                <p className="text-sm text-foreground font-semibold">
                  "A melhor loja de bilhar de São Paulo"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  — Cliente desde 2018
                </p>
              </div>
            </div>
            {/* Decorative border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
      </section>

      {/* ── EMPRESA ── */}
      <section id="empresa" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1760903192559-17dc111d31e3?w=700&h=500&fit=crop&auto=format"
              alt="Mesa de sinuca com bolas e triângulo"
              className="w-full h-80 object-cover opacity-80"
              style={{ borderRadius: "4px" }}
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                Nossa História
              </span>
            </div>
            <h2
              className="text-4xl font-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tradição e qualidade há mais de quatro décadas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Bilhares Capelo nasceu da paixão pelo bilhar e pelo lazer. Com
              sede na Av. João XXIII, 2036, em São Paulo, atendemos clientes em
              toda a Grande SP com os melhores equipamentos do mercado nacional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Oferecemos produtos para todos os públicos — do iniciante ao
              jogador profissional — além de serviço de aluguel para eventos
              corporativos e festas particulares.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Av. João XXIII, 2036 — SP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUTOS ── */}
      <section id="produtos" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                  Catálogo
                </span>
              </div>
              <h2
                className="text-4xl font-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Nossos Produtos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Equipamentos de lazer para residências, clubes, bares e eventos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                {p.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                    {p.tag}
                  </div>
                )}
                <div className="overflow-hidden bg-secondary h-52">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                  <button className="flex items-center gap-1 text-primary text-sm font-semibold mt-3 hover:gap-2 transition-all">
                    Consultar preço <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-14 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                Serviços
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Aluguel para Eventos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Transforme seu evento em uma experiência memorável com nosso
              serviço de aluguel de mesas e equipamentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border p-8 space-y-4 hover:border-primary/50 transition-colors"
                style={{ borderRadius: "4px" }}
              >
                <div className="text-primary">{s.icon}</div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div
            className="mt-12 bg-primary p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderRadius: "4px" }}
          >
            <div>
              <h3
                className="text-2xl font-black text-primary-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Solicite um orçamento agora
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Respondemos em até 2 horas no WhatsApp
              </p>
            </div>
            <a
              href="https://wa.me/5511991766817"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-bold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ borderRadius: "2px" }}
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── OFERTAS ── */}
      <section id="ofertas" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                Promoções
              </span>
            </div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ofertas Especiais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {OFFERS.map((o) => (
              <div
                key={o.name}
                className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
                style={{ borderRadius: "4px" }}
              >
                <div className="bg-primary/10 border-b border-border px-6 py-4">
                  <span className="text-[10px] tracking-[0.3em] text-primary uppercase font-bold">
                    Desconto à vista
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    {o.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                  <div className="space-y-1">
                    <div className="text-muted-foreground line-through text-sm">
                      {o.original}
                    </div>
                    <div
                      className="text-3xl font-black text-primary"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {o.cash}
                    </div>
                    <div className="text-xs text-primary/70 font-semibold">
                      {o.saving} no pagamento à vista
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5511991766817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                    style={{ borderRadius: "2px" }}
                  >
                    <MessageCircle size={15} />
                    Tenho Interesse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                  Contato
                </span>
              </div>
              <h2
                className="text-4xl font-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fale com a gente
              </h2>
              <p className="text-muted-foreground">
                Estamos prontos para tirar dúvidas, enviar orçamentos e agendar
                visitas ao nosso showroom.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Phone size={18} />, label: "Telefones", value: "(11) 99176-6817\n(11) 2782-8044\n(11) 2782-8200" },
                { icon: <MapPin size={18} />, label: "Endereço", value: "Av. João XXIII, 2036\nSão Paulo — SP" },
                { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "(11) 99176-6817" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div className="text-primary mt-0.5 shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-1">
                      {c.label}
                    </div>
                    <div className="text-sm text-foreground whitespace-pre-line">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/5511991766817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="tel:+5511991766817"
                className="flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <Phone size={16} />
                Ligar
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="bg-card border border-border p-8 flex flex-col justify-center space-y-6"
            style={{ borderRadius: "4px" }}
          >
            <div>
              <h3
                className="text-2xl font-black mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Receba nossas ofertas
              </h3>
              <p className="text-sm text-muted-foreground">
                Cadastre-se e receba promoções exclusivas e novidades em
                primeira mão.
              </p>
            </div>

            {newsletterSent ? (
              <div className="bg-primary/10 border border-primary/30 p-6 text-center" style={{ borderRadius: "4px" }}>
                <p className="text-primary font-semibold">Cadastro realizado!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Em breve você receberá nossas ofertas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-4">
                <div>
                  <label className="block text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={newsletter.name}
                    onChange={(e) => setNewsletter({ ...newsletter, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-input-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    style={{ borderRadius: "2px" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={newsletter.email}
                    onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value })}
                    placeholder="seu@email.com.br"
                    className="w-full bg-input-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    style={{ borderRadius: "2px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "2px" }}
                >
                  Quero Receber Ofertas
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-background border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span
              className="text-xl font-black text-primary"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              CAPELO
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              Bilhares &amp; Jogos
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Bilhares Capelo. Av. João XXIII, 2036 — São Paulo, SP.
          </p>
          <div className="flex gap-6">
            {["Facebook", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
