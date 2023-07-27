import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wordpress = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9.5 9h3M4 9h2.5M11 9l3 11 4-9m0 0c.2-.5 1-1.4 1-2.5 0-1.8-.8-2.5-1.9-2.5-.9 0-1.1.8-1.1 1.4 0 1.9 2 2 2 3.6ZM5.5 9 9 20l3-7m-9-1a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)

export default wordpress
