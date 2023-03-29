import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const scooter = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default scooter
