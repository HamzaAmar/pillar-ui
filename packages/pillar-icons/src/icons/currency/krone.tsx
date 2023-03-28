import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const krone = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 6v12m6-12c0 3-2.5 6-6 6 3.5 0 6 3 6 6m4-8v8m4-8a4 4 0 0 0-4 4" />
  </svg>
)

export default krone
