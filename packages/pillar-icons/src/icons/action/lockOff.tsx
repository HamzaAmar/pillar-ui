import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const lockOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18m-6-10h2a2 2 0 0 1 2 2v2M8 11V8m1-3a4 4 0 0 1 7 2v4m3 8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4l8 8Zm-6-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default lockOff
