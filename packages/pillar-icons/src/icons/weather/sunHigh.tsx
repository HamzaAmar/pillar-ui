import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sunHigh = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.3 17.7 5 19M6.3 6.3 5 5m12.8 1.4L19 5m-1.4 12.8L19 19M4 12H2m10-8V2m8 10h2m-10 8v2m2.8-7.2a4 4 0 1 0-5.5-5.7 4 4 0 0 0 5.5 5.7Z" />
  </svg>
)

export default sunHigh
