import { useState, useEffect } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

/**
 * Custom hook for copying text to the clipboard with optional timeout.
 * @param {number} [timeout] - The timeout duration in milliseconds.
 * @returns {{
 *   text: CopiedValue,
 *   copy: CopyFn,
 *   copied: boolean
 * }} - An object containing the current copied text, the copy function, and the copied state.
 */

export function useCopyToClipboard(timeout: number = 300) {
  const [text, setText] = useState<CopiedValue>(null)
  const [copied, setCopied] = useState<boolean>(false)

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setText(text)
      setCopied(true)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setText(null)
      setCopied(false)
      return false
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setText(null)
      setCopied(false)
    }, timeout)

    return () => clearTimeout(timeoutId)
  }, [timeout, copied])

  return { text, copy, copied }
}
