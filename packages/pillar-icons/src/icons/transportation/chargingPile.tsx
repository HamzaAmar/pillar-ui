import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const chargingPile = (props: SvgType) => (
  <Svg {...props}>
    <path d="m18 7-1 1m-3 3h1a2 2 0 0 1 2 2v3a1.5 1.5 0 1 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14m-5-8.5L7.5 14h3L9 16.5M3 20h12M4 8h10" />
  </Svg>
)

export default chargingPile
