const tones = {
  done: {
    badge: 'bg-[var(--color-success-soft)] text-[#1b5e20] ring-[#388E3C]/35',
    dot: 'bg-[#388E3C]',
    bar: 'bg-[#388E3C]',
  },
  process: {
    badge: 'bg-[var(--color-warning-soft)] text-[#e65100] ring-[#F57C00]/40',
    dot: 'bg-[#F57C00]',
    bar: 'bg-[#F57C00]',
  },
  late: {
    badge: 'bg-red-50 text-red-800 ring-red-200/60',
    dot: 'bg-red-500',
    bar: 'bg-red-500',
  },
  neutral: {
    badge: 'bg-ovalle-50 text-ovalle-900 ring-ovalle-600/25',
    dot: 'bg-ovalle-600',
    bar: 'bg-ovalle-600',
  },
}

export function toneForStatusKey(statusKey) {
  if (statusKey === 'finalizado') return tones.done
  if (statusKey === 'atrasado') return tones.late
  if (statusKey === 'creado') return tones.neutral
  return tones.process
}

export function labelForRequest(r) {
  if (r.statusKey === 'atrasado') return 'Atrasado'
  return r.currentStageLabel
}
