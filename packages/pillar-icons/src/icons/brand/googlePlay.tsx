import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const googlePlay = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 9 4.5 20.5m0-17L15 15M4 3.7v16.6a.7.7 0 0 0 1 .6l14.7-8.4a.5.5 0 0 0 0-1L5 3.1a.7.7 0 0 0-1.1.6Z" />
  </svg>
)

export default googlePlay
