import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const files = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 3v4a1 1 0 0 0 1 1h4m-5-5h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V8m-5-5 5 5m-4 9v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
  </svg>
)

export default files
