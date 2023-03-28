import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const git = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10.5 8 10 7m3.5 7 .5 1m-5-2.5L8 13m3 1-.5 1M13 8l.5-1m2.5 5.5-1-.5m-6-2-1-.5M20 11a10 10 0 0 1-10 10v-2.3h0A8 8 0 1 1 20 11v0Z" />
  </svg>
)

export default git
