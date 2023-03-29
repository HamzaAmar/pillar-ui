import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 6V3m4 5 2-2m0 6h3m-5 4 2 2m-6 0v3m-4-5-2 2m0-6H3m5-4L6 6" />
  </svg>
)

export default filterOff
