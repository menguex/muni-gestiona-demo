import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { requests } from '../data/mockData'
import { StatusBadge } from '../components/StatusBadge'
import { labelForRequest } from '../lib/statusStyles'

function formatDue(iso) {
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
}

export function Requests() {
  return (
    <div className="px-4 pb-2">
      <div className="pt-2">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Solicitudes</h1>
        <p className="mt-1 text-sm text-slate-500">Toca una tarjeta para ver el detalle y el recorrido.</p>
      </div>

      <ul className="mt-5 space-y-3">
        {requests.map((r, i) => (
          <motion.li
            key={r.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              to={`/solicitudes/${r.id}`}
              className="block rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition hover:border-ovalle-100 hover:shadow-md active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm font-semibold leading-snug text-slate-900">{r.title}</h2>
                <StatusBadge statusKey={r.statusKey}>{labelForRequest(r)}</StatusBadge>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <BuildingIcon />
                  {r.area}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-600">
                  <CalendarIcon />
                  Límite {formatDue(r.dueDate)}
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

function BuildingIcon() {
  return (
    <svg className="size-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H18V11.25Zm0 3h.008v.008H18V14.25Zm0 3h.008v.008H18V17.25Zm0 3h.008v.008H18V20.25ZM12.75 4.5v.75m0 3.75v.75m0 3.75v.75m0 3.75v.75m9.75-15.75v.75m0 3.75v.75m0 3.75v.75m0 3.75v.75m-9.75-15.75v.75m0 3.75v.75m0 3.75v.75m0 3.75v.75" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="size-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5" />
    </svg>
  )
}
