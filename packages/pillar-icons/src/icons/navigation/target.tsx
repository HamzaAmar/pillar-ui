import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const target = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
)

export default target
