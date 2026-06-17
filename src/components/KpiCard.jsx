import { motion } from 'framer-motion'

export function KpiCard({ label, value, hint, variant = 'default', delay = 0 }) {
  const border =
    variant === 'danger'
      ? 'border-red-100 bg-white'
      : variant === 'accent'
        ? 'border-ovalle-100 bg-white'
        : 'border-slate-100 bg-white'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.25 }}
      className={`rounded-2xl border p-4 shadow-sm ${border}`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </motion.div>
  )
}
