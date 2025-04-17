import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const temperature = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 9h4m4 0h6m-3-3v6M8 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0v8.5Z" />
  </Svg>
)

export default temperature
