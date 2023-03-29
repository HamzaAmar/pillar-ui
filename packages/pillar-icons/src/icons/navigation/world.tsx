import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const world = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18m8.5-9a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default world
