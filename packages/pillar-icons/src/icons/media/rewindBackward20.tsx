import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rewindBackward20 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 16.5A6 6 0 0 0 15 6H4m0 0 3 3M4 6l3-3M6 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m3-4.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0Z" />
  </svg>
)

export default rewindBackward20
