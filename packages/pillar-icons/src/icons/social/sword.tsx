import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sword = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6.5 11.5 6 6M20 4v5l-9 7-4 4-3-3 4-4 7-9h5Z" />
  </svg>
)

export default sword
