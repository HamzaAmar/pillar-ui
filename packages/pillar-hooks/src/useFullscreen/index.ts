import { useState, useEffect, useCallback, useRef } from 'react'

function checkRequestFullscreen(element: HTMLElement) {
  const docElement = element as DocumentElementType
  return (
    docElement.requestFullscreen?.() ||
    docElement.msRequestFullscreen?.() ||
    docElement.webkitEnterFullscreen?.() ||
    docElement.webkitRequestFullscreen?.() ||
    docElement.mozRequestFullscreen?.()
  )
}

function checkExistFullscreen() {
  const doc = document as DocumentType

  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen()
  }
}

function addFullscreenChangeListeners(type: string, action: 'addEventListener' | 'removeEventListener', handler: any) {
  const browserPrefixes = ['', 'moz', 'webkit', 'ms']
  browserPrefixes.forEach((prefix) => document[action](`${prefix}${type}`, handler))
}

function setupEventEffects(handleFullscreenChange: any, handleFullscreenError: any, handleKeyPress: any) {
  addFullscreenChangeListeners('fullscreenchange', 'addEventListener', handleFullscreenChange)
  addFullscreenChangeListeners('fullscreenerror', 'addEventListener', handleFullscreenError)
  document.addEventListener('keydown', handleKeyPress)

  return () => {
    addFullscreenChangeListeners('fullscreenchange', 'removeEventListener', handleFullscreenChange)
    addFullscreenChangeListeners('fullscreenerror', 'removeEventListener', handleFullscreenError)

    document.removeEventListener('keydown', handleKeyPress)
  }
}

/**
 * Hook to toggle the fullscreen mode of an element.
 * @returns An Object with 4 elements:
 *   - `isFullscreen`: A boolean value indicating whether the element is currently in fullscreen mode.
 *   - `enterFullscreen`: A function to enter fullscreen mode.
 *   - `exitFullscreen`: A function to exit fullscreen mode.
 *   - `toggleFullscreen`: A function to toggle fullscreen mode.
 *
 * @example
 * 
 * ```tsx
*   import React from 'react';
*   import useFullscreen from './useFullscreen';

*   const App = () => {
*     const [isFullscreen, enterFullscreen, exitFullscreen] = useFullscreen();
*   
*     return (
*               <div>
*                 <h1>My Fullscreen App</h1>
*                 <button onClick={enterFullscreen}>Enter Fullscreen</button>
*                 <button onClick={exitFullscreen}>Exit Fullscreen</button>
*                 <div className={isFullscreen ? 'fullscreen-element' : ''}>
*                       // You content here
*                 </div>
*               </div>
*         );
*       };
*       
*       export default App;
* ```
 */

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const ref = useRef()

  const element = ref.current ?? document.documentElement

  const enterFullscreen = useCallback(() => {
    checkRequestFullscreen(element)
    setIsFullscreen(true)
  }, [element])

  const exitFullscreen = useCallback(() => {
    checkExistFullscreen()
    setIsFullscreen(false)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      enterFullscreen()
    } else {
      exitFullscreen()
    }
  }, [enterFullscreen, exitFullscreen, isFullscreen])

  const handleFullscreenError = useCallback(
    (event: Event) => {
      setIsFullscreen(false)
      console.error(`useFullscreen: Error attempting full-screen mode method: ${event} (${event.target})`)
    },
    [setIsFullscreen]
  )

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (document.fullscreenElement && (event.key === 'Escape' || event.key === 'Esc' || event.key === 'F11')) {
        exitFullscreen()
      }
    },
    [exitFullscreen]
  )

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    return setupEventEffects(handleFullscreenChange, handleFullscreenError, handleKeyPress)
  }, [handleKeyPress, handleFullscreenError])

  return { ref, isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen }
}

export interface DocumentElementType extends HTMLElement {
  webkitRequestFullscreen(): Promise<void>
  msRequestFullscreen(): Promise<void>
  webkitEnterFullscreen(): Promise<void>
  mozRequestFullscreen(): Promise<void>
}

export interface DocumentType extends Document {
  mozCancelFullScreen(): Promise<void>
  webkitExitFullscreen(): Promise<void>
  msExitFullscreen(): Promise<void>
}
