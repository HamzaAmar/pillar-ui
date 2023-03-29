import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pictureInPictureOn = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M7 9l4 4m0 0H8m3 0v-3m4 4h5l1 1v3l-1 1h-5l-1-1v-3l1-1Z" />
  </svg>
)

export default pictureInPictureOn
