import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const brackets = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 4H5v16h3m8-16h3v16h-3" />
    <path d="M22 12h-8M2 12h8m0-5v10m4-10v10" />
  </Svg>
)

export default brackets
