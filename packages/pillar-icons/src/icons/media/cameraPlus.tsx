import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cameraPlus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 4h-2a1 1 0 0 0-1 1 2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7m-6-5h6m-3-3v6m-3 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </Svg>
)

export default cameraPlus
