import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const lock = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 11V7a4 4 0 0 1 8 0v4m-9 0h10l2 2v6l-2 2H7l-2-2v-6l2-2Zm6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default lock
