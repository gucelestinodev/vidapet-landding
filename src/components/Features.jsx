import { Pill, ClipboardList, Siren, CalendarCheck, Clock4, PackageOpen } from 'lucide-react'

const items = [
  {
    icon: Pill,
    color: '#FF7631',
    title: 'Medicamentos com 1 toque',
    text: 'Cadastre uma vez, o sistema gera a rotina diária. Marque que deu o remédio em 1 toque. Desconta do estoque automaticamente.',
    pill: 'Adesão +98%'
  },
  {
    icon: ClipboardList,
    color: '#67B171',
    title: 'Histórico Clínico',
    text: 'Tenha todos os exames, laudos e registros do seu pet organizados em um só lugar. Com anexos feitos por você e pelo veterinário, o Vida Pet cria um histórico completo e seguro, acessado por outros profissionais quando necessário.',
    pill: 'Tempo real'
  },
  {
    icon: Siren,
    color: '#E15252',
    title: 'Modo emergência',
    text: 'Veja alergias, peso, vacinas, contatos do vet e histórico em PDF pronto para a veterinária.',
    pill: 'Sempre grátis'
  },
  {
    icon: CalendarCheck,
    color: '#1D57A5',
    title: 'Agenda inteligente',
    text: 'Vacinas, vermífugo, antipulgas, banho e consultas agendados automaticamente. Avisa quando se aproxima. Reconfirmação configurável.',
    pill: 'Auto-gerada'
  },
  {
    icon: Clock4,
    color: '#9C6BD9',
    title: 'Linha do tempo da vida',
    text: 'Cada momento preservado: primeiro banho, viagens, conquistas e ensinamentos. Com fotos, dia a dia do seu pet. Memória para sempre.',
    pill: 'Fotos incluídas*',
    soon: true
  },
  {
    icon: PackageOpen,
    color: '#007C58',
    title: 'Estoque em casa',
    text: 'Ração, remédios, petiscos, higiene. Calcula dias restantes pelo consumo diário. Alerta antes de acabar.',
    pill: 'Lista automática'
  }
]

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <p className="chip mb-4">FUNCIONALIDADES</p>
        <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-tight max-w-3xl">
          Tudo que seu pet precisa,<br />
          <span className="italic underline-orange">integrado e automático.</span>
        </h2>
        <p className="text-navy/70 max-w-2xl mt-4">
          Não é só um lembrete. É um sistema completo que aprende com os dados do seu pet e age antes que você precise pedir.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {items.map((it) => (
            <article
              key={it.title}
              className="card relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              style={{ '--accent': it.color }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-90"
                style={{ background: `linear-gradient(90deg, ${it.color}00, ${it.color}, ${it.color}00)` }}
                aria-hidden
              />

              {it.soon && (
                <span className="absolute top-3 right-3 rounded-full bg-navy text-white text-[10px] font-bold tracking-wider px-2.5 py-1 uppercase">
                  Em breve
                </span>
              )}

              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${it.color}1F`, color: it.color }}
              >
                <it.icon size={22} strokeWidth={2} />
              </div>

              <h3 className="font-serif font-bold text-lg text-navy leading-snug">{it.title}</h3>
              <p className="text-sm text-navy/65 mt-2 leading-relaxed flex-1">{it.text}</p>

              <span
                className="self-start inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold mt-5"
                style={{ background: `${it.color}1A`, color: it.color }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: it.color }}
                  aria-hidden
                />
                {it.pill}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
