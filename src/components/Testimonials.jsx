import { Star } from 'lucide-react'

const items = [
  {
    quote: 'Finalmente não esqueço mais o vermífugo da Luna. O sistema já sabe quando dá, sou hora e marca a dose. A adesão dela foi de 60% para quase 100%.',
    name: 'Mariana S.', role: 'Tutora cadastrada • 3 anos', initial: 'M'
  },
  {
    quote: 'Antes eu me perdia com as datas e comprovantes do Thor. Hoje está tudo no app, bem organizado, e isso me deixa bem mais tranquilo com a saúde dele.',
    name: 'Rafael N.', role: 'Tutor PJ • 1 ano', initial: 'R',
    highlight: true
  },
  {
    quote: 'Uso no consultório para acompanhar os pacientes que têm VidaPet. Vejo o histórico antes da consulta e economizo 15 minutos por atendimento.',
    name: 'Dra. Carla F.', role: 'Veterinária • Clínica VP', initial: 'C'
  }
]

export default function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page text-center">
        <p className="chip mb-4">DEPOIMENTOS</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl">
          O que os tutores <span className="italic">dizem.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
          {items.map((t, i) => (
            <article key={i} className={`card ${t.highlight ? 'ring-2 ring-orange/60' : ''}`}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="#FF7631" className="text-orange" />
                ))}
              </div>
              <p className="text-sm text-navy/85 leading-relaxed italic">“{t.quote}”</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-navy/10">
                <span className="h-9 w-9 rounded-full bg-orange/15 text-orange font-bold flex items-center justify-center">{t.initial}</span>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-navy/55">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
