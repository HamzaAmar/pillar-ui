import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const database = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 6c0 1.7-3.6 3-8 3S4 7.7 4 6m16 0c0-1.7-3.6-3-8-3S4 4.3 4 6m16 0v6M4 6v8m5 .8 3 .2c4.4 0 8-1.3 8-3m0 0v6c0 1.7-3.6 3-8 3h-.7M2 19h7m0 0-3-3m3 3-3 3" />
  </svg>
)

export default database
