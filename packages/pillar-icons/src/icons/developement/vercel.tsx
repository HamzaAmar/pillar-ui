import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const vercel = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 19h18L12 4 3 19Z" />
  </Svg>
)

export default vercel
