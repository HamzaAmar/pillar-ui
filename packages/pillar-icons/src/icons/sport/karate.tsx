import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const karate = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 9 4.5 1 3 2.5M13 21v-8l3-5.5m0 0-4-1-4-2m8 3 4 3.5-2 3.5M19 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </Svg>
)

export default karate
