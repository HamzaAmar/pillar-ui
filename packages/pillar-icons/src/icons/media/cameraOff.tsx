import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const cameraOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="M8 4a1 1 0 0 1 1 0h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1 3H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m3 3a3 3 0 1 0 5 5M3 3l18 18" />
  </Svg>
)

export default cameraOff
