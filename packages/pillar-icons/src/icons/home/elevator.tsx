import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const elevator = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m10 10 2-2 2 2m-4 4 2 2 2-2M5 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Z" />
  </svg>
)

export default elevator
