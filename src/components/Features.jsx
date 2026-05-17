import { Pill, ClipboardList, Siren, CalendarCheck, Clock4, PackageOpen } from 'lucide-react'

const items = [
  {
    icon: Pill,
    color: '#FF7631',
    title: 'Medicamentos com 1 toque',
    text: 'Cadastre uma vez, o sistema gera a rotina diária. Marque que deu o remédio em 1 toque. Descontos do estoque automaticamente.',
    tag: 'Popular',
    tagColor: '#FF7631'
  },
  {
    icon: ClipboardList,
    color: '#67B171',
    title: 'Histórico Clínico',
    text: 'Tenha todos os exames, laudos e registros do seu pet organizados em um só lugar. Com anexos feitos por você e pelo veterinário, o Vida Pet cria um histórico completo e seguro, que pode ser acessado por outros profissionais no futuro, garantindo mais agilidade, continuidade no cuidado e decisões clínicas mais precisas.',
    highlight: true,
    tag: 'Destaque',
    tagColor: '#67B171'
  },
  {
    icon: Siren,
    color: '#E15252',
    title: 'Modo emergência',
    text: 'Veja alergias, peso, vacinas, contatos do vet e histórico em PDF pronto para a veterinária. Funciona em todo plano, inclusive grátis.'
  },
  {
    icon: CalendarCheck,
    color: '#1D57A5',
    title: 'Agenda inteligente',
    text: 'Vacinas, vermífugo, antipulgas, banho e consultas agendados automaticamente. Avisa quando se aproxima. Reconfirma configurável.'
  },
  {
    icon: Clock4,
    color: '#9C6BD9',
    title: 'Linha do tempo da vida',
    text: 'Cada momento preservado: primeiro banho, viagens, conquistas e ensinamentos. Com fotos, dia a dia do seu raça/jet. Memória para sempre.'
  },
  {
    icon: PackageOpen,
    color: '#007C58',
    title: 'Estoque em casa',
    text: 'Ração, remédios, petiscos, higiene. Calcula dias restantes pelo consumo diário. Alerta antes de acabar. Lista de compras automática.'
  }
]

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-cream py-20">
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
              className={`card relative ${it.highlight ? 'ring-2 ring-greenmid/60 bg-greenmid/5' : ''}`}
            >
              {it.tag && (
                <span
                  className="absolute -top-2 right-4 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                  style={{ background: it.tagColor }}
                >
                  {it.tag}
                </span>
              )}
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${it.color}1A`, color: it.color }}
              >
                <it.icon size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-navy">{it.title}</h3>
              <p className="text-sm text-navy/70 mt-2 leading-relaxed">{it.text}</p>
              <button className="mt-4 text-sm font-semibold text-orange-600 hover:underline">Saiba mais →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
