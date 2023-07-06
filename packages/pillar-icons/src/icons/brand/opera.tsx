import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const opera = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="M12 17c1.7 0 3-2.2 3-5s-1.3-5-3-5-3 2.2-3 5 1.3 5 3 5Z" />
  </svg>
)

export default opera
