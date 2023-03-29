import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const photos = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 8h0M4 15l4-4 2-1 1 1 5 5m-2-2 1-1 2-1 1 1 2 2M7 4h10c2 0 3 1 3 3v10c0 2-1 3-3 3H7c-2 0-3-1-3-3V7c0-2 1-3 3-3Z" />
  </svg>
)

export default photos
