import { useState } from "react";
import { Link } from "react-router";
import { Phone, MapPin, MessageCircle, ChevronRight, Star, Trophy, Users, Calendar } from "lucide-react";
import { CATEGORIES, PRODUCTS, formatPrice } from "../data/products";

const OFFERS = [
  { id: "air-hockey-klopf", name: "Aero Hockey Klopf", original: 4680, cash: 4000, desc: "Mesa de air hockey profissional com motor silencioso" },
  { id: "pebolim-passante", name: "Pebolim Passante", original: 2998, cash: 2680, desc: "Pebolim com hastes passantes, estrutura reforçada em MDF" },
  { id: "sinuca-standard-220", name: "Sinuca 2,20m", original: 3200, cash: 2750, desc: "Mesa de sinuca tamanho oficial com feltro importado verde" },
];

const SERVICES = [
  { icon: <Users size={28} />, title: "Festas Particulares", desc: "Alugamos mesas de sinuca, pebolim e ping pong para aniversários, churrascos e confraternizações." },
  { icon: <Trophy size={28} />, title: "Eventos Corporativos", desc: "Estrutura completa para team buildings, convenções e eventos empresariais em São Paulo e Grande SP." },
  { icon: <Calendar size={28} />, title: "Entrega e Instalação", desc: "Realizamos entrega, montagem e desmontagem com equipe própria. Atendemos todo o estado de SP." },
];

const FEATURED_IDS = ["sinuca-standard-220", "mesa-pingpong-standard", "pebolim-passante", "air-hockey-klopf", "mesa-carteado-redonda", "taco-elite"];

