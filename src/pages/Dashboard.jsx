import { motion } from 'framer-motion'
import { dashboardStats, requests } from '../data/mockData'

export function Dashboard() {
  const { monthTotal, avgResponseLabel, topAreas, alerts } = dashboardStats

  return (
    <div className="px-4 pb-2">
      <div className="pt-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-ovalle-700/90">Panel</p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Gestión y control</h1>
        <p className="mt-1 text-sm text-slate-500">
          Indicadores del mes — visión para alcaldía y directivos.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2 rounded-2xl border border-slate-200 bg-gradient-to-br from-ovalle-800 to-ovalle-600 p-5 text-white shadow-lg"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">
            Solicitudes del mes
          </p>
          <p className="mt-1 text-4xl font-bold tracking-tight">{monthTotal}</p>
          <p className="mt-2 text-sm text-ovalle-50/95">Centralizadas en un solo flujo de trabajo.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-medium text-slate-500">Tiempo promedio de respuesta</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{avgResponseLabel}</p>
          <p className="mt-1 text-[11px] text-slate-500">Primera acción tras creación</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-medium text-slate-500">En demo (muestra)</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{requests.length}</p>
          <p className="mt-1 text-[11px] text-slate-500">Solicitudes de ejemplo activas</p>
        </motion.div>
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-900">Áreas más demandadas</h2>
        <ul className="mt-3 space-y-3">
          {topAreas.map((row, i) => (
            <motion.li
              key={row.area}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.04 }}
              className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="font-medium text-slate-800">{row.area}</span>
                <span className="text-slate-500">{row.count}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-ovalle-600 to-ovalle-800 transition-all"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-900">Alertas</h2>
        <ul className="mt-3 space-y-2">
          {alerts.map((a, i) => (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className={`flex gap-3 rounded-xl border px-4 py-3 text-sm ${
                a.severity === 'high'
                  ? 'border-red-100 bg-red-50/80 text-red-950'
                  : 'border-amber-100 bg-amber-50/80 text-amber-950'
              }`}
            >
              <span className="mt-0.5 text-lg" aria-hidden>
                {a.severity === 'high' ? '!' : '⏱'}
              </span>
              <span className="leading-snug">{a.text}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      <p className="mt-8 rounded-xl bg-slate-100 px-4 py-3 text-center text-xs font-medium text-slate-600">
        Todo bajo control — prioridades visibles, sin depender de correos sueltos.
      </p>
    </div>
  )
}
