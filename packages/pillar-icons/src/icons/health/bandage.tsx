import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bandage = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 12v0m-4 0v0m2-2v0m0 4v0m-7.5-1.5 8-8a5 5 0 0 1 7 7l-8 8a5 5 0 1 1-7-7Z" />
  </svg>
)

export default bandage
