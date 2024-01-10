import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const messages = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 9h8m-8 4h6m-5 5H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-3 3-3-3Z" />
  </svg>
)

export default messages
