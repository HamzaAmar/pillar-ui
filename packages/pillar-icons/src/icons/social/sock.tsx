import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sock = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7.9 15.8C8.6 15 9 14 9 13a4 4 0 0 0-4-4m8-6v6l4.8 5.1a4 4 0 0 1-5.4 6l-6.8-6.5a2 2 0 0 1-.6-1.5V3h8Z" />
  </svg>
)

export default sock
