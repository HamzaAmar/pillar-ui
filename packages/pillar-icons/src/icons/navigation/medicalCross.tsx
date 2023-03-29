import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const medicalCross = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 3a1 1 0 0 1 1 1v4.5l4-2.2a1 1 0 0 1 1.3.3l1 1.8a1 1 0 0 1-.4 1.3L16 12l4 2.3a1 1 0 0 1 .3 1.3l-1 1.8a1 1 0 0 1-1.4.3L14 15.5V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.5l-4 2.2a1 1 0 0 1-1.3-.3l-1-1.8a1 1 0 0 1 .4-1.3L8 12 4 9.7a1 1 0 0 1-.3-1.3l1-1.8a1 1 0 0 1 1.4-.3L10 8.5V4a1 1 0 0 1 1-1h2Z" />
  </svg>
)

export default medicalCross
