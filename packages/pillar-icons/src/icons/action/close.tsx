import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const close = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export default close
