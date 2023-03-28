import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19.4 17.1a9 9 0 1 1 1.6-5.7c.2 3-5 2.4-7 1.5 1.5-1.6.5-4-2.2-3.9-1.8.1-3 1.2-2.8 3.2.3 4 4.5 6.2 10.4 4.8M3 12.6c-.3-4 8.7-7.2 11.3-2.7m-1.7 11c-3 .3-5.1-4.6-3.5-9.7" />
  </svg>
)

export default SvgComponent
