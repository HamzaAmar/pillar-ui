import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pill = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8.5 8.5 7 7m-11-3 8-8a5 5 0 0 1 7 7l-8 8a5 5 0 1 1-7-7Z" />
  </svg>
)

export default pill
