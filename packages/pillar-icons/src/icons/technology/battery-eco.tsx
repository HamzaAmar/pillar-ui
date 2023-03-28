import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const BatteryEco = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2h-5.5M3 17h2.3C8 17 10 14.7 10 11.9V11H7.7C5 11 3 13.3 3 16.1v.9Zm0 0v3" />
  </svg>
)

export default BatteryEco
