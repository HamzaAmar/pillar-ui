import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const zoomCancel = (props: SvgType) => (
  <Svg {...props}>
    <path d="m8 8 4 4m0-4-4 4m13 9-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </Svg>
)

export default zoomCancel
