import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const handSanitizer = (props: SvgType) => (
  <Svg {...props}>
    <path d="M15 3H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4m-7 8h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10Z" />
  </Svg>
)

export default handSanitizer
