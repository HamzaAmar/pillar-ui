/**
 * Composes multiple event handlers into a single handler.
 *
 * @template T - The type of the event object.
 * @param {...((event: T) => void)} handlers - The event handlers to compose.
 * @returns {(event: T) => void} - The composed event handler.
 */
export function composeEventHandlers<T extends MouseEvent>(...handlers: ((event: T) => void)[]): (event: T) => void {
  return (event: T) => {
    for (const handler of handlers) {
      if (typeof handler === 'function') {
        handler(event)
      }
    }
  }
}
