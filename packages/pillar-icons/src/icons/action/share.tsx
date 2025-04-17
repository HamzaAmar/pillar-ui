import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const share = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8.7 10.7 6.6-3.4m-6.6 6 6.6 3.4M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  </Svg>
)
export default share
