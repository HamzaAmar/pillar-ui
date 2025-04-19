import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const droplet = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7.5 19.4a7.2 7.2 0 0 0 9 0 6.6 6.6 0 0 0 1.6-8.5l-5-7.3a1.4 1.4 0 0 0-2.3 0L6 11a6.6 6.6 0 0 0 1.6 8.5Z" />
  </Svg>
)

export default droplet
