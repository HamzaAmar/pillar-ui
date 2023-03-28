import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sunOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18m-5-9a4 4 0 0 0-4-4M9.2 9.2a4 4 0 1 0 5.6 5.6M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
  </svg>
)

export default sunOff
