import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mapPins = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 7v0m8 8v0m-5.2-5.2a4 4 0 1 0-5.6 0L8 12.7l2.8-2.9Zm8 8a4 4 0 1 0-5.6 0l2.8 2.9 2.8-2.9Z" />
  </Svg>
)

export default mapPins
