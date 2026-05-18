import { UserPlus, PawPrint, CalendarHeart, FileHeart } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    t: 'Crie sua conta',
    d: 'Sem cartão. Com Google em 1 clique ou e-mail e senha.',
    time: '30 segundos'
  },
  {
    icon: PawPrint,
    t: 'Cadastre seu pet',
    d: 'Nome, espécie, peso, vacinas, raça, condições. 4 passos guiados.',
    time: '2 minutos',
    highlight: true
  },
  {
    icon: CalendarHeart,
    t: 'Use todo dia',
    d: 'Marque doses, registre eventos, acompanhe o estoque.',
    time: '30s por dia'
  },
  {
    icon: FileHeart,
    t: 'Histórico Clínico',
    d: 'Todos os exames e registros do seu pet organizados em um histórico seguro e acessível para um cuidado contínuo.',
    time: 'Sempre à mão'
  }
]

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-page text-center">
        <p className="chip mb-4">COMO FUNCIONA</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl max-w-2xl mx-auto leading-tight">
          Pronto em menos de <span className="italic underline-orange">5 minutos.</span>
        </h2>
        <p className="text-navy/60 mt-4 text-sm sm:text-base max-w-md mx-auto">
          Três passos simples e seu pet já está protegido.
        </p>

        <div className="relative mt-14 max-w-6xl mx-auto">
          {/* horizontal connector (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px border-t-2 border-dashed border-navy/15 z-0"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.t} className="relative group">
                {/* vertical connector (mobile only, except last) */}
                {i < steps.length - 1 && (
                  <span
                    className="sm:hidden absolute left-1/2 -translate-x-1/2 top-20 h-8 w-px border-l-2 border-dashed border-navy/15"
                    aria-hidden
                  />
                )}

                <div className="relative inline-flex flex-col items-center">
                  {s.highlight && (
                    <span className="absolute -top-3 z-20 text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 bg-navy text-white whitespace-nowrap shadow-soft">
                      Faça uma vez
                    </span>
                  )}

                  <div
                    className={`h-20 w-20 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-300 group-hover:-translate-y-1
                      ${s.highlight
                        ? 'bg-orange text-white shadow-soft ring-4 ring-orange/15'
                        : 'bg-white text-orange border border-navy/10 shadow-card group-hover:border-orange/30'}`}
                  >
                    <s.icon size={28} strokeWidth={2} />
                    <span
                      className={`absolute -bottom-2 -right-2 h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold font-serif
                        ${s.highlight ? 'bg-white text-navy' : 'bg-navy text-white'}`}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl mt-6">{s.t}</h3>
                <p className="text-sm text-navy/65 mt-2 max-w-[26ch] mx-auto leading-relaxed">{s.d}</p>

                <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-semibold text-navy/55 bg-white border border-navy/10 rounded-full px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
