import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const applePodcast = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18.4 18.4a9 9 0 1 0-12.8 0m6.2 3.6h.4a2 2 0 0 0 2-1.8l.5-4a2 2 0 0 0-2-2.2h-1.4a2 2 0 0 0-2 2.2l.5 4a2 2 0 0 0 2 1.8ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default applePodcast
