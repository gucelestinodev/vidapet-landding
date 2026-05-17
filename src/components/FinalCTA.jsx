import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-cream pb-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 sm:p-14 text-center">
          <div className="absolute inset-0 dotted-bg opacity-30" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(255,118,49,0.35), transparent 70%)' }} />
          <div className="relative">
            <p className="chip border-white/20 bg-white/10 text-white/90 mb-4">GRÁTIS PARA COMEÇAR</p>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-tight">
              Seu pet merece<br />
              <span className="italic" style={{ color: '#FF7631' }}>o melhor cuidado.</span>
            </h2>
            <p className="text-white/65 mt-5 max-w-md mx-auto text-sm">
              Comece hoje. Organize vacinas, exames, suprimentos e todo o histórico clínico do seu pet em um só lugar, com praticidade e contato direto com o veterinário em tempo real.            
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a className="btn-primary">Criar conta grátis <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
