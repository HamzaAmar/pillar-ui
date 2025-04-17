import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const angry = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8 9 2 1m6-1-2 1m.5 6a3.5 3.5 0 0 0-5 0m2.5 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
  </Svg>
)
export default angry
