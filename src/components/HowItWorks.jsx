import { UserPlus, PawPrint, CalendarHeart } from 'lucide-react'

const steps = [
  { icon: UserPlus, t: 'Crie sua conta', d: 'Sem cartão. Com Google em 1 clique ou e-mail e senha.' },
  { icon: PawPrint, t: 'Cadastre seu pet', d: 'Nome, espécie, peso, vacinas, raça, condições. 4 passos guiados.' },
  { icon: CalendarHeart, t: 'Use todo dia', d: 'Marque doses, registre eventos, acompanhe o estoque. 30s por dia.' }
]

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page text-center">
        <p className="chip mb-4">COMO FUNCIONA</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl max-w-2xl mx-auto">
          Pronto em menos de <span className="italic underline-orange">5 minutos.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px border-t border-dashed border-navy/15" />

          {steps.map((s, i) => (
            <div key={s.t} className={`relative ${s.highlight ? 'lg:-mt-2' : ''}`}>
              <div className={`mx-auto h-16 w-16 rounded-2xl flex items-center justify-center relative z-10
                ${s.highlight ? 'bg-orange text-white shadow-soft' : 'bg-white text-orange border border-navy/10'}`}>
                <s.icon size={26} />
              </div>
              {s.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 bg-navy text-white">
                  Faça isso uma vez
                </span>
              )}
              <h3 className="font-serif font-bold text-lg mt-5">{s.t}</h3>
              <p className="text-sm text-navy/65 mt-2 max-w-[18ch] mx-auto">{s.d}</p>
              <p className="text-[10px] text-navy/40 mt-2">Etapa 0{i+1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
