import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const roadSign = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 14v-2c0-.6.4-1 1-1h5m0 0-2-2m2 2-2 2m-2.5 7.4-6.9-6.9c-.8-.8-.8-2.2 0-3l6.9-6.9c.8-.8 2.2-.8 3 0l6.9 6.9c.8.8.8 2.2 0 3l-6.9 6.9c-.8.8-2.2.8-3 0Z" />
  </Svg>
)

export default roadSign
