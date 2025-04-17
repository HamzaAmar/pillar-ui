import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const machine = (props: SvgType) => (
  <Svg {...props}>
    <path d="M16 14a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0c-1.3.7-2.7.7-4 0a4.2 4.2 0 0 0-4 0m0-8h0m3 0h0m3 0h2M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default machine
