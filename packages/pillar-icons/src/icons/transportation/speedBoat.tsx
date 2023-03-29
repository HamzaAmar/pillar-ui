import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const speedBoat = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 13 1.5-5M6 8h8l2 3M3 17h13.4a3 3 0 0 0 2.5-1.3L22 11h-6.2a4 4 0 0 0-1.5.3l-3.6 1.4a4 4 0 0 1-1.5.3H4.5L3 17Z" />{' '}
  </svg>
)

export default speedBoat
