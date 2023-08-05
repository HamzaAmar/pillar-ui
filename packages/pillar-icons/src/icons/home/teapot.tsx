import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const teapot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7.5 12.5-4.3-5A.9.9 0 0 1 4 6h13A3 3 0 0 1 20 9v3a3 3 0 0 1-3 3M7 17h10M10.3 3h3.4a2 2 0 0 1 2 1.8l1.6 14a2 2 0 0 1-2 2.2H8.7a2 2 0 0 1-2-2.2l1.6-14a2 2 0 0 1 2-1.8Z" />
  </svg>
)

export default teapot
