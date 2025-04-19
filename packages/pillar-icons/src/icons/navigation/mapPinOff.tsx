import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const mapPinOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="m3 3 18 18m-6-10a3 3 0 0 0-3-3M8 4a8 8 0 0 1 11 11m-1.8 2.2-3.8 3.7a2 2 0 0 1-2.8 0l-4.3-4.2A8 8 0 0 1 6 5.9m3.5 3.5a3 3 0 0 0 4.2 4.2L9.4 9.4Z" />
  </Svg>
)

export default mapPinOff
