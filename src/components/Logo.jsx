export default function Logo({ light = false }) {
  const color = light ? '#FFFFFF' : '#00313C'
  return (
    <div className="flex items-center gap-2 select-none">
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
        style={{ background: '#FF7631' }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
          <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.85A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10Z" />
        </svg>
      </span>
      <span className="font-serif font-bold text-[1.15rem] leading-none" style={{ color }}>
        Vida<span style={{ color: '#FF7631' }}>Pet</span>
      </span>
    </div>
  )
}
