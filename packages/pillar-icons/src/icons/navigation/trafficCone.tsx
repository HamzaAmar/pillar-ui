import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const trafficCone = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 20h16M9.4 10h5.2m-6.8 5h8.4M6 20l5-15h2l5 15" />
  </svg>
)

export default trafficCone
