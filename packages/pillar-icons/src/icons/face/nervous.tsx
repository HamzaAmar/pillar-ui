import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const nervous = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 10h0m6 0h0m-7 6 2-2 2 2 2-2 2 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)
export default nervous
