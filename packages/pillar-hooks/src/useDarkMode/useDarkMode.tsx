import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark' | undefined

const codeToRunOnClient = `function(){alert('Hello')}`

function getOppositeMode(mode: Mode) {
  return mode === 'dark' ? 'light' : 'dark'
}

export function getModeInitial(): Mode {
  const isPreferMediaDark = window.matchMedia('(prefers-color-scheme: dark)')
  const mediaMode = isPreferMediaDark.matches ? 'dark' : 'light'
  const localStorageMode = localStorage.getItem?.('color-mode') as Mode
  return localStorageMode ?? mediaMode
}

function ejectClassNameMode(mode: Mode = 'light') {
  const element = document.documentElement
  const prevMode = getOppositeMode(mode)
  const isPrevExist = element.classList.contains(prevMode)
  if (isPrevExist) {
    element.classList.remove(prevMode)
  }
  element.classList.add(mode)
}

/**
 * Custom hook for managing dark mode state and functionality.
 * @returns {{
 *   isDark: boolean,
 *   mode: Mode,
 *   toggleMode: () => void,
 *   modeScript: ReactElement
 * }} - Object containing dark mode related properties and functions.
 */

export function useDarkMode() {
  const [mode, setMode] = useState<Mode>(undefined)

  const isDark = mode === 'dark' ? true : false

  useEffect(() => {
    const mode = getModeInitial()
    setMode(mode)
    ejectClassNameMode(mode)
  }, [])

  /**
   * Toggles the mode between 'light' and 'dark'.
   */
  function toggleMode() {
    setMode((mode) => {
      const nextMode = getOppositeMode(mode)

      window.localStorage.setItem('color-mode', nextMode)
      ejectClassNameMode(nextMode)
      return nextMode
    })
  }
  const modeScript = <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
  return { isDark, mode, toggleMode, modeScript }
}
