import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const photosOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M15 8h0M8 4h9a3 3 0 0 1 3 3v9M4 15l4-4h3l5 5m0-4 2 1 2 2m-1 4-2 1H7a3 3 0 0 1-3-3V7l1-2 14 14Z" />
  </svg>
)

export default photosOff
