import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const line = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7.5 16.5 9-9M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM16 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </Svg>
)

export default line
