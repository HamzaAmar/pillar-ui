import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bar = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />{' '}
  </svg>
)

export default bar
