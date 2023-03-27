import { svgProps } from '../shared'
import { SvgType } from '../type'

const maximize = ({ direction = 'bottom', ...rest }: SvgType) => (
  <svg {...svgProps} {...rest}>
    <path d="M16 4h4m0 0v4m0-4-6 6M8 20H4m0 0v-4m0 4 6-6m6 6h4m0 0v-4m0 4-6-6M8 4H4m0 0v4m0-4 6 6" />
  </svg>
)

export default maximize
