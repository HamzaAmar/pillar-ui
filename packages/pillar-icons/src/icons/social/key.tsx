import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const key = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10.8 13.1 19 5m-1 1 2 2m-5 1 2 2m-5 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default key
