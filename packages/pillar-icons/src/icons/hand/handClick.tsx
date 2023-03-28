import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const handOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 12V4.5a1.5 1.5 0 1 0-3 0V13l-1.5-1.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2L7 19l.2.3a6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 1 0-3 0m-6 0v-2a1.5 1.5 0 1 1 3 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12M5 3 4 2m0 5H3m11-4 1-1m0 4h1" />
  </svg>
)

export default handOff
