import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const temperature = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 8h8.5a2.5 2.5 0 1 0-2.3-3.2M3 12h15.5a2.5 2.5 0 1 1-2.3 3.2M4 16h5.5a2.5 2.5 0 1 1-2.3 3.2" />
  </svg>
)

export default temperature