export default function Home() {
  const [newsletter, setNewsletter] = useState({ name: "", email: "" });
  const [newsletterSent, setNewsletterSent] = useState(false);

  const featuredProducts = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as typeof PRODUCTS;

  return (
    <>
      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <img src="https://images.unsplash.com/photo-1770802938506-4ff457fb59c4?w=1600&h=900&fit=crop&auto=format"
            alt="Mesa de bilhar verde com luminárias" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Desde 1985 — São Paulo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Mestres<br /><em className="text-primary not-italic">do Bilhar</em><br />em SP.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Mesas de sinuca, ping pong, pebolim, air hockey e muito mais. Vendas, aluguel para eventos e acessórios profissionais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/categoria/sinuca"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}>
                Ver Produtos <ChevronRight size={18} />
              </Link>
              <a href="#contato"
                className="flex items-center gap-2 border border-primary text-primary px-8 py-4 font-semibold tracking-wide hover:bg-primary/10 transition-colors"
                style={{ borderRadius: "2px" }}>
                Fale Conosco
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              {[{ n: "+40", label: "Anos de mercado" }, { n: "500+", label: "Clientes atendidos" }, { n: "100%", label: "Satisfação garantida" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-primary" style={{ fontFamily: "'Nunito', sans-serif" }}>{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative overflow-hidden bg-secondary" style={{ borderRadius: "4px" }}>
              <img src="https://images.unsplash.com/photo-1738411186017-bbd1bf636c8b?w=700&h=800&fit=crop&auto=format"
                alt="Jogador com taco de sinuca" className="w-full h-[520px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c8982a" stroke="none" />)}
                </div>
                <p className="text-sm font-semibold">"A melhor loja de bilhar de São Paulo"</p>
                <p className="text-xs text-muted-foreground mt-1">— Cliente desde 2018</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" style={{ borderRadius: "4px" }} />
          </div>
        </div>
      </section>

      {/* ── EMPRESA ── */}
      <section id="empresa" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1760903192559-17dc111d31e3?w=700&h=500&fit=crop&auto=format"
              alt="Mesa de sinuca com bolas e triângulo" className="w-full h-80 object-cover opacity-80" style={{ borderRadius: "4px" }} />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Nossa História</span>
            </div>
            <h2 className="text-4xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tradição e qualidade há mais de quatro décadas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Bilhares Capelo nasceu da paixão pelo bilhar e pelo lazer. Com sede na Av. João XXIII, 2036, em São Paulo, atendemos clientes em toda a Grande SP com os melhores equipamentos do mercado nacional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Oferecemos produtos para todos os públicos — do iniciante ao jogador profissional — além de serviço de aluguel para eventos corporativos e festas particulares.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" /> Av. João XXIII, 2036 — SP
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUTOS DESTAQUE ── */}
      <section id="produtos" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Catálogo</span>
              </div>
              <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Nossos Produtos</h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">Equipamentos de lazer para residências, clubes, bares e eventos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <Link key={p.id} to={`/produto/${p.id}`}
                className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
                style={{ borderRadius: "4px" }}>
                {p.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">{p.tag}</div>
                )}
                <div className="overflow-hidden bg-secondary h-52">
                  <img src={p.images[0]} alt={p.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.shortDesc}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-black text-primary" style={{ fontFamily: "'Nunito', sans-serif" }}>{formatPrice(p.price)}</span>
                    <span className="flex items-center gap-1 text-primary text-sm font-semibold">Ver detalhes <ChevronRight size={15} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/categoria/${cat.id}`}
                className="flex flex-col items-center gap-2 p-4 bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-colors text-center"
                style={{ borderRadius: "4px" }}>
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-semibold text-muted-foreground">{cat.name}</span>
              </Link>
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
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Serviços</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Aluguel para Eventos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Transforme seu evento em uma experiência memorável com nosso serviço de aluguel.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card border border-border p-8 space-y-4 hover:border-primary/50 transition-colors" style={{ borderRadius: "4px" }}>
                <div className="text-primary">{s.icon}</div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderRadius: "4px" }}>
            <div>
              <h3 className="text-2xl font-black text-primary-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Solicite um orçamento agora</h3>
              <p className="text-primary-foreground/80 text-sm mt-1">Respondemos em até 2 horas no WhatsApp</p>
            </div>
            <a href="https://wa.me/5511991766817" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ borderRadius: "2px" }}>
              <MessageCircle size={18} /> Chamar no WhatsApp
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
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Promoções</span>
            </div>
            <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Ofertas Especiais</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {OFFERS.map((o) => (
              <div key={o.name} className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors" style={{ borderRadius: "4px" }}>
                <div className="bg-primary/10 border-b border-border px-6 py-4">
                  <span className="text-[10px] tracking-[0.3em] text-primary uppercase font-bold">Desconto à vista</span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>{o.name}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                  <div className="space-y-1">
                    <div className="text-muted-foreground line-through text-sm">{formatPrice(o.original)}</div>
                    <div className="text-3xl font-black text-primary" style={{ fontFamily: "'Nunito', sans-serif" }}>{formatPrice(o.cash)}</div>
                    <div className="text-xs text-primary/70 font-semibold">Economize {formatPrice(o.original - o.cash)} no pagamento à vista</div>
                  </div>
                  <Link to={`/produto/${o.id}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                    style={{ borderRadius: "2px" }}>
                    Ver Produto
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">Contato</span>
              </div>
              <h2 className="text-4xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Fale com a gente</h2>
              <p className="text-muted-foreground">Estamos prontos para tirar dúvidas, enviar orçamentos e agendar visitas ao nosso showroom.</p>
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
                    <div className="text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-1">{c.label}</div>
                    <div className="text-sm whitespace-pre-line">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/5511991766817" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="tel:+5511991766817"
                className="flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
                style={{ borderRadius: "2px" }}>
                <Phone size={16} /> Ligar
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-card border border-border p-8 flex flex-col justify-center space-y-6" style={{ borderRadius: "4px" }}>
            <div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Receba nossas ofertas</h3>
              <p className="text-sm text-muted-foreground">Cadastre-se e receba promoções exclusivas e novidades em primeira mão.</p>
            </div>
            {newsletterSent ? (
              <div className="bg-primary/10 border border-primary/30 p-6 text-center" style={{ borderRadius: "4px" }}>
                <p className="text-primary font-semibold">Cadastro realizado!</p>
                <p className="text-sm text-muted-foreground mt-1">Em breve você receberá nossas ofertas.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setNewsletterSent(true); }} className="space-y-4">
                <div>
                  <label className="block text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2">Nome</label>
                  <input type="text" required value={newsletter.name}
                    onChange={(e) => setNewsletter({ ...newsletter, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-input-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    style={{ borderRadius: "2px" }} />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2">E-mail</label>
                  <input type="email" required value={newsletter.email}
                    onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value })}
                    placeholder="seu@email.com.br"
                    className="w-full bg-input-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    style={{ borderRadius: "2px" }} />
                </div>
                <button type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "2px" }}>
                  Quero Receber Ofertas
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
