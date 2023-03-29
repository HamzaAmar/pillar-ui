import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const skateboard = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 9c0 .3.2.5.6.7.4.2.9.3 1.4.3h14c.5 0 1-.1 1.4-.3.4-.2.6-.4.6-.7M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />{' '}
  </svg>
)

export default skateboard
