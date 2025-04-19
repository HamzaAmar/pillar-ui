import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const scissors = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8.6 8.6 19 19M8.6 15.4 19 5M3 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </Svg>
)

export default scissors
