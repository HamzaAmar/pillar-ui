import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const carousel = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 22l4-10 4 10M7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
)

export default carousel
