import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sublimText = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 12.5 19 8V2.5L5 7m0 5.5V7m0 5.5L19 17M5 7l14 4.5m0 5.5L5 21.5V16l14-4.5m0 5.5v-5.5" />
  </svg>
)

export default sublimText
