import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const components = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 12 3 3 3-3-3-3-3 3ZM15 12l3 3 3-3-3-3-3 3ZM9 6l3 3 3-3-3-3-3 3ZM9 18l3 3 3-3-3-3-3 3Z" />
  </Svg>
)

export default components
