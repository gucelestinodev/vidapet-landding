function CardOne() {
  return (
    <div className="rounded-2xl bg-navy-800 border border-white/10 p-5 text-white">
      <p className="text-[10px] uppercase tracking-wider text-white/60">Painel principal</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-orange/20 flex items-center justify-center text-lg">🐶</div>
        <div>
          <p className="font-semibold">Toby</p>
          <p className="text-xs text-white/60">Golden • 4 anos</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[10px] text-white/55">Peso</p>
          <p className="font-serif text-2xl font-bold">32<span className="text-sm">kg</span></p>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[10px] text-white/55">Status</p>
          <p className="font-serif text-xl font-bold text-greenmid">Saudável</p>
        </div>
      </div>
      <p className="text-xs text-white/60 mt-4">Visão completa do seu pet em um lugar só.</p>
    </div>
  )
}


function CardMeds() {
  return (
    <div className="rounded-2xl bg-navy-800 border border-white/10 p-5 text-white">
      <p className="text-[10px] uppercase tracking-wider text-white/60">Medicamentos</p>
      <ul className="mt-3 space-y-2">
        {[
          { c: '#FF7631', l: 'NexGard Pro 7,5kg', t: 'Hoje 09:00' },
          { c: '#D6E865', l: 'Drogus 2 - Pulmo', t: 'Hoje 12:30' },
          { c: '#1D57A5', l: 'Vacina V10', t: 'Em 5 dias' }
        ].map((m, i) => (
          <li key={i} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
            <span className="h-7 w-7 rounded-md flex items-center justify-center text-[10px] font-bold" style={{ background: `${m.c}33`, color: m.c }}>℞</span>
            <div className="flex-1">
              <p className="text-xs font-semibold">{m.l}</p>
              <p className="text-[10px] text-white/55">{m.t}</p>
            </div>
            <span className="text-[10px] text-greenmid font-semibold">Ok</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-white/55 mt-4">Medicamentos recorrentes nunca passam batido.</p>
    </div>
  )
}

function CardLog() {
  return (
    <div className="rounded-2xl bg-navy-800 border border-white/10 p-5 text-white">
      <p className="text-[10px] uppercase tracking-wider text-white/60">Log clínico</p>
      <ul className="mt-3 space-y-2 text-xs">
        {[
          { d: '12/05', t: 'Consulta de rotina', v: 'Dra. Carla F.' },
          { d: '02/05', t: 'Banho e tosa', v: 'PetShop Lar' },
          { d: '15/04', t: 'Exame de sangue', v: 'Labvet' },
          { d: '02/04', t: 'Vacina V10 1ª dose', v: 'Dra. Carla F.' }
        ].map((row, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span className="text-white/60 w-12">{row.d}</span>
            <span className="flex-1 font-semibold">{row.t}</span>
            <span className="text-white/55">{row.v}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-white/55 mt-4">Histórico automaticamente versionado e exportável.</p>
    </div>
  )
}

export default function Details() {
  return (
    <section className="bg-navy text-white py-20 relative">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="container-page relative">
        <p className="chip border-white/20 bg-white/10 text-white/90">VEJA NA PRÁTICA</p>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mt-4">
            Cada detalhe<br />
            <span className="italic" style={{ color: '#FF7631' }}>pensado para você.</span>
          </h2>
          <p className="text-white/65 mt-4 text-sm">Animado para todas as telas.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <CardOne />
          <CardMeds />
          <CardLog />
        </div>

        <p className="text-center text-xs text-white/45 mt-10">Tour completo no app — pronto em segundos.</p>
      </div>
    </section>
  )
}
