import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 22a10 10 0 1 1 1.3-20A10 10 0 0 1 20 5l-3.3 3.3a5.2 5.2 0 0 0-9 3.7 5.3 5.3 0 0 0 5.3 5.2 5.2 5.2 0 0 0 3.7-1.5l3.3 3.4a9.9 9.9 0 0 1-7 2.9Z" />
  </svg>
)

export default SvgComponent
