import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cake = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 15.3 1 .2a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1c.3 0 .7 0 1-.2M3 20.5h18v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8Zm9-16 1.5 1.6a2 2 0 1 1-3 .1L12 4.5Z" />
  </svg>
)

export default cake
