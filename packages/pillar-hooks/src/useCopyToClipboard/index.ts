import { useState, useEffect } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

/**
 * Custom hook for copying text to the clipboard with optional timeout.
 *
 * @param {number} [timeout=300] - The timeout duration in milliseconds.
 *
 * @returns {{
 *   text: CopiedValue,
 *   copy: CopyFn,
 *   copied: boolean
 * }} - An object containing the current copied text, the copy function, and the copied state.
 */
type Initial = [CopiedValue, boolean]
const initial: Initial = [null, false]

export function useCopyToClipboard(timeout: number = 300) {
  const [text, setText] = useState<Initial>(initial)

  /**
   * The copy function.
   *
   * @param {string} text - The text to copy to the clipboard.
   * @returns {Promise<boolean>} - A promise indicating whether the copy operation was successful.
   */
  const copy: CopyFn = async (text) => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard not supported')
      await navigator.clipboard.writeText(text)
      setText([text, true])
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setText(initial)
      return false
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setText(initial), timeout)

    return () => clearTimeout(timeoutId)
  }, [timeout])

  return { text: text[0], copy, copied: text[1] }
}
