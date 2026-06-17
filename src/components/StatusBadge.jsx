import { toneForStatusKey } from '../lib/statusStyles'

export function StatusBadge({ statusKey, children, className = '' }) {
  const t = toneForStatusKey(statusKey)
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${t.badge} ${className}`}
    >
      <span className={`mr-1.5 size-1.5 shrink-0 rounded-full ${t.dot}`} aria-hidden />
      {children}
    </span>
  )
}
