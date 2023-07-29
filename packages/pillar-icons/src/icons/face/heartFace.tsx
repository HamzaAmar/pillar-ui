import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const heartFace = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12a9 9 0 1 0-8 9M9 10h0m6 0h0m-5.5 5a3.6 3.6 0 0 0 2.8 1m6.7 5.5 2.5-2.6a1.7 1.7 0 0 0-.5-2.8 1.6 1.6 0 0 0-1.8.4l-.2.2-.2-.2a1.6 1.6 0 0 0-2.3 0 1.7 1.7 0 0 0 0 2.4l2.5 2.6Z" />
  </svg>
)
export default heartFace
