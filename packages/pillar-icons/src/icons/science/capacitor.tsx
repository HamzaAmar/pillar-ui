import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const capacitor = (props: SvgType) => (
  <Svg {...props}>
    <path d="M22 12h-8M2 12h8m0-5v10m4-10v10" />
  </Svg>
)

export default capacitor
