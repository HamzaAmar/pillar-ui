import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const circuitCapacitor = (props: SvgType) => (
  <Svg {...props}>
    <path d="M22 12h-8M2 12h8m0-5v10m4-10v10m3-12h4m-2-2v4" />
  </Svg>
)

export default circuitCapacitor
