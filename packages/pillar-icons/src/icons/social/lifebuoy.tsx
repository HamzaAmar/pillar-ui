import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const lifebuoy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m15 15 3.4 3.4M9 15l-3.4 3.4m0-12.7L9 9m9.4-3.3L15 9m1 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default lifebuoy
