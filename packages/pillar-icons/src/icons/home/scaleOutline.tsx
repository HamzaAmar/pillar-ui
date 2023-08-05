import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const scaleOutline = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z" />
    <path d="M12 7c2 0 3.7.8 5 2.1L14 12a3 3 0 0 0-4 0L7 9.1A7 7 0 0 1 12 7h0Z" />
  </svg>
)

export default scaleOutline
