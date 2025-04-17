import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const borders = (props: SvgType) => (
  <Svg {...props}>
    <path d="M4 12h16m-8-8v16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
  </Svg>
)

export default borders
