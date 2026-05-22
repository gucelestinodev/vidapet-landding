import {
  Home, Stethoscope, Pill, Syringe, CalendarDays, Clock, Boxes, Wallet,
  ChevronRight, Search, Bell, Plus, Heart, AlertCircle
} from 'lucide-react'

function ScoreRing({ value = 87 }) {
  const r = 56
  const c = 2 * Math.PI * r
  const dash = (value / 100) * c
  return (
    <div className="relative h-36 w-36">
      <svg viewBox="0 0 140 140" className="-rotate-90 h-full w-full">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#E8EEEE" strokeWidth="12" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          stroke="#67B171" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-4xl font-bold text-navy leading-none">{value}</span>
        <span className="text-[10px] uppercase tracking-wider text-navy/60 mt-1">Score</span>
      </div>
    </div>
  )
}

function SideItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] ${
        active ? 'bg-orange/10 text-orange-600 font-semibold' : 'text-navy/70 hover:bg-navy/5'
      }`}
    >
      <Icon size={13} strokeWidth={2} />
      <span>{label}</span>
    </div>
  )
}

function MiniCard({ title, value, sub, color = 'bg-white' }) {
  return (
    <div className={`rounded-xl border border-navy/10 p-3 ${color}`}>
      <p className="text-[10px] uppercase tracking-wide text-navy/50">{title}</p>
      <p className="font-serif text-xl font-bold text-navy mt-1">{value}</p>
      {sub && <p className="text-[10px] text-navy/60 mt-0.5">{sub}</p>}
    </div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="rounded-2xl bg-white shadow-2xl border border-white/30 overflow-hidden ring-1 ring-black/5">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F4F2EE] border-b border-navy/5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="mx-auto px-3 py-0.5 rounded-md bg-white border border-navy/10 text-[10px] text-navy/60">
          app.vidapet.com.br/mariana
        </div>
      </div>

      <div className="grid grid-cols-[170px_1fr] min-h-[420px]">
        {/* sidebar */}
        <aside className="bg-[#FBFAF7] border-r border-navy/5 p-3 space-y-3">
          <div className="flex items-center gap-2 px-1">
            <span className="h-6 w-6 rounded-md bg-orange flex items-center justify-center">
              <Heart size={12} className="text-white" />
            </span>
            <span className="font-serif font-bold text-navy text-sm">VidaPet</span>
          </div>

          <div className="rounded-xl bg-white border border-navy/10 p-2 flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-orange/20 flex items-center justify-center text-xs">🐶</div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-navy">Bom dia, Mariana</p>
              <p className="text-[9px] text-navy/55">Toddy • 4 anos</p>
            </div>
          </div>

          <div className="space-y-0.5">
            <SideItem icon={Home} label="Início" active />
            <SideItem icon={Stethoscope} label="Histórico" />
            <SideItem icon={Pill} label="Medicamentos" />
            <SideItem icon={Syringe} label="Vacinas" />
            <SideItem icon={CalendarDays} label="Agenda" />
            <SideItem icon={Clock} label="Linha do tempo" />
            <SideItem icon={Boxes} label="Estoque" />
            <SideItem icon={Wallet} label="Gastos" />
          </div>

          <div className="rounded-lg bg-navy/5 p-2">
            <p className="text-[9px] font-semibold text-navy">Modo emergência</p>
            <p className="text-[8px] text-navy/60">Compartilhe o histórico</p>
          </div>
        </aside>

        {/* main */}
        <main className="p-4 space-y-3 bg-white">
          {/* topbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-[#F4F2EE] rounded-full px-3 py-1.5 w-1/2">
              <Search size={12} className="text-navy/50" />
              <span className="text-[10px] text-navy/40">Buscar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-[#F4F2EE] flex items-center justify-center"><Bell size={12} /></span>
              <span className="h-7 w-7 rounded-full bg-orange/20 flex items-center justify-center text-[10px]">M</span>
            </div>
          </div>

          {/* greeting + cta */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-navy/50">Pet</p>
              <h3 className="font-serif text-lg font-bold text-navy">Saúde do Toddy</h3>
            </div>
            <button className="rounded-full bg-orange px-3 py-1.5 text-[10px] font-semibold text-white shadow-soft inline-flex items-center gap-1">
              <Plus size={11}/> Registrar
            </button>
          </div>

          {/* top stats */}
          <div className="grid grid-cols-4 gap-2">
            <MiniCard title="Peso" value="10 kg" sub="+0,3 kg" />
            <MiniCard title="Doses (mês)" value="114" sub="98% adesão" />
            <MiniCard title="Vacinas em dia" value="2" sub="Próxima: 12/06" />
            <MiniCard title="Gastos (mês)" value="R$ 547" sub="-12% vs. anterior" />
          </div>

          {/* main panel */}
          <div className="grid grid-cols-[1fr_1fr] gap-3">
            <div className="rounded-xl border border-greenmid/40 bg-greenmid/5 p-3 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block">
                  <ScoreRing value={87} />
                </div>
                <p className="text-[10px] text-navy/60 mt-1">Score de saúde</p>
              </div>
            </div>

            <div className="rounded-xl border border-navy/10 p-3 space-y-2 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wide text-navy/50">Lembretes de hoje</p>
                <ChevronRight size={12} className="text-navy/40"/>
              </div>
              <ul className="space-y-1.5 text-[11px]">
                {[
                  { c: '#FF7631', l: 'Antipulgas • 09:00' },
                  { c: '#1D57A5', l: 'Vermífugo • 12:30' },
                  { c: '#007C58', l: 'Probiótico • 19:00' },
                  { c: '#D6E865', l: 'Caminhada • 20:00' }
                ].map((r, i) => (
                  <li key={i} className="flex items-center justify-between bg-[#FBFAF7] rounded-md px-2 py-1.5">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: r.c }} />
                      <span className="text-navy">{r.l}</span>
                    </span>
                    <span className="text-[9px] text-navy/40">Confirmar</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* alert row */}
          <div className="flex items-center gap-2 rounded-xl bg-orange/8 border border-orange/30 p-2">
            <AlertCircle size={14} className="text-orange-600" />
            <p className="text-[10px] text-navy">
              <span className="font-semibold">Estoque baixo:</span> Antipulgas — 3 unidades restantes
            </p>
            <span className="ml-auto text-[10px] text-orange-600 font-semibold">Repor</span>
          </div>
        </main>
      </div>
    </div>
  )
}
