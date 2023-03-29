import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const currentLocation = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8h2m-10 8a8 8 0 0 1-8-8m8 8v2M4 12a8 8 0 0 1 8-8m-8 8H2m10-8V2m3 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default currentLocation
