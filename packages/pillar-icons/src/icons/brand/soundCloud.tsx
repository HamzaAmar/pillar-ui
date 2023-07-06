import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const soundCloud = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 8v9m-3 0v-7m-3 6v-2m14-3h1c1.4 0 3 1.3 3 3s-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4Z" />
  </svg>
)

export default soundCloud
