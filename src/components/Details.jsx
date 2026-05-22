function CardShell({ tag, accent = '#FF7631', icon, children, footer }) {
  return (
    <div
      className="group relative rounded-2xl bg-navy-800 border border-white/10 p-6 text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
    >
      <span
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div
        className="absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: accent }}
      />

      <div className="relative flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">{tag}</p>
        <span
          className="h-7 w-7 rounded-lg flex items-center justify-center text-sm"
          style={{ background: `${accent}1F`, color: accent }}
        >
          {icon}
        </span>
      </div>

      <div className="relative mt-4">{children}</div>

      {footer && (
        <p className="relative text-xs text-white/55 mt-5 border-t border-white/5 pt-4">{footer}</p>
      )}
    </div>
  )
}

function CardOne() {
  return (
    <CardShell
      tag="Painel principal"
      accent="#FF7631"
      icon="🐾"
      footer="Visão completa do seu pet em um lugar só."
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-orange/20 flex items-center justify-center text-xl ring-1 ring-orange/30">
          🐶
        </div>
        <div>
          <p className="font-semibold">Toddy</p>
          <p className="text-xs text-white/60">Pug • 4 anos</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[10px] uppercase tracking-wider text-white/55">Peso</p>
          <p className="font-serif text-2xl font-bold mt-1">
            10<span className="text-sm font-sans font-medium text-white/70">kg</span>
          </p>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[10px] uppercase tracking-wider text-white/55">Status</p>
          <p className="font-serif text-xl font-bold text-greenmid mt-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-greenmid animate-pulse" />
            Saudável
          </p>
        </div>
      </div>
    </CardShell>
  )
}

function CardMeds() {
  const meds = [
    { c: '#FF7631', l: 'NexGard Pro 7,5kg', t: 'Hoje 09:00' },
    { c: '#D6E865', l: 'Drogus 2 - Pulmo', t: 'Hoje 12:30' },
    { c: '#1D57A5', l: 'Vacina V10', t: 'Em 5 dias' }
  ]
  return (
    <CardShell
      tag="Medicamentos"
      accent="#D6E865"
      icon="℞"
      footer="Medicamentos recorrentes nunca passam batido."
    >
      <ul className="space-y-2">
        {meds.map((m, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/[0.08]"
          >
            <span
              className="h-8 w-8 rounded-md flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: `${m.c}26`, color: m.c }}
            >
              ℞
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{m.l}</p>
              <p className="text-[10px] text-white/55">{m.t}</p>
            </div>
            <span className="text-[10px] text-greenmid font-semibold shrink-0">Ok</span>
          </li>
        ))}
      </ul>
    </CardShell>
  )
}

function CardLog() {
  const rows = [
    { d: '12/05', t: 'Consulta de rotina', v: 'Dra. Carla F.' },
    { d: '02/05', t: 'Banho e tosa', v: 'PetShop Lar' },
    { d: '15/04', t: 'Exame de sangue', v: 'Labvet' },
    { d: '02/04', t: 'Vacina V10 1ª dose', v: 'Dra. Carla F.' }
  ]
  return (
    <CardShell
      tag="Log clínico"
      accent="#1D57A5"
      icon="📋"
      footer="Histórico automaticamente versionado e exportável."
    >
      <ul className="space-y-2 text-xs">
        {rows.map((row, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/[0.08]"
          >
            <span className="text-white/55 font-mono text-[11px] w-10 shrink-0">{row.d}</span>
            <span className="flex-1 font-semibold truncate">{row.t}</span>
            <span className="text-white/55 text-[10px] truncate max-w-[40%] text-right">{row.v}</span>
          </li>
        ))}
      </ul>
    </CardShell>
  )
}

export default function Details() {
  return (
    <section className="bg-navy text-white py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[60%] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: '#FF7631' }}
      />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="chip border-white/20 bg-white/10 text-white/90 inline-block">VEJA NA PRÁTICA</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mt-4 leading-tight">
            Cada detalhe<br />
            <span className="italic" style={{ color: '#FF7631' }}>pensado para você.</span>
          </h2>
          <p className="text-white/65 mt-4 text-sm sm:text-base">Animado para todas as telas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
          <CardOne />
          <CardMeds />
          <CardLog />
        </div>

        <p className="text-center text-xs text-white/45 mt-10">Tour completo no app — pronto em segundos.</p>
      </div>
    </section>
  )
}
