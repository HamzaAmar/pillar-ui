import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stethoscope = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.4 4h-1a2 2 0 0 0-2 2v3.5a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1m-3 11a6 6 0 0 0 12 0v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9-9v2m-5-2v2" />
  </svg>
)

export default stethoscope
