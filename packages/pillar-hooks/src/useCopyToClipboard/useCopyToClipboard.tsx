import { useState } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

/**
 * Custom hook for copying text to the clipboard.
 *
 * @returns {Array} An array containing the copied text value and a function for copying text to the clipboard this is the format[text, copyFN].
 */
export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [text, setText] = useState<CopiedValue>(null)

  /**
   * Copies the specified text to the clipboard.
   *
   * @param {string} text - The text to copy to the clipboard.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the text was successfully copied to the clipboard and `false` otherwise.
   */
  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setText(null)
      return false
    }
  }

  return [text, copy]
}
