import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const squareCheck = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6.3 9.6 2 2 4-4m-9-6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12c0-1.1 1-2 2-2Z" />
  </svg>
)

export default squareCheck
