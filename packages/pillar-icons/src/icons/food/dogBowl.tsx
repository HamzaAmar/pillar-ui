import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dogBowl = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m14 15 3.6-3.6A2 2 0 1 0 19 8a2 2 0 1 0-3.4 1.4L10 15l-3.6-3.6A2 2 0 1 1 5 8a2 2 0 1 1 3.4 1.4L12 13m-9 7h18c-.2-1.7 0-3.3-2-5H5c-1.3 1-2 2.7-2 5Z" />
  </svg>
)

export default dogBowl
