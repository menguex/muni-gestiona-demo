import { useEffect, useState } from 'react'

/**
 * Oculta el logo en cuanto hay scroll (scrollY > hideAfter). Con hideAfter=0: al primer píxel.
 * Vuelve a mostrarse al volver al tope.
 */
export function useHideLogoOnScrollDown({ hideAfter = 0 } = {}) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const readY = () => window.scrollY || document.documentElement.scrollTop

    const onScroll = () => {
      setHidden(readY() > hideAfter)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hideAfter])

  return hidden
}
