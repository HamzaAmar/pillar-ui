import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const vue = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18.5 5 12 15 5.5 5M15 5l-3 4.5L9 5H2l10 16L22 5h-7Z" />
  </svg>
)

export default vue
