import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ghost = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 11h0m4 0h0m-4 4a3.5 3.5 0 0 0 4 0m-9-3a7 7 0 0 1 14 0v7a1.8 1.8 0 0 1-3.1 1.4 1.6 1.6 0 0 0-2.6 0 1.6 1.6 0 0 1-2.6 0 1.6 1.6 0 0 0-2.6 0A1.8 1.8 0 0 1 5 19v-7Z" />
  </svg>
)

export default ghost
