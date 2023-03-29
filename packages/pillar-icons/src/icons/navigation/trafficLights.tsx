import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const trafficLight = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 7A5 5 0 0 0 7 7v10a5 5 0 0 0 10 0V7Z" />
    <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
)

export default trafficLight
