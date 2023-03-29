import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const groundGroundDigital = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 13V3m0 18-6-8h12l-6 8Z" />
  </svg>
)

export default groundGroundDigital
