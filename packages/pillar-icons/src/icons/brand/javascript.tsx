import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const javascript = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.4a.5.5 0 0 1 .5.6l-.4 2.9-2 .5M20 4l-2 14.5-6 2-6-2L4 4h16Z" />
  </svg>
)

export default javascript
