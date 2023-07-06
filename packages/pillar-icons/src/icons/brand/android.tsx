import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const android = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 10v6m16-6v6M7 9h10M7 9v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9M7 9a5 5 0 1 1 10 0M8 3l1 2m7-2-1 2M9 18v3m6-3v3" />
  </svg>
)

export default android
