type Mode = 'light' | 'dark' | undefined

export function getInitMode(): Mode {
  const isPreferMediaDark = window.matchMedia('(prefers-color-scheme: dark)')
  const mediaMode = isPreferMediaDark.matches ? 'dark' : 'light'
  return (localStorage.getItem?.('color-mode') as Mode) ?? mediaMode
}

export function getOppositeMode(mode: Mode) {
  return mode === 'dark' ? 'light' : 'dark'
}

export function ejectModeClassName() {
  // const mode: Mode = getInitMode() ?? 'light'
  // console.log(mode)
  // const element = document.documentElement
  // const prevMode = getOppositeMode(mode)
  // const isPrevExist = element.classList.contains(prevMode)
  // console.log('mode', mode, 'prevMode', prevMode, 'IsPrevExist', isPrevExist)
  // if (isPrevExist) {
  //   element.classList.remove(prevMode)
  // }
  // element.classList.add(mode)

  console.log('Hello')
}
