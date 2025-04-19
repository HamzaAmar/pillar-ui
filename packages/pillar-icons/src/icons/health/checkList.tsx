import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const checkList = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m-6 9h0m0 3h0m3-1 1 1 3-3" />
  </Svg>
)

export default checkList
