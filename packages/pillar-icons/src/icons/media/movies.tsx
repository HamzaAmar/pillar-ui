import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const movies = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4v16m8-16v16M4 8h4m-4 8h4m-4-4h16m-4-4h4m-4 8h4M6 4h12l2 2v12l-2 2H6l-2-2V6l2-2Z" />
  </svg>
)

export default movies
