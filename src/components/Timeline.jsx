import { toneForStatusKey } from '../lib/statusStyles'

export function Timeline({ steps }) {
  return (
    <ol className="relative space-y-0" aria-label="Seguimiento por etapas">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        const t = toneForStatusKey(
          step.completed ? 'finalizado' : step.active ? 'revision' : 'creado',
        )
        return (
          <li key={step.id} className="relative flex gap-3 pb-8 last:pb-0">
            {!isLast ? (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-0.5rem)] w-px bg-slate-200"
                aria-hidden
              />
            ) : null}
            <div className="relative z-10 flex shrink-0 flex-col items-center">
              <span
                className={`flex size-8 items-center justify-center rounded-full text-xs font-bold ring-4 ring-white ${
                  step.completed
                    ? 'bg-[#388E3C] text-white'
                    : step.active
                      ? 'bg-[#FDB813] text-amber-950 ring-[#F57C00]/30'
                      : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step.completed ? '✓' : index + 1}
              </span>
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-slate-900">{step.title}</p>
                {step.active ? (
                  <span className="rounded-full bg-[#fff3e0] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#e65100] ring-1 ring-[#F57C00]/35">
                    Ahora
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-sm text-slate-600">{step.person}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500">
                <span className={`inline-block size-1.5 rounded-full ${t.dot}`} />
                {step.duration}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
