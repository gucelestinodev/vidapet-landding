import { ArrowRight, Sparkles, Menu } from 'lucide-react'
import logoUrl from '../assets/logo.svg'
import dashboardImg from '../assets/dashboard.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full"
           style={{ background: 'radial-gradient(closest-side, rgba(255,118,49,0.35), transparent 70%)' }} />

      <div className="relative container-page">
        {/* nav */}
        <nav className="flex items-center justify-between py-5">
          <img
            src={logoUrl}
            alt="VidaPet"
            className="h-8 w-auto select-none"
          />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#funcionalidades" className="hover:text-white">Funcionalidades</a>
            <a href="#planos" className="hover:text-white">Planos</a>
            <a href="#veterinarios" className="hover:text-white">Para veterinários</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://lab.vidapet.app" target="_blank" className="btn-primary">
              Entrar <ArrowRight size={16} />
            </a>
            <button className="md:hidden text-white/90"><Menu /></button>
          </div>
        </nav>

        {/* hero copy */}
        <div className="pt-10 sm:pt-14 pb-8 text-center max-w-3xl mx-auto">

          <h1 className="font-serif font-bold text-[44px] sm:text-[64px] leading-[0.95] mt-6">
            Tudo sobre a saúde<br />
            do seu <span className="italic" style={{ color: '#FF7631' }}>pet,</span><br />
            num só lugar.
          </h1>

          <p className="text-white/75 mt-6 max-w-xl mx-auto text-[15px] leading-relaxed">
            <span className="underline-orange text-white">Medicamentos com 1 toque,</span> vacinas,
            estoque, gastos, linha do tempo e modo emergência. Para quem ama de verdade.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#planos" className="btn-primary text-base">
              Começar grátis <ArrowRight size={16} />
            </a>
            <a href="#funcionalidades" className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/90 hover:bg-white/10 inline-flex items-center gap-2">
              Ver como funciona →
            </a>
          </div>

          <p className="text-white/55 text-xs mt-4">
            Avaliação acima: 7 dias grátis. Para veterinários, grátis para sempre.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['🐶','🐱','🐰','🐦','🐢','🐹'].map((e, i) => (
                <span key={i} className="h-8 w-8 rounded-full bg-white text-base inline-flex items-center justify-center border border-white/30 shadow-sm">{e}</span>
              ))}
            </div>
            <p className="text-xs text-white/70"><strong className="text-white">12.000+</strong> tutores já usam o VidaPet</p>
          </div>
        </div>

        {/* dashboard */}
        <div className="pb-20 pt-4 max-w-5xl mx-auto">
          <img
            src={dashboardImg}
            alt="Dashboard do VidaPet"
            className="w-full h-auto rounded-2xl shadow-soft ring-1 ring-white/10 select-none"
          />
        </div>
      </div>
    </section>
  )
}
