import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ChevronRight,
  MessageCircle,
  Phone,
  Check,
  Star,
  ArrowLeft,
  Truck,
  Shield,
  Wrench,
  ZoomIn,
} from "lucide-react";
import { getProductById, getCategoryById, getRelatedProducts, CATEGORIES, formatPrice } from "../data/products";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-primary/15 text-primary text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1" style={{ borderRadius: "2px" }}>
      {children}
    </span>
  );
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId ?? "");
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-6">
        <p className="text-6xl">🎱</p>
        <h1 className="text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Produto não encontrado
        </h1>
        <Link to="/" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition-opacity" style={{ borderRadius: "2px" }}>
          <ArrowLeft size={16} /> Voltar ao início
        </Link>
      </div>
    );
  }

  const category = getCategoryById(product.categoryId);
  const related = getRelatedProducts(product.related).slice(0, 3);

  const waMsg = encodeURIComponent(
    `Olá! Tenho interesse no produto: *${product.name}* — ${formatPrice(product.price)} à vista. Podem me passar mais informações?`
  );

  const savings = product.priceCard ? product.priceCard - product.price : 0;

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(false)}
        >
          <img
            src={product.images[activeImg]}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
            style={{ borderRadius: "4px" }}
          />
        </div>
      )}

      {/* ── BREADCRUMB ── */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground overflow-x-auto">
          <Link to="/" className="hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1">
            <ArrowLeft size={12} /> Início
          </Link>
          <ChevronRight size={11} className="shrink-0" />
          {category && (
            <>
              <Link to={`/categoria/${category.id}`} className="hover:text-primary transition-colors whitespace-nowrap">
                {category.icon} {category.name}
              </Link>
              <ChevronRight size={11} className="shrink-0" />
            </>
          )}
          <span className="text-foreground truncate">{product.name}</span>
        </div>
      </div>

      {/* ── PRODUCT MAIN ── */}
      <section className="py-10 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">

            {/* ── GALLERY ── */}
            <div className="space-y-3 sticky top-20">
              {/* Main image */}
              <div
                className="relative overflow-hidden bg-secondary group cursor-zoom-in"
                style={{ borderRadius: "4px", aspectRatio: "4/3" }}
                onClick={() => setLightbox(true)}
              >
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                    {product.tag}
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10 bg-black/40 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: "4px" }}>
                  <ZoomIn size={16} />
                </div>
                <img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                        activeImg === i
                          ? "border-primary scale-[1.03] shadow-md shadow-primary/20"
                          : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
                      }`}
                      style={{ borderRadius: "4px", width: 88, height: 66 }}
                    >
                      <img src={img} alt={`${product.name} foto ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust strip */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { icon: <Truck size={16} />, label: "Entrega em SP" },
                  { icon: <Wrench size={16} />, label: "Montagem inclusa" },
                  { icon: <Shield size={16} />, label: "Garantia total" },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-1.5 py-3 bg-secondary border border-border text-center" style={{ borderRadius: "4px" }}>
                    <span className="text-primary">{t.icon}</span>
                    <span className="text-[10px] text-muted-foreground font-semibold tracking-wide">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── INFO PANEL ── */}
            <div className="space-y-7">
              {/* Category + tag */}
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <Link
                    to={`/categoria/${category.id}`}
                    className="text-xs tracking-widest text-primary uppercase font-bold hover:opacity-80 transition-opacity flex items-center gap-1"
                  >
                    {category.icon} {category.name}
                  </Link>
                )}
                {product.tag && <Badge>{product.tag}</Badge>}
              </div>

              {/* Title */}
              <div>
                <h1
                  className="text-3xl md:text-4xl font-black leading-tight text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h1>
                {/* Stars */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#c8982a" stroke="none" />)}
                  </div>
                  <span className="text-xs text-muted-foreground">5,0 · Produto verificado Capelo</span>
                </div>
              </div>

              {/* Short desc */}
              <p className="text-muted-foreground leading-relaxed">{product.shortDesc}</p>

              {/* ── PRICE BLOCK ── */}
              <div className="bg-secondary border border-border overflow-hidden" style={{ borderRadius: "4px" }}>
                {savings > 0 && (
                  <div className="bg-primary/10 border-b border-border px-6 py-3 flex items-center gap-3">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">Desconto à vista</span>
                    <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-0.5" style={{ borderRadius: "2px" }}>
                      -{Math.round((savings / product.priceCard!) * 100)}% OFF
                    </span>
                  </div>
                )}
                <div className="px-6 py-5 space-y-2">
                  {product.priceCard && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through text-sm">{formatPrice(product.priceCard)}</span>
                      <span className="text-xs text-primary font-semibold">
                        economize {formatPrice(savings)}
                      </span>
                    </div>
                  )}
                  <div className="text-5xl font-black text-primary leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {formatPrice(product.price)}
                  </div>
                  <p className="text-xs text-muted-foreground">à vista · ou em até 12× no cartão</p>
                </div>
              </div>

              {/* ── CTA ── */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/5511991766817?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-bold text-base tracking-wide hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "2px" }}
                >
                  <MessageCircle size={20} />
                  Comprar pelo WhatsApp
                </a>
                <a
                  href="tel:+5511991766817"
                  className="flex items-center justify-center gap-2 border border-border text-muted-foreground py-3.5 font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  <Phone size={16} />
                  (11) 99176-6817 · Ligar agora
                </a>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                {[
                  "Entrega em todo SP",
                  "Montagem e instalação",
                  "Garantia do fabricante",
                  "Nota fiscal inclusa",
                  "Parcelamento facilitado",
                  "Suporte pós-venda",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Full description */}
              <div className="border-t border-border pt-6 space-y-3">
                <h2 className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">Descrição completa</h2>
                <p className="text-foreground leading-relaxed">{product.fullDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS + WHY BUY ── */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Specs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                Especificações técnicas
              </h2>
            </div>
            <div className="border border-border overflow-hidden" style={{ borderRadius: "4px" }}>
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 ${
                    i % 2 === 0 ? "bg-background" : "bg-card"
                  }`}
                >
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="text-sm font-bold text-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Capelo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                Por que comprar na Capelo?
              </h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: "+40 anos de experiência",
                  desc: "Somos referência no mercado de bilhar em São Paulo desde 1985.",
                  icon: "🏆",
                },
                {
                  title: "Atendimento especializado",
                  desc: "Nossa equipe conhece cada produto e vai te ajudar a fazer a escolha certa para o seu espaço.",
                  icon: "🤝",
                },
                {
                  title: "Entrega e montagem inclusos",
                  desc: "Cuidamos de tudo: entregamos, montamos e testamos na sua casa sem custo adicional.",
                  icon: "🚚",
                },
                {
                  title: "Pós-venda garantido",
                  desc: "Suporte completo após a compra para manutenção, reposição de peças e dúvidas.",
                  icon: "🛡️",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-background border border-border hover:border-primary/30 transition-colors"
                  style={{ borderRadius: "4px" }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Roboto Slab', serif" }}>{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL CATEGORIES strip ── */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase mb-5">Explorar outras categorias</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className={`flex flex-col items-center gap-2 p-4 border transition-colors text-center ${
                  cat.id === product.categoryId
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary hover:border-primary/50 hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                }`}
                style={{ borderRadius: "4px" }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-[11px] font-semibold leading-tight">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <h2 className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Produtos Relacionados
                </h2>
              </div>
              {category && (
                <Link to={`/categoria/${category.id}`} className="text-sm text-primary font-semibold hover:opacity-80 transition-opacity flex items-center gap-1">
                  Ver todos <ChevronRight size={14} />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/produto/${p.id}`}
                  className="group bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-black/20 transition-all"
                  style={{ borderRadius: "4px" }}
                >
                  <div className="relative overflow-hidden bg-secondary h-48">
                    {p.tag && (
                      <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-2 py-0.5 uppercase">
                        {p.tag}
                      </div>
                    )}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] text-primary font-bold tracking-widest uppercase mb-1">
                      {getCategoryById(p.categoryId)?.name}
                    </div>
                    <h3 className="font-bold mb-1 leading-snug" style={{ fontFamily: "'Roboto Slab', serif" }}>{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{p.shortDesc}</p>
                    <div className="flex items-end justify-between">
                      <div>
                        {p.priceCard && <div className="text-xs text-muted-foreground line-through">{formatPrice(p.priceCard)}</div>}
                        <div className="text-xl font-black text-primary" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          {formatPrice(p.price)}
                        </div>
                        <div className="text-[10px] text-muted-foreground">à vista</div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-primary font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                        Ver <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <h2 className="text-3xl font-black text-primary-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ficou com dúvidas sobre este produto?
          </h2>
          <p className="text-primary-foreground/80">
            Nossos especialistas respondem em até 2 horas pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/5511991766817?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-bold hover:opacity-90 transition-opacity"
              style={{ borderRadius: "2px" }}
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
            <a
              href="tel:+5511991766817"
              className="flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              <Phone size={16} /> Ligar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
