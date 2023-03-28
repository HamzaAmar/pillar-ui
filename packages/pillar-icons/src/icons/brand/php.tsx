import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m5.5 15 1-5h1.3a1 1 0 0 1 1 1.2l-.2 1a1 1 0 0 1-1 .8H6m9.5 2 1-5h1.3a1 1 0 0 1 1 1.2l-.2 1a1 1 0 0 1-1 .8H16m-4-5.5L11 13m.6-3H14l-.5 3m8.5-1c0 5-4.5 9-10 9S2 17 2 12s4.5-9 10-9 10 4 10 9Z" />
  </svg>
)

export default SvgComponent
