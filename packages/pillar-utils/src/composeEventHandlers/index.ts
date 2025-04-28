/**
 * Composes multiple event handlers into a single handler.
 *
 * @template T - The type of the event object.
 * @param {...((event: T) => void)} handlers - The event handlers to compose.
 * @returns {(event: T) => void} - The composed event handler.
 */

export const composeEventHandlers =
  (...handlers: ((event: Event) => void)[]) =>
  (event: Event) =>
    handlers.forEach((handler) => typeof handler === 'function' && handler(event))
