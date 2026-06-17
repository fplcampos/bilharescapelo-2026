import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, MessageCircle, Phone, MapPin, ChevronDown } from "lucide-react";
import { CATEGORIES } from "../data/products";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex flex-col leading-none shrink-0">
            <span className="text-2xl font-black tracking-tight text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>
              CAPELO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Bilhares & Jogos</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {!isHome && (
              <Link to="/" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Início</Link>
            )}

            {/* Produtos dropdown */}
            <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
              <button className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">
                Produtos <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border shadow-xl py-2 w-56 z-50" style={{ borderRadius: "4px" }}>
                  {CATEGORIES.map((cat) => (
                    <Link key={cat.id} to={`/categoria/${cat.id}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      onClick={() => setCatOpen(false)}>
                      <span>{cat.icon}</span>{cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isHome ? (
              <>
                <a href="#empresa" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Empresa</a>
                <a href="#servicos" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Serviços</a>
                <a href="#ofertas" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Ofertas</a>
                <a href="#contato" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Contato</a>
              </>
            ) : (
              <>
                <a href="/#servicos" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Serviços</a>
                <a href="/#contato" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">Contato</a>
              </>
            )}
          </div>

          <a href="https://wa.me/5511991766817" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            style={{ borderRadius: "2px" }}>
            <MessageCircle size={15} /> WhatsApp
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-sm py-2 text-foreground hover:text-primary">Início</Link>
            <div className="text-xs tracking-widest text-muted-foreground uppercase font-semibold pt-3 pb-1">Produtos</div>
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/categoria/${cat.id}`} onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-sm py-2 text-foreground hover:text-primary">
                <span>{cat.icon}</span>{cat.name}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2 flex flex-col gap-1">
              <a href="/#servicos" onClick={() => setMenuOpen(false)} className="text-sm py-2 text-foreground hover:text-primary">Serviços</a>
              <a href="/#contato" onClick={() => setMenuOpen(false)} className="text-sm py-2 text-foreground hover:text-primary">Contato</a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-16">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-background border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-xl font-black text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>CAPELO</span>
              <span className="text-xs text-muted-foreground ml-2">Bilhares & Jogos</span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Há mais de 40 anos levando diversão e qualidade para residências, clubes e eventos em São Paulo.
              </p>
            </div>
            <div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-3">Produtos</div>
              <div className="flex flex-col gap-1.5">
                {CATEGORIES.map((cat) => (
                  <Link key={cat.id} to={`/categoria/${cat.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-3">Contato</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Phone size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>(11) 99176-6817<br />(11) 2782-8044</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                  Av. João XXIII, 2036 — SP
                </div>
                <a href="https://wa.me/5511991766817" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary text-sm font-semibold hover:opacity-80 transition-opacity">
                  <MessageCircle size={15} /> Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bilhares Capelo. Todos os direitos reservados.</p>
            <div className="flex gap-5">
              {["Facebook", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
