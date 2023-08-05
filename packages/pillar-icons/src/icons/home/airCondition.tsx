import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const airCondition = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 16a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v4m-5-7v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
)

export default airCondition
