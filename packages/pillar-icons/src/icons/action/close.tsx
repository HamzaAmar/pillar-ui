import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const close = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13.3 1.6-12 12m0-12 12 12" />
  </svg>
)

export default close
