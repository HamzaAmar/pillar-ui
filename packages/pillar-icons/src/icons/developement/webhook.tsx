import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const webhook = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4.9 13.6A4 4 0 1 0 11 17h6m-2 3.5a4 4 0 1 0 2-7.5c-.7 0-1.4.2-2 .5L12 8m4 0a4 4 0 1 0-8 0 4 4 0 0 0 2 3.5L7 17" />
  </svg>
)

export default webhook
