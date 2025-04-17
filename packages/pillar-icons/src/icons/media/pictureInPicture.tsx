import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const pictureInPicture = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-6 3h5l1 1v3l-1 1h-5l-1-1v-3l1-1Z" />
  </Svg>
)

export default pictureInPicture
