import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Inicio', icon: HomeIcon },
  { to: '/solicitudes', label: 'Solicitudes', icon: InboxIcon },
  { to: '/panel', label: 'Panel', icon: ChartIcon },
  { to: '/comunicacion', label: 'Mensajes', icon: BellIcon },
  { to: '/perfil', label: 'Perfil', icon: UserIcon },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/90 px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md"
      aria-label="Navegación principal"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between gap-0.5">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to} className="min-w-0 flex-1">
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-medium transition-colors ${
                  isActive
                    ? 'text-ovalle-700'
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex size-9 items-center justify-center rounded-xl transition-all ${
                      isActive ? 'bg-ovalle-100 text-ovalle-900 shadow-sm' : 'text-slate-500'
                    }`}
                  >
                    <Icon active={isActive} />
                  </span>
                  <span className="truncate">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function HomeIcon({ active }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={active ? 2.25 : 1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function InboxIcon({ active }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={active ? 2.25 : 1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 0 2.012-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.218a2.25 2.25 0 0 1 2.013 1.244l.256.512a2.25 2.25 0 0 0 2.012 1.244H21.75M5.25 5.25h13.5m-13.5 0a3 3 0 0 1-3 3v9.75a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V8.25a3 3 0 0 1-3-3m-16.5 0V6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v.75" />
    </svg>
  )
}

function ChartIcon({ active }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={active ? 2.25 : 1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v7.125C7.5 21 6 21 6 21H4.125A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  )
}

function BellIcon({ active }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={active ? 2.25 : 1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  )
}

function UserIcon({ active }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={active ? 2.25 : 1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )
}
