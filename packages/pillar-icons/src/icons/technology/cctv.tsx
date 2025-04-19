import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cctv = (props: SvgType) => (
  <Svg {...props}>
    <path d="M19 7v7a7 7 0 1 1-14 0V7m7 7h0M4 3h16c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm12 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </Svg>
)

export default cctv
