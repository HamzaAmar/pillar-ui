import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const starSmile = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 8.5 3 3m-3 0 3-3m4 0 3 3m-3 0 3-3M9.5 15a3.5 3.5 0 0 0 5 0M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />{' '}
  </svg>
)
export default starSmile
