import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pound = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 18.5a6 6 0 0 1-5 0 6 6 0 0 0-5 .5 3 3 0 0 0 2-2.5V9a4 4 0 0 1 7.4-2M14 13h-7" />
  </svg>
)

export default pound
