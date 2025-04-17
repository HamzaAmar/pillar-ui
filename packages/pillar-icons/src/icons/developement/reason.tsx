import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const react = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 18h-3v-6h3m0 3h-3m-7 3v-6h2.5a1.5 1.5 0 1 1 0 3H8m4 3-2-3M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" />
  </Svg>
)

export default react
