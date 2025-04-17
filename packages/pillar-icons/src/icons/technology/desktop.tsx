import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const desktop = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 20h10m-8-4v4m6-4v4M4 4h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Z" />
  </Svg>
)

export default desktop
