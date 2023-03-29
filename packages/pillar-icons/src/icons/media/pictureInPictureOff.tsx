import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pictureInPictureOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M7 9l4 4M7 9v3m0-3h3m5 5h5l1 1v3l-1 1h-5l-1-1v-3l1-1Z" />
  </svg>
)

export default pictureInPictureOff
