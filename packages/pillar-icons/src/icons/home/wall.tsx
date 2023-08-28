import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wall = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 8h16m0 4H4m0 4h16M9 4v4m5 0v4m-6 0v4m8-4v4m-5 0v4M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
  </svg>
)

export default wall
