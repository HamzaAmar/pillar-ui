import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const fahrenheit = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 12h5m2-6h-6a1 1 0 0 0-1 1v11M8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default fahrenheit
