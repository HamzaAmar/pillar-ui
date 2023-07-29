import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const heartBeat = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19.5 13.6 12 21l-2.9-2.9m-6.1-8a5 5 0 0 1 9-3 5 5 0 1 1 7.5 6.5M3 13h2l2 3 2-6 1 3h3" />
  </svg>
)

export default heartBeat
