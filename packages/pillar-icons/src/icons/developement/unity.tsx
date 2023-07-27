import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const unity = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m14 3 6 4m0 0v7m0-7-8 5m6 5-6 4m0 0-6-4m6 4v-9m-8 2V7m0 0 6-4M4 7l8 5" />
  </svg>
)

export default unity
