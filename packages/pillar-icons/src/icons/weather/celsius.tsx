import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const temperature = (props: SvgType) => (
  <Svg {...props}>
    <path d="M20 9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3M8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default temperature
