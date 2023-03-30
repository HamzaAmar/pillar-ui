import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const yoga = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 21h4l1.5-3m7.5 3-1-5h-5l1-7m0 0-8 2m8-2 8 3m-7-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default yoga
