import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { myTasks, profileUser, upcomingDeliveries } from '../data/mockData'

export function Profile() {
  const { name, role, avatarInitials } = profileUser

  return (
    <div className="px-4 pb-2">
      <div className="pt-2">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Perfil</h1>
      </div>

      <div className="mt-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ovalle-700 to-ovalle-900 text-lg font-bold text-white shadow-inner">
          {avatarInitials}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-900">Tareas asignadas</h2>
        <ul className="mt-3 space-y-2">
          {myTasks.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/solicitudes/${t.requestId}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:border-ovalle-100 hover:shadow-md"
              >
                <span className="font-medium text-slate-800">{t.title}</span>
                <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-900 ring-1 ring-amber-200/60">
                  {t.due}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-900">Próximas entregas</h2>
        <ul className="mt-3 space-y-2">
          {upcomingDeliveries.map((u, i) => (
            <motion.li
              key={u.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                to={`/solicitudes/${u.requestId}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm transition hover:bg-white hover:shadow-sm"
              >
                <span className="text-slate-800">{u.title}</span>
                <span className="shrink-0 text-xs font-semibold text-ovalle-700">{u.date}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      <div className="mt-8 rounded-xl border border-dashed border-slate-200 px-4 py-3 text-center text-xs text-slate-500">
        Pendientes claros = menos fricción entre equipos.
      </div>
    </div>
  )
}
