import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3.2 5.8C2 5.7 2 5.3 2 5c0-.2.4-1 4.3-1C11 4 21 7.6 21 14s-8.7 5-10.4 4.6C8.8 18 5 16.3 5 14.4 5 13 8 12 11.7 12c3.6 0 5.3 1 5.3 2 0 .5 0 1.2-1 1.5M10 8v13" />
  </svg>
)

export default SvgComponent
