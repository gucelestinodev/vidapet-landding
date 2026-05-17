import { Check } from 'lucide-react'

const plans = [
  {
    name: 'GRÁTIS',
    price: 'R$0',
    period: '/mês',
    cta: 'Começar grátis',
    ctaStyle: 'ghost',
    features: ['1 pet cadastrado', 'Lembretes diários', 'Vacinas (2 espécies)', 'Score de saúde básico', 'Modo emergência']
  },
  {
    name: 'BÁSICO',
    price: 'R$9,90',
    period: '/mês',
    cta: 'Assinar Básico',
    ctaStyle: 'outline',
    features: ['1 pet', 'Vacinas + Vermífugo', 'Agenda de cuidados', 'Medicamentos básicos', 'Score evolutivo']
  },
  {
    name: 'ESSENCIAL',
    price: 'R$17,90',
    period: '/mês',
    cta: 'Assinar Essencial',
    ctaStyle: 'outline',
    features: ['Até 2 pets', 'Tudo do Básico', 'Histórico completo', 'Calculadora de ração', 'Backup automático']
  },
  {
    name: 'COMPLETO',
    price: 'R$27,90',
    period: '/mês',
    cta: 'Começar 7 dias grátis',
    ctaStyle: 'primary',
    featured: true,
    badge: 'MAIS POPULAR',
    features: ['Pets ilimitados', 'Tudo do Essencial', 'Receitas + relatórios', 'Score IA', 'PDF para veterinário']
  },
  {
    name: 'FAMÍLIA',
    price: 'R$39,90',
    period: '/mês',
    cta: 'Assinar Família',
    ctaStyle: 'outline',
    features: ['Tudo do Completo', 'Vinculação veterinário', 'Multi-tutor (5)', 'Compartilhar tutor', 'Suporte prioritário']
  },
  {
    name: 'PREMIUM',
    price: 'R$59,90',
    period: '/mês',
    cta: 'Assinar Premium',
    ctaStyle: 'outline',
    features: ['Tudo do Família', 'Consultoria veterinária', 'Telemedicina inclusa', 'Agenda de passeios', 'Atendimento via WP 24/7']
  },
  {
    name: 'PARA VETERINÁRIOS',
    price: 'R$49,90',
    period: '/mês',
    cta: 'Criar conta Vet',
    ctaStyle: 'navy',
    isVet: true,
    features: ['Pacientes ilimitados', 'Receitas timbradas', 'Histórico unificado', 'Vendas de serviços', 'API para clínica']
  }
]

function Cta({ style, children }) {
  if (style === 'primary') return <button className="btn-primary w-full">{children}</button>
  if (style === 'navy') return <button className="w-full rounded-full bg-navy text-white px-4 py-2.5 text-sm font-semibold hover:bg-navy-700">{children}</button>
  if (style === 'outline') return <button className="w-full rounded-full border border-navy/20 text-navy px-4 py-2.5 text-sm font-semibold hover:bg-navy/5">{children}</button>
  return <button className="w-full rounded-full bg-white text-navy px-4 py-2.5 text-sm font-semibold border border-navy/15 hover:bg-navy/5">{children}</button>
}

export default function Pricing() {
  return (
    <section id="planos" className="bg-cream py-20">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="chip mb-4">PLANOS</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl">Comece grátis.</h2>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl italic underline-orange mt-1">
            Evolua quando quiser.
          </h2>
          <p className="text-navy/65 text-sm mt-5">
            Pague com Pix ilimitadamente, economize no anual e somando 20%. Cancela quando quiser.
          </p>
          <div className="inline-flex items-center rounded-full border border-navy/15 bg-white p-1 mt-5 text-sm">
            <button className="px-4 py-1.5 rounded-full bg-navy text-white">Mensal</button>
            <button className="px-4 py-1.5 rounded-full text-navy/70">Anual −20%</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3 mt-10">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-4 flex flex-col ${
                p.featured
                  ? 'bg-orange/10 border-orange ring-2 ring-orange shadow-soft'
                  : p.isVet
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white border-navy/10'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-orange text-white text-[9px] font-bold tracking-wider px-2 py-0.5">
                  {p.badge}
                </span>
              )}
              <p className={`text-[10px] font-bold tracking-wider ${p.isVet ? 'text-orange' : 'text-navy/60'}`}>
                {p.name}
              </p>
              <p className={`font-serif font-bold text-3xl mt-2 ${p.isVet ? 'text-white' : 'text-navy'}`}>
                {p.price}
                <span className={`text-xs font-normal ${p.isVet ? 'text-white/60' : 'text-navy/50'}`}>{p.period}</span>
              </p>
              <ul className={`mt-4 space-y-1.5 text-[11px] flex-1 ${p.isVet ? 'text-white/85' : 'text-navy/75'}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <Check size={12} className={`mt-0.5 shrink-0 ${p.featured ? 'text-orange-600' : p.isVet ? 'text-greenmid' : 'text-greendark'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Cta style={p.ctaStyle}>{p.cta}</Cta>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-navy/45 mt-8 max-w-2xl mx-auto">
          * Planos grátis para sempre, sem cartão. Plano anual: 12 meses no boleto único e 18% de desconto. Comparativo no site pode ser ajustado pela disponibilidade local.
        </p>
      </div>
    </section>
  )
}
