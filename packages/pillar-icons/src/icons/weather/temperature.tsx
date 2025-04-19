import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const temperature = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 9h4m-4 4.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0v8.5Z" />
  </Svg>
)

export default temperature
