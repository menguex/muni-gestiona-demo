import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { KpiCard } from '../components/KpiCard'
import { summarizeRequests } from '../data/mockData'

export function Home() {
  const { active, inProcess, late } = summarizeRequests()

  return (
    <div className="px-4 pb-2">
      <header className="pt-4 text-center sm:text-left">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ovalle-700/90">
          Demo interno · Ovalle
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-balance text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-left"
        >
          Municipalidad en tiempo real
        </motion.h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600">
          Todo bajo control: solicitudes internas, etapas claras y seguimiento como un pedido en
          ruta — sin adivinar en qué está cada gestión.
        </p>
      </header>

      <div className="mt-6 grid grid-cols-3 gap-2">
        <KpiCard label="Activas" value={String(active)} hint="Seguimiento en vivo" delay={0.05} />
        <KpiCard
          label="En proceso"
          value={String(inProcess)}
          hint="Equipos trabajando"
          delay={0.1}
          variant="accent"
        />
        <KpiCard
          label="Atrasadas"
          value={String(late)}
          hint="Requieren acción"
          delay={0.15}
          variant={late > 0 ? 'danger' : 'default'}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[var(--shadow-card)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Visibilidad para la gestión</h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Un solo lugar para ver estado, responsable y plazos. Moderniza cómo la municipalidad
              coordina por dentro.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[#e8f5e9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1b5e20] ring-1 ring-[#388E3C]/35">
            En vivo
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Link
            to="/solicitudes"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-ovalle-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ovalle-700 active:scale-[0.99]"
          >
            Ver solicitudes
          </Link>
          <Link
            to="/panel"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white active:scale-[0.99]"
          >
            Panel directivo
          </Link>
        </div>
      </motion.section>

      <p className="mt-8 text-center text-[11px] font-medium text-slate-400">
        Prototipo para demo — datos de ejemplo
      </p>
    </div>
  )
}
