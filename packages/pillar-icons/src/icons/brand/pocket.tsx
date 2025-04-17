import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pocket = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8 11 4 4 4-4M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1-18 0V6a2 2 0 0 1 2-2Z" />
  </Svg>
)

export default pocket
