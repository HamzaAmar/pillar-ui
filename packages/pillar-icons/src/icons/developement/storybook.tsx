import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const storybook = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 15c.6 1.5 1.6 2 3.3 2H12c1.8 0 3-1 3-2.4 0-1.2-.8-1.8-2.1-2.4l-2-.8C9.7 11 9 10 9 9s.9-1.8 2-2h.7c1.5-.1 3 .8 3.3 2m1-5.5v1M5 4l.5 16.5L19 21V3L5 4Z" />
  </svg>
)

export default storybook
