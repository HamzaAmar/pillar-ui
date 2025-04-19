import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const artboard = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 8h1m-1 8h1M8 3v1m8-1v1m4 4h1m-1 8h1M8 20v1m8-1v1M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Z" />
  </Svg>
)

export default artboard
