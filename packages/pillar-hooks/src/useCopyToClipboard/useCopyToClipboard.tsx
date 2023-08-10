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
 *
 * @example
 * // Example usage in a functional component:
 * import { useCopyToClipboard } from './path-to-hooks/useCopyToClipboard'; // Adjust the path accordingly
 *
 * function CopyToClipboardComponent() {
 *   const { text, copy, copied } = useCopyToClipboard(500);
 *
 *   const handleCopyClick = () => {
 *     copy('Text to copy');
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleCopyClick}>Copy to Clipboard</button>
 *       {copied ? <p>Copied: {text}</p> : null}
 *     </div>
 *   );
 * }
 */

export function useCopyToClipboard(timeout: number = 300) {
  const [text, setText] = useState<CopiedValue>(null)
  const [copied, setCopied] = useState<boolean>(false)

  /**
   * The copy function.
   *
   * @param {string} text - The text to copy to the clipboard.
   * @returns {Promise<boolean>} - A promise indicating whether the copy operation was successful.
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
