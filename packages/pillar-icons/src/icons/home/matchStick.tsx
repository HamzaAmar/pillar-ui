import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const matchStick = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-9 3.6 7.3a4 4 0 1 1-7.2 0L17 3Z" />
  </Svg>
)

export default matchStick
