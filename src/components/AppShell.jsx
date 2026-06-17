import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { BottomNav } from './BottomNav'
import { AppBrandBar } from './AppBrandBar'

export function AppShell() {
  const location = useLocation()

  return (
    <div className="relative mx-auto min-h-dvh max-w-md bg-slate-50 shadow-md shadow-slate-300/25 md:my-4 md:min-h-[min(844px,100dvh-2rem)] md:rounded-3xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-gradient-to-b from-ovalle-700 via-ovalle-600 to-transparent opacity-[0.1] md:rounded-t-3xl" />
      <AppBrandBar />
      <main className="relative z-10 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <BottomNav />
    </div>
  )
}
