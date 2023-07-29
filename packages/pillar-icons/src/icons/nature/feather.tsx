import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const feather = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 20 10-10m0 0V5m0 5h5m-5-5-4 4m4-4c.6-.6 1.5-1 2.5-1A3.5 3.5 0 0 1 20 7.5c0 1-.4 1.9-1 2.5m0 0-4 4m-5-5v5h5m-5-5-4 4v5h5l4-4" />
  </svg>
)
export default feather
