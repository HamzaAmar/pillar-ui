import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pinterest = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 20 4-9m-1.3 3c.4 1.3 1.4 2 2.6 2 2 0 3.7-1.6 3.7-4a5 5 0 1 0-9.7 1.7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default pinterest
