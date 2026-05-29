import { Star, Heart, MessageCircle, Share2 } from 'lucide-react'

const items = [
  {
    quote: 'finalmente não esqueço mais o vermífugo da luna 😅 o sistema já sabe quando dar e marca a dose. a adesão dela foi de 60% pra quase 100%!! recomendo demais 🐾',
    name: 'Mariana S.',
    role: 'Responsável',
    initial: 'M',
    rating: 4.9,
    likes: 38,
    comments: 6,
    when: '2 d'
  },
  {
    quote: 'antes eu me perdia com as datas e comprovantes do thor. hj ta td no app, bem organizado. mt mais tranquilo com a saúde dele ❤️',
    name: 'Rafael N.',
    role: 'Responsável',
    initial: 'R',
    rating: 4.5,
    likes: 24,
    comments: 3,
    when: '5 d',
    highlight: true
  },
  {
    quote: 'uso no consultório p/ acompanhar os pacientes que tem VidaPet. vejo o histórico antes da consulta e economizo uns 15min por atendimento 👨‍⚕️',
    name: 'Dra. Carla F.',
    role: 'Veterinário',
    initial: 'C',
    rating: 4.8,
    likes: 52,
    comments: 11,
    when: '1 sem'
  }
]

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex gap-0.5">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} size={14} className="text-navy/15" fill="currentColor" />
        ))}
        <div
          className="absolute inset-y-0 left-0 flex gap-0.5 overflow-hidden pointer-events-none"
          style={{ width: `${(rating / 5) * 100}%` }}
        >
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} size={14} className="text-orange shrink-0" fill="#FF7631" />
          ))}
        </div>
      </div>
      <span className="text-[11px] font-semibold text-navy/70">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="chip mb-4">DEPOIMENTOS</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl">
            O que os usuários <span className="italic">dizem?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
          {items.map((t, i) => (
            <article
              key={i}
              className={`rounded-2xl bg-white border ${t.highlight ? 'border-orange/40 shadow-soft' : 'border-navy/10'} p-5 flex flex-col`}
            >
              <header className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-orange/15 text-orange font-bold flex items-center justify-center">
                  {t.initial}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-navy truncate">{t.name}</p>
                    <span className="text-navy/30 text-xs">·</span>
                    <p className="text-xs text-navy/55">{t.when}</p>
                  </div>
                  <p className="text-[11px] text-navy/55">{t.role}</p>
                </div>
              </header>

              <p className="text-sm text-navy/85 leading-relaxed mt-4 flex-1">{t.quote}</p>

              <div className="mt-4">
                <Stars rating={t.rating} />
              </div>

              <footer className="mt-4 pt-3 border-t border-navy/5 flex items-center gap-5 text-navy/55">
                <button className="inline-flex items-center gap-1.5 text-xs hover:text-orange transition">
                  <Heart size={14} />
                  {t.likes}
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs hover:text-navy transition">
                  <MessageCircle size={14} />
                  {t.comments}
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs hover:text-navy transition ml-auto">
                  <Share2 size={14} />
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
