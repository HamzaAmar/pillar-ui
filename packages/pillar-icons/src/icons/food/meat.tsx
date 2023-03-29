import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const meat = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13.6 8.4 2-2A2 2 0 1 1 19 5a2 2 0 1 1-1.4 3.4l-1.8 1.8M13 21.4c-1.2 1.2-4.4 0-7.1-2.8-2.7-2.7-4-5.9-2.8-7m9.9 9.8c1.1-1.1-.1-4.3-2.9-7-2.7-2.8-5.9-4-7-2.9m9.9 10c3.9-4 4.8-9.4 2.1-12.1-2.7-2.7-8.1-1.8-12 2.1M7.5 16l1 1" />{' '}
  </svg>
)

export default meat
