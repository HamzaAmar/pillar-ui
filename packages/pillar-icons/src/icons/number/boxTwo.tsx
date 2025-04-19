import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const boxTwo = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 10a2 2 0 1 1 4 0c0 .6-.4 1.3-.8 1.9L10 16h4M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </Svg>
)

export default boxTwo
