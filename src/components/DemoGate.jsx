import { useCallback, useState } from 'react'

const STORAGE_KEY = 'centroovalle-demo-auth-v1'

function readConfiguredPassword() {
  const v = import.meta.env.VITE_DEMO_PASSWORD
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : ''
}

/**
 * Acceso demo por clave (variable de entorno en build).
 * Sin VITE_DEMO_PASSWORD la app abre sin pantalla (útil en local).
 * Nota: en sitio estático la clave queda en el bundle; sirve como candado ligero para demos, no para datos sensibles.
 */
export function DemoGate({ children }) {
  const configured = readConfiguredPassword()
  const [unlocked, setUnlocked] = useState(() => {
    if (!configured) return true
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submit = useCallback(
    (e) => {
      e.preventDefault()
      const attempt = value.trim()
      if (attempt === configured) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1')
        } catch {
          /* ignore */
        }
        setError(false)
        setUnlocked(true)
        return
      }
      setError(true)
    },
    [configured, value],
  )

  if (!configured || unlocked) {
    return children
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-slate-100 px-6 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)]">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ovalle-700/90">
          Centro Ovalle
        </p>
        <h1 className="mt-2 text-center text-xl font-bold tracking-tight text-slate-900">Acceso a la demo</h1>
        <p className="mt-2 text-center text-sm text-slate-500">Introduce la clave para continuar.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block text-xs font-medium text-slate-600" htmlFor="demo-pass">
            Clave
          </label>
          <input
            id="demo-pass"
            name="password"
            type="password"
            autoComplete="current-password"
            value={value}
            onChange={(ev) => {
              setValue(ev.target.value)
              setError(false)
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-ovalle-600 focus:bg-white"
            placeholder="•••••••"
          />
          {error ? (
            <p className="text-center text-xs font-medium text-red-600" role="alert">
              Clave incorrecta
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-ovalle-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ovalle-700 active:scale-[0.99]"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
