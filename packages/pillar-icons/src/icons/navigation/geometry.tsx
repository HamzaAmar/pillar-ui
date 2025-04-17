import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const geometry = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 21 4-12m2 0 1.5 4.4m1 2.9L17 21M12 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V3m-8 9c1.5 3 4.6 5 8 5 3.4 0 6.5-2 8-5" />
  </Svg>
)

export default geometry
