import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const backpack = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 6V5a2 2 0 1 1 4 0v1M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4m-4-11h2m-8 8v-6a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z" />
  </Svg>
)

export default backpack
