import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const docker = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 10H5v3h3m0-3v3m0-3h3m-3 0V7h3m-3 6h3m0-3v3m0-3h3m-3 0V7m0 6h3v-3m0 0V7m-3 0h3m-3 0V4h3v3M4.6 18c1.5 0 2 0 3-.8M10 16v0m12-3.5c-1.8-.3-2.7-1-3.5-2.9-.5.7-1.1 1.6-1 2.4 0 .2-.3 1-.5 1H3c0 5.2 3.2 7 6.2 7 4.1 0 7.8-1.4 9.9-5 1.1-.1 2.2-1.5 2.9-2.5Z" />
  </Svg>
)

export default docker
