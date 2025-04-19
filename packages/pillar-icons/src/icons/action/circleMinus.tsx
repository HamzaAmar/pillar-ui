import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circleMinus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 12h6m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Svg>
)

export default circleMinus
