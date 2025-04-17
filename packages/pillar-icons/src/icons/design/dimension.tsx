import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cut = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 5h11M3 5l2-2M3 5l2 2m9-2-2 2m2-2-2-2m7 7v11m0-11 2 2m-2-2-2 2m2 9-2-2m2 2 2-2M3 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z" />
  </Svg>
)

export default cut
