import { Check, ChevronRight, CalendarPlus, Pill, FileText, LinkIcon } from 'lucide-react'

const benefits = [
  { t: 'Todos os seus tutores num lugar', d: 'Histórico unificado, automação na busca.' },
  { t: 'Prontuário digital', d: 'Anote rapidamente, prescreva, diagnostique.' },
  { t: 'Alertas automáticos', d: 'Avisos sobre vacinas e procedimentos, retorno automático.' },
  { t: 'Relatórios PDF em 1 clique', d: 'Compartilhe com o tutor em segundos, no padrão da clínica.' }
]

const patients = [
  { name: 'Thor', breed: 'Pastor Alemão • 6 anos', action: 'Agendar consulta', icon: CalendarPlus },
  { name: 'Luna', breed: 'Vira-lata • 3 anos', action: 'Dar medicamento', icon: Pill },
  { name: 'Mel', breed: 'Persa • 8 anos', action: 'Log clínico', icon: FileText },
  { name: 'Rex', breed: 'Pug • 11 anos', action: 'Vincular Veterinário', icon: LinkIcon }
]

export default function VetPanel() {
  return (
    <section id="veterinarios" className="bg-navy text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="chip border-white/20 bg-white/10 text-white/90 mb-4">PARA VETERINÁRIOS</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-tight">
            Seu painel clínico.<br />
            <span className="italic" style={{ color: '#FF7631' }}>Seus pacientes,</span><br />
            sempre em dia.
          </h2>
          <p className="text-white/70 mt-5 max-w-md">
            Conecte-se aos tutores que já usam o VidaPet. Veja o histórico, faça anotações e receba alertas sem precisar de software separado.
          </p>

          <ul className="mt-8 space-y-4 max-w-md">
            {benefits.map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <span className="h-6 w-6 mt-0.5 rounded-full bg-greenmid/20 text-greenmid flex items-center justify-center flex-shrink-0">
                  <Check size={14} />
                </span>
                <div>
                  <p className="font-semibold">{b.t}</p>
                  <p className="text-xs text-white/55">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://app.vidapet.app" target="_blank" className="btn-primary">Criar conta veterinária</a>
          </div>
        </div>

        {/* preview */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/55">Meus pacientes</p>
              <p className="font-semibold">4 ativos</p>
            </div>
            <button className="text-[11px] text-orange-500 font-semibold">+ Adicionar</button>
          </div>

          <ul className="space-y-2">
            {patients.map((p) => (
              <li key={p.name} className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 px-3 py-2.5 transition">
                <div className="h-9 w-9 rounded-full bg-orange/20 flex items-center justify-center text-base shrink-0">
                  {p.name === 'Mel' ? '🐱' : '🐶'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{p.name}</p>
                  <p className="text-[10px] text-white/55 truncate">{p.breed}</p>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white/90 transition whitespace-nowrap">
                  <p.icon size={12} />
                  {p.action}
                </button>
                <ChevronRight size={14} className="text-white/40 shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
