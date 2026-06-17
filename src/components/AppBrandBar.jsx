import { motion, useReducedMotion } from 'framer-motion'
import { OvalleLogo } from './OvalleLogo'
import { useHideLogoOnScrollDown } from '../hooks/useHideLogoOnScrollDown'

const LOGO_SLOT_PX = 56
/** Padding inferior del bloque header: más aire cuando el logo está oculto (no junta “Gestión interna” al contenido) */
const PAD_BOTTOM_EXPANDED = 10
const PAD_BOTTOM_LOGO_HIDDEN = 32

export function AppBrandBar() {
  const logoHidden = useHideLogoOnScrollDown({ hideAfter: 0 })
  const reduceMotion = useReducedMotion()

  /** Ocultar: casi instantáneo. Mostrar: un poco más suave al volver arriba */
  const tShow = reduceMotion
    ? { duration: 0.2, ease: 'easeOut' }
    : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
  const tHide = reduceMotion
    ? { duration: 0.1, ease: 'easeOut' }
    : { duration: 0.12, ease: [0.4, 0, 0.9, 1] }
  const tLogo = logoHidden ? tHide : tShow
  const tPad = logoHidden ? tHide : tShow

  return (
    <header className="sticky top-0 z-30 w-full bg-transparent">
      <motion.div
        className="mx-auto flex w-full max-w-md flex-col items-center px-4 pt-[max(0.45rem,env(safe-area-inset-top))]"
        initial={false}
        animate={{
          paddingBottom: logoHidden ? PAD_BOTTOM_LOGO_HIDDEN : PAD_BOTTOM_EXPANDED,
        }}
        transition={tPad}
      >
        <motion.div
          className="flex w-full justify-center overflow-hidden"
          initial={false}
          animate={{ height: logoHidden ? 0 : LOGO_SLOT_PX }}
          transition={tLogo}
        >
          <motion.div
            className="flex w-full justify-center"
            initial={false}
            animate={
              reduceMotion
                ? { opacity: logoHidden ? 0 : 1 }
                : {
                    opacity: logoHidden ? 0 : 1,
                    y: logoHidden ? -18 : 0,
                  }
            }
            transition={tLogo}
          >
            <OvalleLogo
              variant="horizontal"
              className="block h-[48px] w-auto max-w-full object-contain sm:h-[52px]"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400"
          initial={false}
          animate={{
            marginTop: logoHidden ? 8 : 4,
            opacity: logoHidden ? 0.92 : 1,
          }}
          transition={tLogo}
        >
          Gestión interna
        </motion.p>

        {/* Carril visual: indica dónde “baja” el logo al volver arriba; mantiene separación respecto al contenido */}
        <motion.div
          className="flex w-full justify-center overflow-hidden"
          initial={false}
          animate={{ height: logoHidden ? 16 : 0 }}
          transition={tLogo}
        >
          <div className="mt-2 h-px w-[min(5rem,42%)] shrink-0 rounded-full bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />
        </motion.div>
      </motion.div>
    </header>
  )
}
