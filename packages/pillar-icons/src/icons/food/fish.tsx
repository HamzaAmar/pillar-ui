import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const fish = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16.7 7.4a7 7 0 0 0 0 9.2M2 9.5c7.7 8.7 14.8 10.3 20 2.5-5.3-7.8-12.3-6.1-20 2.5M18 11v0m-6.5-.5c-.7 1-.7 2 0 3" />
  </svg>
)

export default fish
