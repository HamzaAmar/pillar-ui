import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const uber = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm0 0h6m1-3h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1Z" />
  </Svg>
)

export default uber
