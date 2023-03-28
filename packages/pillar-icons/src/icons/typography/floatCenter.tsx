import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 7h1m-1 4h1m14-4h1m-1 4h1M4 15h16M4 19h16M10 5h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
  </svg>
)

export default justify
