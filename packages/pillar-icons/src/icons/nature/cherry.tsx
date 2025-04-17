import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cherry = (props: SvgType) => (
  <Svg {...props}>
    <path d="M17 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 0a10.2 10.2 0 0 1-1-9m-7 7c.4-2 1.9-3.9 4.5-5.6M16 6C12.3 3.3 8.7 3.3 5 6c3.7 2.7 7.3 2.7 11 0ZM4 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" />
  </Svg>
)
export default cherry
