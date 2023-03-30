import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const license = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 2 2Zm0 0a2 2 0 0 0 2-2V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4" />
  </svg>
)

export default license
