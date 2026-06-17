/** Estados de solicitud para UI */
export const STATUS = {
  creado: { key: 'creado', label: 'Creado', tone: 'neutral' },
  revision: { key: 'revision', label: 'En revisión', tone: 'process' },
  diseno: { key: 'diseno', label: 'En diseño', tone: 'process' },
  aprobacion: { key: 'aprobacion', label: 'Aprobación', tone: 'process' },
  finalizado: { key: 'finalizado', label: 'Finalizado', tone: 'done' },
  atrasado: { key: 'atrasado', label: 'Atrasado', tone: 'late' },
}

const mkTimeline = (steps) =>
  steps.map((s, i) => ({
    id: `st-${i}`,
    stageKey: s.stageKey,
    title: s.title,
    person: s.person,
    duration: s.duration,
    completed: s.completed,
    active: s.active,
  }))

export const requests = [
  {
    id: 'req-1',
    title: 'Diseño logo feria costumbrista',
    description:
      'Identidad visual para la feria 2026: logotipo principal, versión monocromática y aplicación en redes. Coordinación con Dirección de Cultura.',
    area: 'Comunicaciones',
    dueDate: '2026-04-28',
    statusKey: 'diseno',
    currentStageLabel: 'En diseño',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'P. Soto — Sec. General',
        duration: 'Hace 5 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: 'M. Rojas — Cultura',
        duration: '2 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: 'Equipo Diseño Municipal',
        duration: 'En curso',
        completed: false,
        active: true,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: 'Pendiente',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
    ]),
  },
  {
    id: 'req-2',
    title: 'Organización evento municipal aniversario',
    description:
      'Cronograma, proveedores, permisos y plan de contingencia para el acto central del aniversario comunal en plaza de armas.',
    area: 'Administración Municipal',
    dueDate: '2026-05-02',
    statusKey: 'revision',
    currentStageLabel: 'En revisión',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'L. Fuentes — Eventos',
        duration: 'Hace 1 día',
        completed: true,
        active: false,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: 'Jefa Gabinete',
        duration: 'Hoy',
        completed: false,
        active: true,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
    ]),
  },
  {
    id: 'req-3',
    title: 'Solicitud de permiso obra menor',
    description:
      'Permiso para reparación de medianera en calle Los Aromos. Documentación técnica adjunta y visita de fiscalización.',
    area: 'Obras',
    dueDate: '2026-04-18',
    statusKey: 'atrasado',
    currentStageLabel: 'Atrasado',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'R. Méndez — Vecino canalizado',
        duration: 'Hace 12 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: 'Fiscalización Obras',
        duration: '6 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: 'Sec. Planificación',
        duration: 'Pendiente (vencido)',
        completed: false,
        active: true,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
    ]),
  },
  {
    id: 'req-4',
    title: 'Campaña comunicacional verano seguro',
    description:
      'Piezas para redes, afiches en espacios públicos y guion para spot radial. Mensajes claros sobre prevención y uso de espacios.',
    area: 'Comunicaciones',
    dueDate: '2026-05-15',
    statusKey: 'creado',
    currentStageLabel: 'Creado',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'K. Álvarez — Comunicaciones',
        duration: 'Hace 4 h',
        completed: true,
        active: true,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
    ]),
  },
  {
    id: 'req-5',
    title: 'Reparación infraestructura plaza central',
    description:
      'Evaluación de juegos infantiles, riego y luminarias. Presupuesto preliminar y priorización por etapas.',
    area: 'Obras',
    dueDate: '2026-04-30',
    statusKey: 'aprobacion',
    currentStageLabel: 'Aprobación',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'Dirección Obras',
        duration: 'Hace 8 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: 'Sec. Comunitaria',
        duration: '3 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: 'Oficina Técnica',
        duration: '4 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: 'Alcaldía / Finanzas',
        duration: 'En curso',
        completed: false,
        active: true,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: '—',
        duration: '—',
        completed: false,
        active: false,
      },
    ]),
  },
  {
    id: 'req-6',
    title: 'Actividad comunitaria barrio norte',
    description:
      'Operativo de información, inscripciones a talleres y entrega de material educativo. Logística con JJ.VV. y Carabineros.',
    area: 'Desarrollo Social',
    dueDate: '2026-04-10',
    statusKey: 'finalizado',
    currentStageLabel: 'Finalizado',
    timeline: mkTimeline([
      {
        stageKey: 'creado',
        title: 'Creado',
        person: 'Equipo Desarrollo Social',
        duration: 'Hace 20 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'revision',
        title: 'En revisión',
        person: 'Coordinación local',
        duration: '2 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'diseno',
        title: 'En diseño',
        person: 'Comunicaciones',
        duration: '3 días',
        completed: true,
        active: false,
      },
      {
        stageKey: 'aprobacion',
        title: 'Aprobación',
        person: 'Jefe Gabinete',
        duration: '1 día',
        completed: true,
        active: false,
      },
      {
        stageKey: 'finalizado',
        title: 'Finalizado',
        person: 'Cierre — D. Social',
        duration: 'Hace 2 días',
        completed: true,
        active: false,
      },
    ]),
  },
]

