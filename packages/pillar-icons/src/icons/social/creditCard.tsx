import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const creditCard = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 10h18M7 15h0m4 0h2M6 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
  </Svg>
)

export default creditCard
