import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const apple = (props: SvgType) => (
  <Svg {...props}>
    <path d="m17.5 6.5-1 1M3 21c-.7-.7 3.3-6.2 11.8-16.7a3.5 3.5 0 1 1 5 4.8C9.4 17.7 3.8 21.7 3 21Z" />
  </Svg>
)

export default apple