export function getRequestById(id) {
  return requests.find((r) => r.id === id)
}

export const dashboardStats = {
  monthTotal: 47,
  avgResponseHours: 18,
  avgResponseLabel: '18 h',
  topAreas: [
    { area: 'Comunicaciones', count: 14, pct: 30 },
    { area: 'Obras', count: 11, pct: 23 },
    { area: 'Desarrollo Social', count: 9, pct: 19 },
    { area: 'Administración', count: 8, pct: 17 },
    { area: 'Otras', count: 5, pct: 11 },
  ],
  alerts: [
    { id: 'a1', text: '1 solicitud con plazo vencido (Obras)', severity: 'high' },
    { id: 'a2', text: '2 entregas en las próximas 48 h', severity: 'medium' },
  ],
}

export const profileUser = {
  name: 'María Ignacia Rojas',
  role: 'Directora Municipal',
  avatarInitials: 'MR',
}

export const myTasks = [
  { id: 't1', title: 'Aprobar piezas campaña verano', due: 'Hoy', requestId: 'req-4' },
  { id: 't2', title: 'Revisión evento aniversario', due: 'Mañana', requestId: 'req-2' },
  { id: 't3', title: 'Firma informe plaza central', due: '28 abr', requestId: 'req-5' },
]

export const upcomingDeliveries = [
  { id: 'u1', title: 'Logo feria costumbrista', date: '28 abr', requestId: 'req-1' },
  { id: 'u2', title: 'Cronograma evento aniversario', date: '2 may', requestId: 'req-2' },
]

export const announcements = [
  {
    id: 'n1',
    type: 'importante',
    title: 'Reunión de coordinación interáreas',
    body: 'Miércoles 09:00 — sala de juntas. Prioridad: campañas Q2 y feria costumbrista.',
    date: '22 abr',
  },
  {
    id: 'n2',
    type: 'aviso',
    title: 'Cierre de plataforma mantenimiento',
    body: 'Domingo 02:00–04:00. Las solicitudes en borrador se guardan automáticamente.',
    date: '20 abr',
  },
  {
    id: 'n3',
    type: 'institucional',
    title: 'Manual de uso interno actualizado',
    body: 'Nueva guía de estados y responsables por etapa. Disponible en intranet.',
    date: '18 abr',
  },
]

export function summarizeRequests() {
  const active = requests.filter((r) => r.statusKey !== 'finalizado').length
  const inProcess = requests.filter((r) =>
    ['revision', 'diseno', 'aprobacion'].includes(r.statusKey),
  ).length
  const late = requests.filter((r) => r.statusKey === 'atrasado').length
  return { active, inProcess, late, total: requests.length }
}
