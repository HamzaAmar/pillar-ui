import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const diodeZener = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-6m0 0L8 7v10l8-5ZM2 12h6m6-5h2v10h2" />
  </svg>
)

export default diodeZener
