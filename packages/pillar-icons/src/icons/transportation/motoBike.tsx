import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const motoBike = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7.5 14h5l4-4H6l1.5 4Zm0 0 4-4M13 6h2l3.5 7M8 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default motoBike
