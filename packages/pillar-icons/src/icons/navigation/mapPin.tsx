import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mapPin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="m17.7 16.7-4.3 4.2a2 2 0 0 1-2.8 0l-4.3-4.2a8 8 0 1 1 11.4 0Z" />
  </svg>
)

export default mapPin
