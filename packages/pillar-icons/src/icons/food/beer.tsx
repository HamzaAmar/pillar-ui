import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const beer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 8h10M9 20h6v-4.1a8 8 0 0 1 .8-3.6l.4-.6A8 8 0 0 0 17 8V4H7v4.1a8 8 0 0 0 .8 3.6l.4.6A8 8 0 0 1 9 16V20Z" />
  </svg>
)

export default beer
