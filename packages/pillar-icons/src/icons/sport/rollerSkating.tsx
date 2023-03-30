import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pool = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5.9 5h3.4a1 1 0 0 1 1 .6l1 2.9a3 3 0 0 0 2.3 1.8l4.7 1a2 2 0 0 1 1.7 2v.7a1 1 0 0 1-1 1H5.1a1 1 0 0 1-1-1.1l.8-8A1 1 0 0 1 6 5Z" />
    <path d="M8 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
)

export default pool
