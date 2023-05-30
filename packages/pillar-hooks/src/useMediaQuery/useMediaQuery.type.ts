export interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean
}

export type MediaQueryCallback = (event: { matches: boolean; media: string }) => void
