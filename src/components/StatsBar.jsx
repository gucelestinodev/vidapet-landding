export default function StatsBar() {
  const stats = [
    { v: '12k+', l: 'Pets cadastrados' },
    { v: '98%', l: 'Adesão à medicação' },
    { v: '4.9★', l: 'Avaliação média' },
    { v: 'R$0', l: 'Para começar' }
  ]
  return (
    <section className="bg-orange text-white">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-7">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-serif font-bold text-3xl sm:text-4xl">{s.v}</p>
            <p className="text-xs sm:text-sm text-white/85 mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
