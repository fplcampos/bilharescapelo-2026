import { Link, useParams } from "react-router";
import { ChevronRight, ArrowLeft, MessageCircle, Tag } from "lucide-react";
import { getCategoryById, getProductsByCategory, CATEGORIES, formatPrice } from "../data/products";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId ?? "");
  const products = getProductsByCategory(categoryId ?? "");

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-6">
        <p className="text-6xl">🎱</p>
        <h1 className="text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Categoria não encontrada</h1>
        <Link to="/" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition-opacity" style={{ borderRadius: "2px" }}>
          <ArrowLeft size={16} /> Voltar ao início
        </Link>
      </div>
    );
  }

  const taggedProducts = products.filter((p) => p.tag);

  return (
    <>
      {/* ── HERO DA CATEGORIA ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.heroImg}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-5 overflow-x-auto">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1 shrink-0">
              <ArrowLeft size={12} /> Início
            </Link>
            <ChevronRight size={11} className="shrink-0" />
            <span className="text-foreground font-medium shrink-0">{category.name}</span>
          </nav>

          <div className="flex items-center gap-5">
            <div
              className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/20 border border-primary/30 text-3xl shrink-0"
              style={{ borderRadius: "4px" }}
            >
              {category.icon}
            </div>
            <div>
              <h1
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {category.name}
              </h1>
              <p className="text-muted-foreground mt-2 text-sm max-w-lg">{category.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY NAV STRIP ── */}
      <div className="bg-secondary border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  cat.id === categoryId
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
                style={{ borderRadius: "2px" }}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED HIGHLIGHT (if tagged products exist) ── */}
      {taggedProducts.length > 0 && (
        <section className="py-10 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-5">
              <Tag size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Destaques</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {taggedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/produto/${p.id}`}
                  className="group relative overflow-hidden bg-secondary border border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
                  style={{ borderRadius: "4px" }}
                >
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-black tracking-[0.2em] px-3 py-1 uppercase">
                    {p.tag}
                  </div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm" style={{ fontFamily: "'Roboto Slab', serif" }}>{p.name}</h3>
                      <div className="text-xl font-black text-primary mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {formatPrice(p.price)}
                      </div>
                      {p.priceCard && (
                        <div className="text-[11px] text-muted-foreground line-through">{formatPrice(p.priceCard)}</div>
                      )}
                    </div>
                    <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ALL PRODUCTS ── */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <h2 className="text-xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                {products.length === 1 ? "1 produto" : `${products.length} produtos`} em {category.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => {
              const savings = p.priceCard ? p.priceCard - p.price : 0;
              const savingsPct = p.priceCard ? Math.round((savings / p.priceCard) * 100) : 0;
              return (
                <Link
                  key={p.id}
                  to={`/produto/${p.id}`}
                  className="group bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-black/20 transition-all"
                  style={{ borderRadius: "4px" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-secondary h-56">
                    {p.tag && (
                      <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                        {p.tag}
                      </div>
                    )}
                    {savingsPct > 0 && (
                      <div className="absolute top-4 right-4 z-10 bg-background text-primary text-[10px] font-black px-2 py-1 border border-primary/30">
                        -{savingsPct}%
                      </div>
                    )}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Thumbnails preview strip on hover */}
                    {p.images.length > 1 && (
                      <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {p.images.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 ${i === 0 ? "bg-primary" : "bg-white/40"}`}
                            style={{ borderRadius: "1px" }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Extra images indicator */}
                    {p.images.length > 1 && (
                      <div className="text-[10px] text-muted-foreground mb-2 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                        {p.images.length} fotos disponíveis
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-1 leading-snug" style={{ fontFamily: "'Roboto Slab', serif" }}>
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {p.shortDesc}
                    </p>

                    {/* Price + CTA */}
                    <div className="flex items-end justify-between border-t border-border pt-4">
                      <div>
                        {p.priceCard && (
                          <div className="text-xs text-muted-foreground line-through leading-none mb-1">
                            {formatPrice(p.priceCard)}
                          </div>
                        )}
                        <div className="text-2xl font-black text-primary leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
                          {formatPrice(p.price)}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-1">à vista</div>
                      </div>
                      <span className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                        Ver produto <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OTHER CATEGORIES ── */}
      <section className="py-12 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase mb-5">
            Outras categorias
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.filter((c) => c.id !== categoryId).map((cat) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className="group relative overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors"
                style={{ borderRadius: "4px" }}
              >
                <div className="h-24 overflow-hidden">
                  <img
                    src={`${cat.heroImg.split("?")[0]}?w=400&h=200&fit=crop&auto=format`}
                    alt={cat.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-3 flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <h2 className="text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Precisa de ajuda para escolher?
          </h2>
          <p className="text-muted-foreground">
            Nossos especialistas em {category.name.toLowerCase()} estão prontos para te orientar. Respondemos no WhatsApp em até 2 horas.
          </p>
          <a
            href="https://wa.me/5511991766817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-bold hover:opacity-90 transition-opacity"
            style={{ borderRadius: "2px" }}
          >
            <MessageCircle size={18} />
            Falar com especialista
          </a>
        </div>
      </section>
    </>
  );
}
