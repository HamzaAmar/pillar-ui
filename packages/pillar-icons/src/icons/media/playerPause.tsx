import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playerPause = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 5H7L6 6v12l1 1h2l1-1V6L9 5ZM17 5h-2l-1 1v12l1 1h2l1-1V6l-1-1Z" />
  </svg>
)

export default playerPause
