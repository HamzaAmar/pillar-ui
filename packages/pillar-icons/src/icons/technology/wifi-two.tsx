import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wifiTwo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 18h0m-2.8-2.8a4 4 0 0 1 5.6 0" />
  </svg>
)

export default wifiTwo
