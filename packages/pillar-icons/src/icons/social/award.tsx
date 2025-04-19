import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const award = (props: SvgType) => (
  <Svg {...props}>
    <path d="m12 15 3.4 5.9 1.6-3.2 3.6.2-3.4-5.9M6.8 12l-3.4 5.9 3.6-.2 1.6 3.2L12 15m6-6A6 6 0 1 1 6 9a6 6 0 0 1 12 0Z" />
  </Svg>
)

export default award
