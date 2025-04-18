import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxFive = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 16h2a2 2 0 0 0 0-4h-2V8h4M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default boxFive
