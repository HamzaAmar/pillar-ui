import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const vk = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4V6h4v4.5h0A4.5 4.5 0 0 0 18 6h4l-.3 1.7a6.9 6.9 0 0 1-3.7 4.8 5.3 5.3 0 0 1 3.6 4.1L22 19h-4a4.5 4.5 0 0 0-4-4.5V19h0Z" />
  </svg>
)

export default vk
