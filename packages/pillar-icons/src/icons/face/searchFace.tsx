import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const searchFace = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12a9 9 0 1 0-9 9M9 10h0m6 0h0m-5.5 5c.7.7 1.6 1 2.5 1m8.2 4.2L22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </svg>
)
export default searchFace
