export interface FocusedIndex {
  index: number
  focused: boolean
}
type Direction = 'horizontal' | 'vertical' | 'both'

export type KeyEvent = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape'

export interface UseRovingIndexOptions {
  loop?: boolean
  defaultIndex?: number
  direction?: Direction
  counts?: number
}
