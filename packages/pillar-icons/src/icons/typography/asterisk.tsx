import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12 12 8-4.5M12 12v9m0-9L4 7.5m8 4.5 8 4.5M12 12V3m0 9-8 4.5" />
  </svg>
)

export default justify
