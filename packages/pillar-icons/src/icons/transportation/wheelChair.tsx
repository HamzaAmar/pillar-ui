import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Wheelchair = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6m-2 2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
  </svg>
)

export default Wheelchair
