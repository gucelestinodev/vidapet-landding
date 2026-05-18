import { Check, Stethoscope } from 'lucide-react'

const features = [
  'Pets ilimitados (R$ 9,90 por pet)',
  'Lembretes de vacinas e vermífugos',
  'Agenda completa de cuidados',
  'Score de saúde com IA',
  'Histórico clínico exportável',
  'Modo emergência 24h',
  'Cancele quando quiser, sem multa'
]

export default function Pricing() {
  return (
    <section id="planos" className="bg-cream py-20 sm:py-24 relative overflow-hidden">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[80%] max-w-3xl rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: '#FF7631' }}
      />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="chip mb-4">PLANO</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-tight">
            Um único plano,<br />
            <span className="italic underline-orange">tudo incluso.</span>
          </h2>
          <p className="text-navy/65 text-sm sm:text-base mt-5">
            Sem pegadinhas. Sem upgrade. Sem cartão escondido. Apenas o cuidado do seu pet em um só lugar.
          </p>
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <div className="relative rounded-3xl bg-white border border-navy/10 shadow-soft p-8 sm:p-10 flex flex-col">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange text-white text-[10px] font-bold tracking-[0.15em] px-3 py-1 shadow-soft">
              PLANO ÚNICO
            </span>

            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.15em] text-navy/60">MENSAL</p>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="font-serif text-2xl font-bold text-navy/70">R$</span>
                <span className="font-serif text-6xl sm:text-7xl font-bold text-navy leading-none">9,90</span>
              </div>
              <p className="text-xs text-navy/55 mt-2">por mês, por pet</p>
            </div>

            <div className="mt-6 rounded-2xl bg-greenmid/10 border border-greenmid/30 p-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-greenmid/20 text-greendark flex items-center justify-center shrink-0">
                <Stethoscope size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-greendark">Veterinário Grátis</p>
                <p className="text-[11px] text-navy/65 leading-snug mt-0.5">
                  Acesso a atendimentos com vet parceiro, sem custo extra.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 text-sm text-navy/80">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-greendark/10 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-greendark" strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary w-full mt-8">Começar agora</button>

            <p className="text-center text-[11px] text-navy/45 mt-4">
              Sem cartão para começar. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
