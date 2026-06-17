import { Link, useNavigate, useParams } from 'react-router-dom'
import { getRequestById } from '../data/mockData'
import { StatusBadge } from '../components/StatusBadge'
import { Timeline } from '../components/Timeline'
import { labelForRequest } from '../lib/statusStyles'

export function RequestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const r = getRequestById(id)

  if (!r) {
    return (
      <div className="px-4 py-8 text-center">
        <p className="text-slate-600">Solicitud no encontrada.</p>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-4 text-sm font-semibold text-ovalle-700"
        >
          Volver
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 pb-2">
      <div className="sticky top-0 z-20 -mx-4 flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/95 px-4 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex size-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
          aria-label="Volver"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Detalle</span>
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h1 className="text-balance text-lg font-bold leading-snug text-slate-900">{r.title}</h1>
          <StatusBadge statusKey={r.statusKey}>{labelForRequest(r)}</StatusBadge>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.description}</p>
        <dl className="mt-4 grid grid-cols-2 gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm shadow-sm">
          <div>
            <dt className="text-xs font-medium text-slate-500">Área</dt>
            <dd className="mt-0.5 font-semibold text-slate-900">{r.area}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-500">Fecha límite</dt>
            <dd className="mt-0.5 font-semibold text-slate-900">
              {new Date(r.dueDate + 'T12:00:00').toLocaleDateString('es-CL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </dd>
          </div>
        </dl>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Recorrido de la solicitud</h2>
            <p className="text-xs text-slate-500">Quién actuó y cuánto llevó cada etapa.</p>
          </div>
          <span className="shrink-0 rounded-lg bg-ovalle-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-ovalle-900 ring-1 ring-ovalle-100">
            Seguimiento en tiempo real
          </span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[var(--shadow-card)]">
          <Timeline steps={r.timeline} />
        </div>
      </section>

      <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-3 text-center text-xs text-slate-500">
        Así se ve cuando <span className="font-semibold text-slate-700">todo está conectado</span> — el
        ciudadano interno también merece claridad.
      </div>

      <Link
        to="/solicitudes"
        className="mt-4 block text-center text-sm font-semibold text-ovalle-700 hover:underline"
      >
        Volver al listado
      </Link>
    </div>
  )
}
