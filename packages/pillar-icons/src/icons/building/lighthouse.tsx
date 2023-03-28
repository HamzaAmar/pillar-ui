import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const lighthouse = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 9h8M3 11l2-2-2-2m18 4-2-2 2-2m-9-4 2 3 2 15H8l2-15 2-3Z" />
  </svg>
)

export default lighthouse
