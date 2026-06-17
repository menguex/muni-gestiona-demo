import { motion } from 'framer-motion'
import { announcements } from '../data/mockData'

const typeMeta = {
  importante: {
    label: 'Importante',
    className: 'bg-red-50 text-red-800 ring-red-200/60',
    icon: '!',
  },
  aviso: {
    label: 'Aviso',
    className: 'bg-amber-50 text-amber-900 ring-amber-200/60',
    icon: '◆',
  },
  institucional: {
    label: 'Institucional',
    className: 'bg-ovalle-50 text-ovalle-900 ring-ovalle-600/25',
    icon: 'i',
  },
}

export function Comms() {
  return (
    <div className="px-4 pb-2">
      <div className="pt-2">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Comunicación interna</h1>
        <p className="mt-1 text-sm text-slate-500">Mensajes, avisos e información oficial.</p>
      </div>

      <ul className="mt-6 space-y-4">
        {announcements.map((n, i) => {
          const meta = typeMeta[n.type] ?? typeMeta.aviso
          return (
            <motion.li
              key={n.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
                <span
                  className={`flex size-8 items-center justify-center rounded-lg text-xs font-bold ring-1 ring-inset ${meta.className}`}
                  aria-hidden
                >
                  {meta.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    {meta.label}
                  </span>
                  <h2 className="text-sm font-semibold leading-snug text-slate-900">{n.title}</h2>
                </div>
                <time className="shrink-0 text-[10px] font-medium text-slate-400">{n.date}</time>
              </div>
              <p className="px-4 py-3 text-sm leading-relaxed text-slate-600">{n.body}</p>
            </motion.li>
          )
        })}
      </ul>

      <p className="mt-8 text-center text-xs text-slate-400">
        Un canal único reduce ruido y evita versiones cruzadas por WhatsApp.
      </p>
    </div>
  )
}
