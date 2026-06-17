import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Home } from './pages/Home'
import { Requests } from './pages/Requests'
import { RequestDetail } from './pages/RequestDetail'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { Comms } from './pages/Comms'

const routerBasename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-200/60">
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/solicitudes" element={<Requests />} />
            <Route path="/solicitudes/:id" element={<RequestDetail />} />
            <Route path="/panel" element={<Dashboard />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/comunicacion" element={<Comms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
