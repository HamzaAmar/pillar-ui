import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const seeding = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6v10m0-6a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3" />
  </svg>
)
export default seeding
