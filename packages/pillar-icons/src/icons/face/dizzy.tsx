import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dizzy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14.5 16a3.5 3.5 0 0 0-5 0M8 9l2 2m0-2-2 2m6-2 2 2m0-2-2 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)
export default dizzy
