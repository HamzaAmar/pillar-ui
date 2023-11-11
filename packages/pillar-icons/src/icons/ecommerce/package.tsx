import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Package = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 7.5 12 3 4 7.5m16 0v9L12 21m8-13.5L12 12m0 9-8-4.5v-9M12 21v-9M4 7.5l8 4.5m4-6.8L8 9.8" />
  </svg>
)
export default Package
