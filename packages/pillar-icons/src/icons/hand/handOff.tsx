import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const handOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M8 13.5V8m.4-3.6A1.5 1.5 0 0 1 11 5.5m0 0V7m0-1.5v-2a1.5 1.5 0 1 1 3 0V10m-3 1v1m3-6.5a1.5 1.5 0 1 1 3 0V12m0-4.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2a7 7 0 0 1-5-3l-2.7-5.3a1.7 1.7 0 0 1 2.8-2l.9 1.8" />
  </svg>
)

export default handOff
