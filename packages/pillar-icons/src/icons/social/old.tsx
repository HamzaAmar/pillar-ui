import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const old = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m11 21.5-1-4-2-3v-6m0 0-4 3 1 3m3-6 3 2 3 .5m-7 6.5-2 4m11 0V13a1.5 1.5 0 0 1 3 0v.5m-10-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default old
