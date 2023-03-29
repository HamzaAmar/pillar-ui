import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rocket = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3m-6-4a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3Zm12-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default rocket
