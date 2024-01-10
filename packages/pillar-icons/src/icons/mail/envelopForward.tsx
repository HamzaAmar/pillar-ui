import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const envelopForward = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 18H5a2 2 0 0 1-2-2V6m0 0a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 6l9 6 9-6m0 0v7.5M15 18h6m0 0-3-3m3 3-3 3" />
  </svg>
)

export default envelopForward
