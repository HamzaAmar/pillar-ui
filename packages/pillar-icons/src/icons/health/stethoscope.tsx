import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stethoscope = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 4H5a2 2 0 0 0-2 2v3.5a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-9-9v2M6 3v2" />
  </svg>
)

export default stethoscope
